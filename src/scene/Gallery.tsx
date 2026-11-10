import { memo, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber'
import { Euler, Group, PerspectiveCamera, Quaternion, Vector3 } from 'three'
import { cardCode, type HeroConfig } from '../config'
import { projects } from '../data/projects'
import { CardModel } from './CardModel'
import { damp } from './motion'
import { fitHeroLayout } from './heroLayout'
import { StudioBackdrop } from './StudioBackdrop'
import { FrameLoop } from './FrameLoop'

interface GalleryProps {
  config: HeroConfig
  selected: number | null
  onSelect: (slot: number) => void
  onHover: (slot: number | null) => void
  onReady: () => void
  onDragging: (dragging: boolean) => void
}

const contactVertex = /* glsl */ `
  varying vec2 shadowUv;
  void main() {
    shadowUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const contactFragment = /* glsl */ `
  uniform float opacity;
  varying vec2 shadowUv;
  void main() {
    float fade = 1.0 - smoothstep(0.0, 0.5, length(shadowUv - 0.5));
    gl_FragColor = vec4(0.0, 0.0, 0.0, opacity * fade * fade);
  }
`

function Scene({ config, selected, onSelect, onHover, onReady, onDragging }: GalleryProps) {
  const { camera, size, gl } = useThree()
  const cards = useRef<(Group | null)[]>([])
  const drag = useRef({ active: false, x: 0, y: 0, pitch: 0, yaw: 0 })
  const angles = useRef(new Euler())
  const rotation = useRef(new Quaternion())
  const focusPosition = useRef(new Vector3())
  const up = useRef(new Vector3())
  const right = useRef(new Vector3())
  const dimensions = useMemo(() => ({
    width: config.cardWidth * config.cardUnitScale,
    height: config.cardHeight * config.cardUnitScale,
    thickness: config.cardThickness * config.cardUnitScale,
  }), [config.cardWidth, config.cardHeight, config.cardThickness, config.cardUnitScale])
  const layout = useMemo(() => fitHeroLayout({
    ...config,
    cardWidth: dimensions.width,
    cardHeight: dimensions.height,
    cardThickness: dimensions.thickness,
    aspect: size.width / Math.max(1, size.height),
  }), [config, dimensions, size.width, size.height])
  const shadowExtent = Math.max(10, layout.cardCenters.at(-1)! + dimensions.width + config.keyLeft)
  const azimuth = config.camAzimuth * Math.PI / 180
  const keyPosition: [number, number, number] = [
    -Math.cos(azimuth) * config.keyBehind - Math.sin(azimuth) * config.keyLeft,
    config.keyHeight,
    Math.sin(azimuth) * config.keyBehind - Math.cos(azimuth) * config.keyLeft,
  ]
  const contactUniforms = useMemo(() => ({ opacity: { value: config.contactOpacity } }), [config.contactOpacity])

  useEffect(() => {
    const cam = camera as PerspectiveCamera
    cam.position.set(...layout.cameraPosition)
    cam.up.set(0, 1, 0)
    cam.fov = config.fov
    cam.lookAt(...layout.cameraTarget)
    const width = Math.max(1, size.width)
    const height = Math.max(1, size.height)
    cam.setViewOffset(width, height, width * layout.viewOffsetX, height * layout.viewOffsetY, width, height)
    cam.updateMatrixWorld()
    gl.shadowMap.autoUpdate = false
    gl.shadowMap.needsUpdate = true
  }, [camera, config.fov, gl, layout, size.width, size.height])

  useEffect(() => { onReady() }, [onReady])

  useEffect(() => {
    drag.current.active = false
    drag.current.pitch = 0
    drag.current.yaw = 0
    onDragging(false)
    gl.shadowMap.needsUpdate = true
  }, [gl, onDragging, selected])

  useEffect(() => {
    const move = (event: PointerEvent) => {
      const state = drag.current
      if (!state.active) return
      state.pitch = Math.max(-0.85, Math.min(0.85, state.pitch + (event.clientY - state.y) * config.dragSensitivity))
      state.yaw += (event.clientX - state.x) * config.dragSensitivity
      state.x = event.clientX
      state.y = event.clientY
    }
    const end = () => {
      if (!drag.current.active) return
      drag.current.active = false
      onDragging(false)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', end)
    window.addEventListener('pointercancel', end)
    window.addEventListener('blur', end)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', end)
      window.removeEventListener('pointercancel', end)
      window.removeEventListener('blur', end)
    }
  }, [config.dragSensitivity, onDragging])

  useFrame((_, delta) => {
    const cam = camera as PerspectiveCamera
    const narrowFov = Math.min(1, cam.aspect) * Math.tan(cam.fov * Math.PI / 360)
    const distance = Math.max(config.focusDistance, dimensions.height / (1.2 * narrowFov))
    cam.getWorldDirection(focusPosition.current).multiplyScalar(distance).add(cam.position)
    up.current.set(0, 1, 0).applyQuaternion(cam.quaternion)
    focusPosition.current.addScaledVector(up.current, config.focusOffset - 2 * layout.viewOffsetY * distance * Math.tan(cam.fov * Math.PI / 360))
    right.current.set(1, 0, 0).applyQuaternion(cam.quaternion)
    focusPosition.current.addScaledVector(right.current, 2 * layout.viewOffsetX * distance * cam.aspect * Math.tan(cam.fov * Math.PI / 360))
    layout.cardCenters.forEach((x, index) => {
      const card = cards.current[index]
      if (!card) return
      if (selected === index) {
        card.position.x = damp(card.position.x, focusPosition.current.x, config.focusResponse, delta)
        card.position.y = damp(card.position.y, focusPosition.current.y, config.focusResponse, delta)
        card.position.z = damp(card.position.z, focusPosition.current.z, config.focusResponse, delta)
        angles.current.set(drag.current.pitch, drag.current.yaw, 0)
        rotation.current.setFromEuler(angles.current).premultiply(cam.quaternion)
        card.quaternion.slerp(rotation.current, 1 - Math.exp(-config.focusResponse * delta))
      } else {
        card.position.set(x, layout.cardY, 0)
        card.rotation.set(0, layout.yaw, 0)
      }
    })
  })

  const startDrag = (event: ThreeEvent<PointerEvent>, index: number) => {
    if (selected !== index) return
    event.stopPropagation()
    Object.assign(drag.current, { active: true, x: event.clientX, y: event.clientY })
    onDragging(true)
  }

  return <>
    <StudioBackdrop config={config} />
    <hemisphereLight args={[config.fillSky, config.fillGround, config.fillIntensity]} />
    <directionalLight
      position={keyPosition} intensity={config.keyIntensity} castShadow
      shadow-mapSize={[config.shadowResolution, config.shadowResolution]}
      shadow-camera-left={-shadowExtent} shadow-camera-right={shadowExtent}
      shadow-camera-top={shadowExtent} shadow-camera-bottom={-shadowExtent}
      shadow-camera-far={shadowExtent * 4}
      shadow-normalBias={0.012} shadow-bias={-0.00015} shadow-radius={config.shadowRadius}
    />
    {selected === null && <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -config.floorOffset, 0]} receiveShadow raycast={() => null}>
      <planeGeometry args={[shadowExtent * 4, shadowExtent * 4]} />
      <shadowMaterial opacity={config.shadowOpacity} depthWrite={false} />
    </mesh>}
    {layout.cardCenters.map((x, index) => <group key={index}>
      {selected === null && <group position={[x, -config.floorOffset / 2, 0]} rotation={[0, layout.yaw, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} raycast={() => null}>
          <planeGeometry args={[dimensions.width * config.contactWidth, dimensions.width * config.contactDepth]} />
          <shaderMaterial vertexShader={contactVertex} fragmentShader={contactFragment} uniforms={contactUniforms} transparent depthWrite={false} />
        </mesh>
      </group>}
      <group
        ref={node => { cards.current[index] = node }}
        position={[x, layout.cardY, 0]}
        rotation={[0, layout.yaw, 0]}
        visible={selected === null || selected === index}
        onClick={event => { if (selected === null) { event.stopPropagation(); onSelect(index) } }}
        onPointerOver={event => { if (selected === null) { event.stopPropagation(); onHover(index) } }}
        onPointerOut={() => onHover(null)}
        onPointerDown={event => startDrag(event, index)}
      >
        <CardModel {...config} dimensions={dimensions} code={cardCode(index)} project={projects[index % projects.length]} />
      </group>
    </group>)}
    <FrameLoop fps={config.frameRate} settleMs={850} isMoving={() => drag.current.active} />
  </>
}

export const Gallery = memo(function Gallery(props: GalleryProps) {
  return <Canvas
    frameloop="never" shadows="soft"
    dpr={[1, props.config.maxPixelRatio]}
    camera={{ fov: props.config.fov, near: 0.1, far: 1000 }}
    gl={{ antialias: true, alpha: false }}
    onPointerMissed={() => props.onHover(null)}
  >
    <Scene {...props} />
  </Canvas>
})
