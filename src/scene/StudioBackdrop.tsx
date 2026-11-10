import { useMemo } from 'react'
import { Color, Vector2 } from 'three'
import type { HeroConfig } from '../config'

const vertexShader = /* glsl */ `
  varying vec2 screenUv;
  void main() {
    screenUv = uv;
    gl_Position = vec4(position.xy, 1.0, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform vec3 centerColor;
  uniform vec3 edgeColor;
  uniform vec3 cornerColor;
  uniform vec2 origin;
  uniform vec2 radius;
  varying vec2 screenUv;
  void main() {
    float distanceFromCenter = length((screenUv - origin) / radius);
    vec3 backdrop = mix(centerColor, edgeColor, smoothstep(0.1, 0.82, distanceFromCenter));
    float topCorners = smoothstep(0.49, 1.0, screenUv.y) * smoothstep(0.35, 1.0, distanceFromCenter);
    gl_FragColor = vec4(mix(backdrop, cornerColor, topCorners), 1.0);
    #include <colorspace_fragment>
  }
`

export function StudioBackdrop({ config }: { config: HeroConfig }) {
  const uniforms = useMemo(() => ({
    centerColor: { value: new Color(config.gradientCenter) },
    edgeColor: { value: new Color(config.gradientEdge) },
    cornerColor: { value: new Color(config.gradientCorner) },
    origin: { value: new Vector2(...config.gradientOrigin) },
    radius: { value: new Vector2(...config.gradientRadius) },
  }), [config])
  return <mesh frustumCulled={false} renderOrder={-1000} raycast={() => null}>
    <planeGeometry args={[2, 2]} />
    <shaderMaterial {...{ vertexShader, fragmentShader, uniforms }} depthTest={false} depthWrite={false} toneMapped={false} />
  </mesh>
}
