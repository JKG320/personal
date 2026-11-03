/** Normalize a mouse wheel or trackpad gesture into a bounded pixel impulse. */
export function wheelDelta(deltaX: number, deltaY: number, deltaMode: number, pageHeight: number): number {
  const dominant = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY
  const unit = deltaMode === 1 ? 16 : deltaMode === 2 ? pageHeight : 1
  return Math.max(-240, Math.min(240, dominant * unit))
}

/** Integrate exponentially decaying scroll velocity without frame-rate drift. */
export function integrateScroll(velocity: number, friction: number, delta: number): { distance: number; velocity: number } {
  const dt = Math.max(0, Math.min(delta, 0.05))
  if (dt === 0) return { distance: 0, velocity }
  const exponent = -friction * dt
  return {
    distance: velocity * -Math.expm1(exponent) / friction,
    velocity: velocity * Math.exp(exponent),
  }
}
