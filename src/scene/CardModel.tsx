import { useEffect, useMemo } from 'react'
import { BoxGeometry, Color, DataTexture, ExtrudeGeometry, Float32BufferAttribute, MeshStandardMaterial, NearestFilter, PlaneGeometry, RGBAFormat, Shape, ShapeGeometry, type BufferGeometry } from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import type { Project } from '../data/projects'
import { createBackTexture, createProjectTexture, createShellTexture } from './textures'

interface CardModelProps {
  project: Project
  shellColor: string
  roughness: number
  metalness: number
  labelRoughness: number
  wear: number
}

function bodyShape() {
  const shape = new Shape()
  shape.moveTo(-1.015, -1.4)
  shape.lineTo(1.015, -1.4)
  shape.lineTo(1.015, 0.94)
  shape.lineTo(0.565, 1.4)
  shape.lineTo(-1.015, 1.4)
  shape.lineTo(-1.015, 0.7)
  shape.lineTo(-0.97, 0.7)
  shape.lineTo(-0.97, 0.31)
  shape.lineTo(-1.015, 0.31)
  shape.lineTo(-1.015, -0.3)
  shape.lineTo(-0.97, -0.3)
  shape.lineTo(-0.97, -0.5)
  shape.lineTo(-1.015, -0.5)
  shape.closePath()
  return shape
}

function labelShape() {
  const shape = new Shape()
  shape.moveTo(-0.83, -1.08)
  shape.lineTo(0.83, -1.08)
  shape.lineTo(0.83, 0.82)
  shape.lineTo(0.53, 1.13)
  shape.lineTo(-0.83, 1.13)
  shape.closePath()
  return shape
}

const shellShape = bodyShape()
const faceShape = labelShape()
const extrudeSettings = {
  steps: 1,
  depth: 0.085,
  bevelEnabled: true,
  bevelThickness: 0.035,
  bevelSize: 0.035,
  bevelSegments: 2,
  curveSegments: 1,
}
const triangleShape = new Shape()
triangleShape.moveTo(-0.085, -0.065)
triangleShape.lineTo(0.085, -0.065)
triangleShape.lineTo(0, 0.095)
triangleShape.closePath()

interface SharedResource<T> {
  value: T
  users: number
  dispose: (value: T) => void
  cleanup?: ReturnType<typeof setTimeout>
}

/** R3F must not dispose a resource while another card still uses it. */
function useSharedResource<T>(cache: Map<string, SharedResource<T>>, key: string, create: () => T, dispose: (value: T) => void) {
  const entry = useMemo(() => {
    let resource = cache.get(key)
    if (!resource) {
      resource = { value: create(), users: 0, dispose }
      cache.set(key, resource)
    }
    return resource
  }, [cache, key, create, dispose])

  useEffect(() => {
    entry.users++
    clearTimeout(entry.cleanup)
    return () => {
      entry.users--
      // The deferred release survives StrictMode's setup/cleanup/setup check.
      entry.cleanup = setTimeout(() => {
        if (entry.users > 0) return
        entry.dispose(entry.value)
        cache.delete(key)
      }, 0)
    }
  }, [cache, entry, key])
  return entry.value
}

// These eight fixed pieces differ only in color, roughness and metalness.
// Vertex colors and an eight-pixel material palette retain those differences
// while submitting the entire set in one draw call.
const detailColors = ['#080c0b', '#0e1210', '#51564d', '#d8dace', '#0a0e0c', '#3e453d', '#c0c3b6', '#121713']

function mergeAndDispose(parts: BufferGeometry[]) {
  const merged = mergeGeometries(parts)!
  parts.forEach(part => part.dispose())
  return merged
}

function createGeometryResources() {
  const parts: BufferGeometry[] = [
    new ShapeGeometry(shellShape).scale(1.004, 1.004, 1).translate(0, 0, -0.006),
    new ShapeGeometry(faceShape).scale(1.075, 1.075, 1).translate(0, 0, 0.082),
    new ShapeGeometry(faceShape).scale(1.025, 1.025, 1).translate(0, 0, 0.087),
    new ShapeGeometry(triangleShape).translate(0.697, 1.034, 0.105),
    new BoxGeometry(1.43, 0.055, 0.018).translate(0, -1.283, 0.083),
    new BoxGeometry(1.18, 0.025, 0.018).translate(0, -1.25, 0.093),
    new BoxGeometry(0.085, 0.062, 0.018).translate(0.85, -1.25, 0.086),
    new BoxGeometry(1.71, 0.61, 0.019).translate(0, 1.025, 0.079).rotateY(Math.PI),
  ]
  parts.forEach((geometry, index) => {
    const colors = new Float32Array(geometry.getAttribute('position').count * 3)
    const color = new Color(detailColors[index])
    const uv = geometry.getAttribute('uv')
    for (let vertex = 0; vertex < uv.count; vertex++) {
      color.toArray(colors, vertex * 3)
      uv.setXY(vertex, (index + 0.5) / detailColors.length, 0.5)
    }
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))
  })

  const label = new ShapeGeometry(faceShape)
  const uv = label.getAttribute('uv')
  for (let vertex = 0; vertex < uv.count; vertex++) {
    uv.setXY(vertex, (uv.getX(vertex) + 0.83) / 1.66, (uv.getY(vertex) + 1.08) / 2.21)
  }
  label.translate(0, 0, 0.091)

  const contacts = Array.from({ length: 9 }, (_, index) => new BoxGeometry(0.12, index === 8 ? 0.35 : 0.47, 0.013)
    .translate(-0.724 + index * 0.181, 1.065 - (index === 8 ? 0.06 : 0), 0.094).rotateY(Math.PI))
  return {
    body: new ExtrudeGeometry(shellShape, extrudeSettings).translate(0, 0, -0.0425),
    details: mergeAndDispose(parts),
    label,
    tab: new BoxGeometry(0.085, 0.295, 0.103).translate(-1.035, 0.515, 0.001),
    back: new PlaneGeometry(1.74, 1.75).translate(0, -0.28, 0.083).rotateY(Math.PI),
    contacts: mergeAndDispose(contacts),
    surface: createShellTexture(),
  }
}

