export function damp(current: number, target: number, response: number, delta: number) {
  return current + (target - current) * (1 - Math.exp(-response * Math.min(delta, 0.05)))
}

/** Circular, continuous slot position. Wrapping occurs outside the visible area. */
export function wrapOffset(index: number, phase: number, count: number) {
  return ((index - phase + count * 1.5) % count + count) % count - count / 2
}

/** A smooth push away from the pointer, with a Gaussian influence on neighbors. */
export function hoverInfluence(distance: number, radius: number) {
  const influence = Math.exp(-(distance * distance) / (2 * radius * radius))
  return { lift: influence, spread: Math.tanh(distance * 1.8) * influence }
}

/** A critically damped spring: tops lead travel, then settle without wobbling. */
export function scrollLean(angle: number, velocity: number, scrollVelocity: number, delta: number) {
  const dt = Math.max(0, Math.min(delta, 0.05))
  const target = Math.max(-0.1, Math.min(0.1, scrollVelocity * 0.012))
  const frequency = 14
  const offset = angle - target
  const spring = velocity + frequency * offset
  const decay = Math.exp(-frequency * dt)
  return {
    angle: target + (offset + spring * dt) * decay,
    velocity: (velocity - frequency * spring * dt) * decay,
  }
}
