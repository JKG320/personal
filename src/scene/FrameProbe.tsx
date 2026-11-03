import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

/** Opt-in local measurements at ?profile; nothing is sent off the device. */
export function FrameProbe() {
  const { gl } = useThree()
  const sample = useRef({ start: 0, since: performance.now(), frames: 0, cpu: 0, calls: 0 })

  useFrame(() => {
    gl.info.autoReset = false
    gl.info.reset()
    sample.current.start = performance.now()
  }, -100)

  useFrame(() => {
    const now = performance.now()
    const stats = sample.current
    stats.frames++
    stats.cpu += now - stats.start
    stats.calls += gl.info.render.calls
    if (now - stats.since < 1000) return
    gl.domElement.dataset.renderStats = JSON.stringify({
      fps: Math.round(stats.frames * 1000 / (now - stats.since)),
      sampledAt: Math.round(now),
      cpuMs: Math.round(stats.cpu / stats.frames * 100) / 100,
      drawCalls: gl.info.render.calls,
      averageDrawCalls: Math.round(stats.calls / stats.frames),
      triangles: gl.info.render.triangles,
      geometries: gl.info.memory.geometries,
      textures: gl.info.memory.textures,
      pixelRatio: gl.getPixelRatio(),
    })
    stats.since = now
    stats.frames = 0
    stats.cpu = 0
    stats.calls = 0
  }, 2)

  return null
}
