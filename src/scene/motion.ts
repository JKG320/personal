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
