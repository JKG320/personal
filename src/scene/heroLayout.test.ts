import { PerspectiveCamera, Vector3 } from 'three'
import { describe, expect, it } from 'vitest'
import { fitHeroLayout } from './heroLayout'

const defaults = {
  cardCount: 12,
  cardSpacing: 0.6,
  cardYaw: 20,
  cardWidth: 2.4,
  cardHeight: 3.2,
  cardThickness: 0.2,
  camElevation: 30,
  camAzimuth: 50,
  fov: 28,
  horizontalMargin: 0.10,
  verticalMargin: 0.10,
  aspect: 16 / 9,
}

function projectedBounds(options: Parameters<typeof fitHeroLayout>[0]) {
  const layout = fitHeroLayout(options)
  const camera = new PerspectiveCamera(options.fov, options.aspect, 0.1, 1000)
  camera.position.set(...layout.cameraPosition)
  camera.lookAt(...layout.cameraTarget)
  camera.setViewOffset(options.aspect, 1, options.aspect * layout.viewOffsetX, layout.viewOffsetY, options.aspect, 1)
  camera.updateMatrixWorld()
  const corners = []
  for (const centerX of layout.cardCenters) {
    for (const x of [-options.cardWidth / 2, options.cardWidth / 2]) {
      for (const y of [-options.cardHeight / 2, options.cardHeight / 2]) {
        for (const z of [-options.cardThickness / 2, options.cardThickness / 2]) {
          corners.push(new Vector3(x, y, z)
            .applyAxisAngle(new Vector3(0, 1, 0), layout.yaw)
            .add(new Vector3(centerX, layout.cardY, 0))
            .project(camera))
        }
      }
    }
  }
  return corners
}

describe('hero framing', () => {
  it('centers twelve evenly spaced upright cards, with a common yaw', () => {
    const layout = fitHeroLayout(defaults)
    expect(layout.cardCenters).toHaveLength(12)
    expect(layout.cardCenters[0] + layout.cardCenters.at(-1)!).toBeCloseTo(0)
    layout.cardCenters.slice(1).forEach((x, index) => {
      expect(x - layout.cardCenters[index]).toBeCloseTo(0.6 * defaults.cardWidth)
    })
    expect(layout.cardY - defaults.cardHeight / 2).toBe(0)
    expect(layout.yaw).toBeCloseTo(-70 * Math.PI / 180)
  })

  it('aims at the row center from the specified elevation and azimuth', () => {
    const { cameraPosition, cameraTarget } = fitHeroLayout(defaults)
    const view = new Vector3(...cameraPosition).sub(new Vector3(...cameraTarget))
    expect(cameraTarget).toEqual([0, defaults.cardHeight / 2, 0])
    expect(Math.atan2(view.y, Math.hypot(view.x, view.z)) * 180 / Math.PI).toBeCloseTo(30)
    expect(Math.atan2(view.z, -view.x) * 180 / Math.PI).toBeCloseTo(50)
  })

  it.each([9 / 19.5, 4 / 3, 16 / 9, 21 / 9])('keeps both end cards inside the margins at aspect %f', aspect => {
    const corners = projectedBounds({ ...defaults, aspect })
    const maxX = Math.max(...corners.map(corner => Math.abs(corner.x)))
    const maxY = Math.max(...corners.map(corner => Math.abs(corner.y)))
    expect(maxX).toBeLessThanOrEqual(0.800000001)
    expect(maxY).toBeLessThanOrEqual(0.800000001)
    expect(Math.max(maxX, maxY)).toBeCloseTo(0.8)
  })

  it('refits after tuning count, spacing, yaw, elevation, azimuth and FOV', () => {
    const corners = projectedBounds({ ...defaults, cardCount: 18, cardSpacing: 0.85, cardYaw: 37,
      camElevation: 39, camAzimuth: 64, fov: 32 })
    expect(corners).toHaveLength(18 * 8)
    expect(corners.every(corner => Math.abs(corner.x) <= 0.800000001 && Math.abs(corner.y) <= 0.800000001)).toBe(true)
  })

  it('balances both 10% side margins without changing camera aim', () => {
    const options = { ...defaults, aspect: 1.41, verticalMargin: 0.16, centerProjection: true }
    const corners = projectedBounds(options)
    expect(Math.min(...corners.map(corner => corner.x))).toBeCloseTo(-0.8, 8)
    expect(Math.max(...corners.map(corner => corner.x))).toBeCloseTo(0.8, 8)
    expect(Math.max(...corners.map(corner => Math.abs(corner.y)))).toBeLessThan(0.68)
    const layout = fitHeroLayout(options)
    expect(layout.cameraTarget).toEqual(fitHeroLayout(defaults).cameraTarget)
    expect(layout.viewOffsetX).toBeLessThan(0)
    expect(layout.viewOffsetY).toBeGreaterThan(0)
  })

  it('keeps the full row within vertical safe margins on wide screens', () => {
    const corners = projectedBounds({ ...defaults, aspect: 21 / 9, verticalMargin: 0.16, centerProjection: true })
    const left = Math.min(...corners.map(corner => corner.x))
    const right = Math.max(...corners.map(corner => corner.x))
    expect(left + right).toBeCloseTo(0, 8)
    expect(right).toBeLessThan(0.8)
    expect(Math.max(...corners.map(corner => Math.abs(corner.y)))).toBeCloseTo(0.68, 8)
  })
})
