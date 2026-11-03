import { describe, expect, it } from 'vitest'
import { damp, hoverInfluence, wrapOffset } from './motion'

describe('damp', () => {
  it('reaches the same position after equal elapsed time at different frame rates', () => {
    function advance(fps: number) {
      let position = -3
      for (let frame = 0; frame < fps; frame++) position = damp(position, 5, 7, 1 / fps)
      return position
    }

    expect(advance(30)).toBeCloseTo(advance(60), 10)
    expect(advance(60)).toBeCloseTo(advance(120), 10)
  })

  it('approaches the target from either direction without overshooting', () => {
    let below = -10
    let above = 20
    for (let frame = 0; frame < 100; frame++) {
      const nextBelow = damp(below, 2, 12, 1 / 60)
      const nextAbove = damp(above, 2, 12, 1 / 60)
      expect(nextBelow).toBeGreaterThanOrEqual(below)
      expect(nextBelow).toBeLessThanOrEqual(2)
      expect(nextAbove).toBeLessThanOrEqual(above)
      expect(nextAbove).toBeGreaterThanOrEqual(2)
      below = nextBelow
      above = nextAbove
    }
    expect(below).toBeCloseTo(2, 6)
    expect(above).toBeCloseTo(2, 6)
  })

  it('limits the jump after a suspended frame', () => {
    expect(damp(0, 10, 7, 3)).toBe(damp(0, 10, 7, 0.05))
    expect(damp(0, 10, 7, 0)).toBe(0)
    expect(damp(3, 10, 0, 0.016)).toBe(3)
  })
})

describe('wrapOffset', () => {
  it('keeps every slot inside the same finite track for positive and negative phases', () => {
    for (const phase of [-10000.25, -18, -0.1, 0, 20.2, 10000.25]) {
      const positions = Array.from({ length: 18 }, (_, index) => wrapOffset(index, phase, 18))
      expect(positions.every(position => position >= -9 && position < 9)).toBe(true)
      expect(new Set(positions.map(position => position.toFixed(5))).size).toBe(18)
    }
  })

  it('preserves a slot position after a complete cycle in either direction', () => {
    for (const index of [0, 7, 17]) {
      expect(wrapOffset(index, 2.3, 18)).toBeCloseTo(wrapOffset(index, 20.3, 18), 10)
      expect(wrapOffset(index, 2.3, 18)).toBeCloseTo(wrapOffset(index, -15.7, 18), 10)
      expect(wrapOffset(index, 2.3, 18)).toBeCloseTo(wrapOffset(index + 18, 2.3, 18), 10)
    }
  })

  it('moves continuously in the visible center of the track', () => {
    const before = wrapOffset(4, 2.25, 18)
    const after = wrapOffset(4, 2.26, 18)
    expect(after - before).toBeCloseTo(-0.01, 10)
  })

  it('wraps only at the ends of the track', () => {
    const before = wrapOffset(9, -0.01, 18)
    const after = wrapOffset(9, 0.01, 18)
    expect(Math.abs(before)).toBeGreaterThan(8.9)
    expect(Math.abs(after)).toBeGreaterThan(8.9)
    expect(Math.sign(before)).toBe(-Math.sign(after))
  })
})

describe('hoverInfluence', () => {
  it('lifts the centered card without pushing it sideways', () => {
    expect(hoverInfluence(0, 1.5)).toEqual({ lift: 1, spread: 0 })
  })

  it('lifts both neighbors equally and spreads them in opposite directions', () => {
    for (const distance of [0.1, 0.5, 1, 2, 4]) {
      const left = hoverInfluence(-distance, 1.5)
      const right = hoverInfluence(distance, 1.5)
      expect(left.lift).toBe(right.lift)
      expect(left.spread).toBe(-right.spread)
      expect(left.spread).toBeLessThan(0)
      expect(right.spread).toBeGreaterThan(0)
    }
  })

  it('falls off toward untouched distant cards', () => {
    const near = hoverInfluence(1, 1.5)
    const middle = hoverInfluence(3, 1.5)
    const far = hoverInfluence(8, 1.5)
    expect(near.lift).toBeGreaterThan(middle.lift)
    expect(middle.lift).toBeGreaterThan(far.lift)
    expect(near.spread).toBeGreaterThan(middle.spread)
    expect(Math.abs(far.spread)).toBeLessThan(0.00001)
    expect(far.lift).toBeLessThan(0.00001)
  })

  it('changes smoothly as the pointer crosses the card center', () => {
    const left = hoverInfluence(-0.00001, 1.5)
    const right = hoverInfluence(0.00001, 1.5)
    expect(Math.abs(right.spread - left.spread)).toBeLessThan(0.0001)
    expect(left.lift).toBeCloseTo(1, 8)
  })

  it('lets a wider radius affect more neighbors', () => {
    expect(hoverInfluence(3, 3).lift).toBeGreaterThan(hoverInfluence(3, 1).lift)
  })
})