function createProjectTextures(project: Project) {
  return { label: createProjectTexture(project), back: createBackTexture(project) }
}

function createCommonMaterials(surface: ReturnType<typeof createShellTexture>, shellColor: string, roughness: number, metalness: number, wear: number) {
  // Standard material maps read roughness from green and metalness from blue.
  const surfaces = [[0.76, 0], [roughness + 0.08, metalness], [roughness, metalness], [0.7, 0], [0.64, 0], [0.62, 0.2], [0.4, 0.4], [0.76, 0]]
  const data = new Uint8Array(surfaces.length * 4)
  surfaces.forEach(([r, m], index) => {
    data.set([255, Math.round(Math.min(1, r) * 255), Math.round(m * 255), 255], index * 4)
  })
  const palette = new DataTexture(data, surfaces.length, 1, RGBAFormat)
  palette.minFilter = palette.magFilter = NearestFilter
  palette.generateMipmaps = false
  palette.needsUpdate = true
  return {
    shell: new MeshStandardMaterial({ color: shellColor, roughness, metalness, bumpMap: surface, bumpScale: 0.012 * wear }),
    details: new MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 1, roughnessMap: palette, metalnessMap: palette }),
    contacts: new MeshStandardMaterial({ color: '#b89a55', metalness: 0.8, roughness: 0.34, bumpMap: surface, bumpScale: 0.002 * wear }),
    palette,
  }
}

function createProjectMaterials(project: Project, textures: ReturnType<typeof createProjectTextures>, surface: ReturnType<typeof createShellTexture>, labelRoughness: number, wear: number) {
  return {
    label: new MeshStandardMaterial({ map: textures.label, roughness: labelRoughness, metalness: 0.02, bumpMap: surface, bumpScale: 0.005 * wear }),
    back: new MeshStandardMaterial({ map: textures.back, roughness: 0.85, bumpMap: surface, bumpScale: 0.004 * wear }),
    tab: new MeshStandardMaterial({ color: project.color, roughness: 0.46, metalness: 0.1 }),
  }
}

const geometryCache = new Map<string, SharedResource<ReturnType<typeof createGeometryResources>>>()
const textureCache = new Map<string, SharedResource<ReturnType<typeof createProjectTextures>>>()
const commonMaterialCache = new Map<string, SharedResource<ReturnType<typeof createCommonMaterials>>>()
const projectMaterialCache = new Map<string, SharedResource<ReturnType<typeof createProjectMaterials>>>()
const disposeResources = (resources: Record<string, { dispose: () => void }>) => Object.values(resources).forEach(resource => resource.dispose())

/** All detail is local to the card. The parent owns its motion and hit target. */
export function CardModel({ project, shellColor, roughness, metalness, labelRoughness, wear }: CardModelProps) {
  const geometry = useSharedResource(geometryCache, 'sd-card', createGeometryResources, disposeResources)
  const projectKey = [project.id, project.art, project.color, project.discipline, project.year].join('|')
  const textures = useSharedResource(textureCache, projectKey, () => createProjectTextures(project), disposeResources)
  const common = useSharedResource(commonMaterialCache, JSON.stringify([shellColor, roughness, metalness, wear]),
    () => createCommonMaterials(geometry.surface, shellColor, roughness, metalness, wear), disposeResources)
  const materials = useSharedResource(projectMaterialCache, JSON.stringify([projectKey, labelRoughness, wear]),
    () => createProjectMaterials(project, textures, geometry.surface, labelRoughness, wear), disposeResources)

  return (
    <group dispose={null}>
      <mesh castShadow receiveShadow geometry={geometry.body} material={common.shell} />
      <mesh geometry={geometry.details} material={common.details} />
      <mesh geometry={geometry.label} material={materials.label} />
      <mesh castShadow geometry={geometry.tab} material={materials.tab} />
      <mesh geometry={geometry.back} material={materials.back} />
      <mesh geometry={geometry.contacts} material={common.contacts} />
    </group>
  )
}
