import { memo, useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber'
import { DepthOfField, EffectComposer, EffectGroup, SMAA, ToneMapping } from '@react-three/postprocessing'
import { SMAAPreset, ToneMappingMode } from 'postprocessing'
import { Frustum, Group, Matrix4, PerspectiveCamera, Sphere, Vector3 } from 'three'
import type { Settings } from '../config'
import { projects } from '../data/projects'
import { CardModel } from './CardModel'
import { damp, hoverInfluence, wrapOffset } from './motion'
import { integrateScroll, wheelDelta } from './scroll'
import { FrameProbe } from './FrameProbe'
import { FrameLoop } from './FrameLoop'

export const SLOT_COUNT = projects.length * 3

interface GalleryProps {
  settings: Settings
  selected: number | null
  hovered: number | null
  reducedMotion: boolean
  paused: boolean
  onSelect: (slot: number) => void
  onHover: (slot: number | null) => void
  onReady: () => void
  onDragging: (dragging: boolean) => void
}

function Scene({ settings: s, selected, hovered, reducedMotion, paused, onSelect, onHover, onReady, onDragging }: GalleryProps) {
  const cards = useRef<(Group | null)[]>([])
  const phase = useRef(0.25)
  const speed = useRef(s.Row.speed)
  const focus = useRef(0)
  const cameraLift = useRef(0)
  const cameraBaseY = useRef(s.Camera.height)
  const scroll = useRef({ velocity: 0, lastInput: 0, active: false })
  const frustum = useRef(new Frustum())
  const projection = useRef(new Matrix4())
  const cardBounds = useRef(new Sphere())
  const shadowTime = useRef(1)
  const drag = useRef({ active: false, x: 0, y: 0, time: 0, rotationX: 0, rotationY: 0, vx: 0, vy: 0 })
  const { camera, gl, size, pointer, scene, events } = useThree()
  const lookAt = useRef(new Vector3())
  const focusPosition = useRef(new Vector3())
  const mobile = size.width < 700
  const blurResolution = mobile ? s.Responsive.mobileBlurResolution : s.Performance.blurResolution
  const shadowResolution = Number(s.Performance.shadowResolution)
  const settleMs = Math.max(1500, 7000 / Math.min(s.Hover.response, s.Focus.response, s.Focus.cameraResponse, s.Camera.response, s.Scroll.friction, s.Focus.inertia))

  useEffect(() => { onReady() }, [onReady])
  useEffect(() => {
    const cam = camera as PerspectiveCamera
    cam.fov = s.Camera.fov
    cam.updateProjectionMatrix()
    gl.toneMappingExposure = s.Lighting.exposure
    gl.shadowMap.autoUpdate = false
    gl.shadowMap.needsUpdate = true
  }, [camera, gl, s.Camera.fov, s.Lighting.exposure, s.Performance.shadows, shadowResolution, s.Performance.shadowBlurSamples])
  useEffect(() => {
    drag.current.rotationX = 0
    drag.current.rotationY = 0
    drag.current.vx = 0
    drag.current.vy = 0
  }, [selected])

  useEffect(() => {
    function move(event: PointerEvent) {
      const d = drag.current
      if (!d.active) return
      const dx = event.clientX - d.x
      const dy = event.clientY - d.y
      const elapsed = Math.max(0.016, (event.timeStamp - d.time) / 1000)
      d.vy = Math.max(-2, Math.min(2, dx * s.Focus.dragSensitivity / elapsed))
      d.vx = Math.max(-2, Math.min(2, dy * s.Focus.dragSensitivity / elapsed))
      d.rotationY += dx * s.Focus.dragSensitivity
      d.rotationX = Math.max(-0.9, Math.min(0.9, d.rotationX + dy * s.Focus.dragSensitivity))
      d.x = event.clientX
      d.y = event.clientY
      d.time = event.timeStamp
    }
    function up(event: Event) {
      if (!drag.current.active) return
      if (event.timeStamp - drag.current.time > 100) {
        drag.current.vx = 0
        drag.current.vy = 0
      }
      drag.current.active = false
      onDragging(false)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
    window.addEventListener('blur', up)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
      window.removeEventListener('blur', up)
    }
  }, [s.Focus.dragSensitivity, onDragging])

  useEffect(() => {
    const canvas = gl.domElement
    function wheel(event: WheelEvent) {
      // Keep pinch-to-zoom and scrolling inside dialogs/DialKit native.
      if (event.ctrlKey || selected !== null || paused) return
      const delta = wheelDelta(event.deltaX, event.deltaY, event.deltaMode, size.height)
      if (delta === 0) return
      event.preventDefault()
      const input = scroll.current
      const impulse = delta * s.Scroll.sensitivity * (s.Scroll.reverse ? -1 : 1)
      input.velocity = Math.max(-s.Scroll.maxSpeed, Math.min(s.Scroll.maxSpeed, input.velocity + impulse))
      input.lastInput = performance.now()
      input.active = true
      onHover(null)
    }
    canvas.addEventListener('wheel', wheel, { passive: false })
    return () => canvas.removeEventListener('wheel', wheel)
  }, [gl, onHover, paused, selected, size.height, s.Scroll.sensitivity, s.Scroll.maxSpeed, s.Scroll.reverse])

  useFrame((_, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05)
    const focusing = selected !== null
    const input = scroll.current
    if (focusing || paused) {
      input.velocity = 0
      input.active = false
    }
    const momentum = integrateScroll(input.velocity, s.Scroll.friction, dt)
    input.velocity = momentum.velocity
    const scrolling = input.active && (Math.abs(momentum.velocity) > 0.12 || performance.now() - input.lastInput < 180)
    const activeHover = scrolling ? null : hovered
    focus.current = damp(focus.current, focusing ? 1 : 0, s.Focus.response, dt)
    const progress = focus.current
    speed.current = damp(speed.current, activeHover !== null || focusing || paused || s.Row.paused || reducedMotion ? 0 : s.Row.speed, s.Row.pauseResponse, dt)
    phase.current = (phase.current + speed.current * dt + momentum.distance) % SLOT_COUNT

    const cam = camera as PerspectiveCamera
    const cameraDistance = s.Camera.distance + (mobile ? s.Responsive.mobileCameraOffset : 0)
    cameraLift.current = damp(cameraLift.current, focusing ? s.Focus.cameraRise : 0, s.Focus.cameraResponse, dt)
    cameraBaseY.current = damp(cameraBaseY.current, s.Camera.height + pointer.y * s.Camera.parallax * 0.35 * (1 - progress), s.Camera.response, dt)
    cam.position.set(
      damp(cam.position.x, pointer.x * s.Camera.parallax * (1 - progress), s.Camera.response, dt),
      cameraBaseY.current + cameraLift.current,
      damp(cam.position.z, cameraDistance, s.Camera.response, dt),
    )
    lookAt.current.set(0, s.Camera.targetHeight + cameraLift.current, 0)
    cam.lookAt(lookAt.current)
    cam.updateMatrixWorld()
    projection.current.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse)
    frustum.current.setFromProjectionMatrix(projection.current)
    shadowTime.current += dt
    if (s.Performance.shadows && shadowTime.current >= 1 / s.Performance.shadowFrameRate) {
      gl.shadowMap.needsUpdate = true
      shadowTime.current = 0
    }
    if (scene.fog && 'near' in scene.fog) {
      scene.fog.near = s.Lighting.fogNear
      scene.fog.far = s.Lighting.fogFar
    }

    const angle = Math.atan2(s.Camera.height - s.Camera.targetHeight, cameraDistance)
    const focusHeight = s.Focus.height * (mobile ? s.Responsive.mobileFocusLift : 1)
    focusPosition.current.set(0,
      s.Camera.targetHeight + Math.sin(angle) * s.Focus.distance + Math.cos(angle) * focusHeight + (focusing ? s.Focus.cameraRise : 0),
      Math.cos(angle) * s.Focus.distance - Math.sin(angle) * focusHeight,
    )
    const d = drag.current
    if (!d.active) {
      d.rotationY += d.vy * dt
      d.rotationX = Math.max(-0.9, Math.min(0.9, d.rotationX + d.vx * dt))
      d.vx = damp(d.vx, 0, s.Focus.inertia, dt)
      d.vy = damp(d.vy, 0, s.Focus.inertia, dt)
      if (focusing && !reducedMotion && !paused) d.rotationY += s.Focus.idleRotation * dt
    }
    const hoverOffset = activeHover === null ? null : wrapOffset(activeHover, phase.current, SLOT_COUNT)

    cards.current.forEach((card, i) => {
      if (!card) return
      const offset = wrapOffset(i, phase.current, SLOT_COUNT)
      const influence = hoverOffset === null ? { lift: 0, spread: 0 } : hoverInfluence(offset - hoverOffset, s.Hover.falloff)
      const track = offset * s.Row.spacing + influence.spread * s.Hover.gap
      const isSelected = i === selected
      const isHovered = i === activeHover
      const targetX = isSelected ? focusPosition.current.x : track
      const hoverLift = isHovered ? s.Hover.centerLift : influence.lift * s.Hover.centerLift * s.Hover.neighborLift
      const targetY = isSelected ? focusPosition.current.y : s.Row.height + hoverLift - progress * s.Focus.backgroundDrop
      const targetZ = isSelected ? focusPosition.current.z : -track * s.Row.depth - progress * s.Focus.backgroundRetreat
      // Wrapped cards are teleported only beyond the camera's visible edges.
      const hasWrapped = !isSelected && Math.abs(card.position.x - targetX) > SLOT_COUNT * s.Row.spacing * 0.65
      const response = isSelected ? s.Focus.response : scrolling ? s.Scroll.response : s.Hover.response
      card.position.set(
        hasWrapped ? targetX : damp(card.position.x, targetX, response, dt),
        damp(card.position.y, targetY, response, dt),
        hasWrapped ? targetZ : damp(card.position.z, targetZ, response, dt),
      )
      card.rotation.x = damp(card.rotation.x, isSelected ? -angle + s.Focus.pitch + d.rotationX : s.Row.tilt + (isHovered ? 1 : influence.lift * s.Hover.neighborLift) * s.Hover.tilt, response, dt)
      card.rotation.y = damp(card.rotation.y, isSelected ? s.Focus.yaw + d.rotationY : s.Row.yaw, response, dt)
      const scale = s.Row.scale * (isSelected ? s.Focus.scale * (mobile ? s.Responsive.mobileCardScale : 1) : 1)
      card.scale.setScalar(damp(card.scale.x, scale, response, dt))
      cardBounds.current.center.copy(card.position)
      cardBounds.current.radius = 3 * card.scale.x * Math.max(s['Card shape'].width, s['Card shape'].height)
      card.visible = (isSelected || progress < 0.995) && frustum.current.intersectsSphere(cardBounds.current)
    })
    // Re-evaluate the card under a stationary cursor once scrolling settles.
    // Updating every frame would let a rising card repeatedly exit its own hit area.
    if (input.active && !scrolling && !focusing && !paused) {
      input.active = false
      input.velocity = 0
      scene.updateMatrixWorld()
      events.update?.()
    }
  })

  function pointerDown(event: ThreeEvent<PointerEvent>, slot: number) {
    event.stopPropagation()
    if (selected !== slot) return
    drag.current.active = true
    drag.current.x = event.clientX
    drag.current.y = event.clientY
    drag.current.time = event.nativeEvent.timeStamp
    drag.current.vx = 0
    drag.current.vy = 0
    onDragging(true)
  }

  return <>
    <color attach="background" args={[s.Materials.floorColor]} />
    <fog attach="fog" args={[s.Materials.floorColor, s.Lighting.fogNear, s.Lighting.fogFar]} />
    <ambientLight intensity={s.Lighting.ambient} />
    <directionalLight
      key={shadowResolution}
      position={[s.Lighting.keyX, s.Lighting.keyY, 5]}
      intensity={s.Lighting.keyIntensity}
      color="#fffaf3"
      castShadow={s.Performance.shadows}
      shadow-mapSize={[shadowResolution, shadowResolution]}
      shadow-camera-left={-15} shadow-camera-right={15}
      shadow-camera-top={12} shadow-camera-bottom={-12}
      shadow-normalBias={0.035} shadow-bias={-0.0002}
      shadow-radius={s.Lighting.shadowSoftness}
      shadow-blurSamples={s.Performance.shadowBlurSamples}
    />
    <directionalLight position={[6, 4, -6]} intensity={s.Lighting.rimIntensity} color="#f6f7ed" />
    <directionalLight position={[1, 2, 8]} intensity={s.Lighting.fillIntensity} color="#dce4e8" />
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.52, 0]}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color={s.Materials.floorColor} roughness={s.Materials.floorRoughness} />
    </mesh>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.515, 0]} receiveShadow>
      <planeGeometry args={[80, 80]} />
      <shadowMaterial transparent opacity={s.Lighting.shadowOpacity} />
    </mesh>
    {Array.from({ length: SLOT_COUNT }, (_, i) => <group
      key={i}
      ref={node => { cards.current[i] = node }}
      position={[wrapOffset(i, 0.25, SLOT_COUNT) * s.Row.spacing, s.Row.height, -wrapOffset(i, 0.25, SLOT_COUNT) * s.Row.spacing * s.Row.depth]}
      onPointerOver={e => { e.stopPropagation(); if (selected === null && !scroll.current.active) onHover(i) }}
      onPointerMove={e => { e.stopPropagation(); if (selected === null && !scroll.current.active) onHover(i) }}
      onPointerOut={() => { if (selected === null) onHover(null) }}
      onPointerDown={e => pointerDown(e, i)}
      onClick={e => { e.stopPropagation(); if (selected === null) onSelect(i) }}
    >
      <group scale={[s['Card shape'].width, s['Card shape'].height, s['Card shape'].thickness]}>
        <CardModel project={projects[i % projects.length]} {...s.Materials} />
      </group>
      {selected === null && hovered === i && <mesh position={[0, -s.Hover.centerLift / (2 * s.Row.scale), 0.12]}>
        {/* Keep the original hit area connected to the raised card so it
            remains clickable even after rising beyond a stationary cursor. */}
        <boxGeometry args={[2.12 * s['Card shape'].width, 2.88 * s['Card shape'].height + s.Hover.centerLift / s.Row.scale, 0.12]} />
        <meshBasicMaterial visible={false} />
      </mesh>}
    </group>)}
    <EffectComposer
      key={`${blurResolution}-${s.Performance.antialiasing}`}
      multisampling={s.Performance.antialiasing === 'Off' ? 0 : s.Performance.antialiasing === '4×' ? 4 : 2}
      mergeMode="none"
    >
      {/* Toggle the persistent pass: opacity zero still runs every blur pass. */}
      <EffectGroup enabled={selected === null && s['Depth of field'].enabled}>
        <DepthOfField
          focusDistance={s['Depth of field'].focusDistance}
          focusRange={s['Depth of field'].focusRange}
          bokehScale={s['Depth of field'].bokeh}
          height={blurResolution}
        />
      </EffectGroup>
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      {/* Separate passes keep SMAA after DOF: merging effects lets the engine
          reorder SMAA before blur, leaving the final silhouette aliased. */}
      <SMAA preset={SMAAPreset.HIGH} opacity={s.Performance.edgeSmoothing ? 1 : 0} />
    </EffectComposer>
    {new URLSearchParams(window.location.search).has('profile') && <FrameProbe />}
    <FrameLoop
      fps={s.Performance.frameRate}
      settleMs={settleMs}
      isMoving={() => !paused && (
        (selected === null && hovered === null && !s.Row.paused && !reducedMotion && s.Row.speed > 0)
        || (selected !== null && !reducedMotion && s.Focus.idleRotation > 0)
        || scroll.current.active || Math.abs(scroll.current.velocity) > 0.01
        || drag.current.active || Math.abs(drag.current.vx) + Math.abs(drag.current.vy) > 0.001
      )}
    />
  </>
}

export const Gallery = memo(function Gallery(props: GalleryProps) {
  return <Canvas
    frameloop="never"
    shadows={props.settings.Performance.shadows ? 'variance' : false}
    dpr={[1, props.settings.Performance.maxPixelRatio]}
    camera={{ position: [0, props.settings.Camera.height, props.settings.Camera.distance], fov: props.settings.Camera.fov, near: 0.1, far: 1000 }}
    gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
    onPointerMissed={() => props.onHover(null)}
    fallback={<div className="webgl-fallback">Explore every project using the Archive menu.</div>}
  >
    <Scene {...props} />
  </Canvas>
})
