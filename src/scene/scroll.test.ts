import { describe, expect, it } from 'vitest'
import { integrateScroll, wheelDelta } from './scroll'

describe('wheelDelta', () => {
  it.each([35, -35])('preserves the sign of a vertical pixel gesture (%s)', amount => {
    expect(wheelDelta(0, amount, 0, 800)).toBe(amount)
  })

  it.each([42, -42])('accepts a horizontal trackpad gesture (%s)', amount => {
    expect(wheelDelta(amount, 0, 0, 800)).toBe(amount)
  })

  it('uses the dominant axis instead of adding diagonal movement', () => {
    expect(wheelDelta(-70, 25, 0, 800)).toBe(-70)
    expect(wheelDelta(20, -80, 0, 800)).toBe(-80)
    expect(wheelDelta(45, 45, 0, 800)).toBe(45)
  })

  it('prefers the vertical axis when opposite axes have equal magnitude', () => {
    expect(wheelDelta(-30, 30, 0, 800)).toBe(30)
    expect(wheelDelta(30, -30, 0, 800)).toBe(-30)
  })

  it('normalizes line-based mouse wheels to pixels', () => {
    expect(wheelDelta(0, 3, 1, 800)).toBe(48)
    expect(wheelDelta(-4, 1, 1, 800)).toBe(-64)
  })

  it('normalizes page gestures using the current viewport height', () => {
    expect(wheelDelta(0, 0.2, 2, 900)).toBe(180)
    expect(wheelDelta(-0.2, 0, 2, 600)).toBe(-120)
  })

  it('limits large impulses after unit conversion in both directions', () => {
    expect(wheelDelta(0, 4000, 0, 800)).toBe(240)
    expect(wheelDelta(-4000, 0, 0, 800)).toBe(-240)
    expect(wheelDelta(0, -100, 1, 800)).toBe(-240)
    expect(wheelDelta(1, 0, 2, 1000)).toBe(240)
  })

  it('leaves an idle event at rest', () => {
    expect(wheelDelta(0, 0, 0, 800)).toBe(0)
  })
})

describe('integrateScroll', () => {
  function advance(fps: number, initialVelocity = 6) {
    let velocity = initialVelocity
    let distance = 0
    for (let frame = 0; frame < fps * 2; frame++) {
      const result = integrateScroll(velocity, 3, 1 / fps)
      distance += result.distance
      velocity = result.velocity
    }
    return { distance, velocity }
  }

  it('travels the same distance with the same residual velocity at 30, 60, and 120 fps', () => {
    const reference = advance(30)
    for (const fps of [60, 120]) {
      const result = advance(fps)
      expect(result.distance).toBeCloseTo(reference.distance, 12)
      expect(result.velocity).toBeCloseTo(reference.velocity, 12)
    }
    expect(reference.distance).toBeGreaterThan(1.9)
    expect(reference.distance).toBeLessThan(2)
    expect(reference.velocity).toBeGreaterThan(0)
    expect(reference.velocity).toBeLessThan(0.02)
  })

  it('preserves direction while slowing down without crossing zero', () => {
    for (const velocity of [-8, 8]) {
      const result = integrateScroll(velocity, 4, 1 / 60)
      expect(Math.sign(result.velocity)).toBe(Math.sign(velocity))
      expect(Math.sign(result.distance)).toBe(Math.sign(velocity))
      expect(Math.abs(result.velocity)).toBeLessThan(Math.abs(velocity))
    }
  })

  it('responds symmetrically when the caller reverses the scroll velocity', () => {
    const forward = advance(60, 5)
    const reverse = advance(60, -5)
    expect(reverse.distance).toBe(-forward.distance)
    expect(reverse.velocity).toBe(-forward.velocity)
  })

  it('keeps an idle row at rest', () => {
    expect(integrateScroll(0, 6, 1 / 60)).toEqual({ distance: 0, velocity: 0 })
  })

  it('does not advance for a zero or negative frame duration', () => {
    expect(integrateScroll(-5, 3, 0)).toEqual({ distance: 0, velocity: -5 })
    expect(integrateScroll(5, 3, -1)).toEqual({ distance: 0, velocity: 5 })
  })

  it('limits travel and decay after a suspended frame', () => {
    expect(integrateScroll(8, 4, 10)).toEqual(integrateScroll(8, 4, 0.05))
  })

  it('lets greater friction stop the row sooner', () => {
    const gentle = integrateScroll(5, 1, 0.05)
    const strong = integrateScroll(5, 12, 0.05)
    expect(strong.distance).toBeLessThan(gentle.distance)
    expect(strong.velocity).toBeLessThan(gentle.velocity)
  })

  it('retains tiny displacements instead of losing them to subtraction rounding', () => {
    const result = integrateScroll(10, 4, 1e-18)
    expect(result.distance / 1e-17).toBeCloseTo(1, 12)
  })
})
