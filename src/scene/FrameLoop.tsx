import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

interface FrameLoopProps {
  fps: number
  settleMs: number
  isMoving: () => boolean
}

/** One render owner: cap active frames and sleep once interaction damping settles. */
export function FrameLoop({ fps, settleMs, isMoving }: FrameLoopProps) {
  const { advance, get, gl, size } = useThree()

  useEffect(() => {
    const canvas = gl.domElement
    const interval = 1000 / fps
    const profiling = new URLSearchParams(window.location.search).has('profile')
    let frame: number | null = null
    let lastSlot = 0
    let lastRender = 0
    let simulationTime = get().clock.elapsedTime
    let awakeUntil = 0
    let disposed = false

    function tick(now: number) {
      frame = null
      if (disposed || document.hidden) return
      const elapsed = now - lastSlot
      if (lastSlot === 0 || elapsed >= interval - 0.25) {
        const delta = lastRender === 0 ? 1 / fps : Math.min((now - lastRender) / 1000, 0.05)
        simulationTime += delta
        // Fiber's never-loop takes seconds and advances this Canvas only.
        advance(simulationTime, false)
        lastRender = now
        lastSlot = lastSlot === 0 ? now : lastSlot + interval * Math.max(1, Math.floor(elapsed / interval))
      }
      if (disposed) return
      const moving = isMoving()
      if (moving || now < awakeUntil) {
        if (profiling) canvas.dataset.renderLoop = moving ? 'animating' : 'settling'
        frame = requestAnimationFrame(tick)
      } else if (profiling) canvas.dataset.renderLoop = 'sleeping'
    }

    function wake() {
      awakeUntil = performance.now() + settleMs
      if (profiling) canvas.dataset.renderLoop = 'settling'
      if (disposed || document.hidden || frame !== null) return
      lastSlot = 0
      lastRender = 0
      frame = requestAnimationFrame(tick)
    }

    function visibility() {
      if (document.hidden) {
        if (frame !== null) cancelAnimationFrame(frame)
        frame = null
      } else wake()
    }

    const canvasEvents = ['pointermove', 'pointerdown', 'pointerleave', 'wheel', 'webglcontextrestored'] as const
    canvasEvents.forEach(name => canvas.addEventListener(name, wake, { passive: true }))
    window.addEventListener('pointerup', wake)
    window.addEventListener('pointercancel', wake)
    document.addEventListener('visibilitychange', visibility)
    wake()

    return () => {
      disposed = true
      if (frame !== null) cancelAnimationFrame(frame)
      canvasEvents.forEach(name => canvas.removeEventListener(name, wake))
      window.removeEventListener('pointerup', wake)
      window.removeEventListener('pointercancel', wake)
      document.removeEventListener('visibilitychange', visibility)
    }
  }, [advance, get, gl, fps, settleMs, isMoving, size.width, size.height])

  return null
}
