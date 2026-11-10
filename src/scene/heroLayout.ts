type Point = [number, number, number]

interface HeroLayoutOptions {
  cardCount: number
  /** Distance between centers, as a fraction of card width. */
  cardSpacing: number
  /** Degrees from facing down the row (-X) toward the camera (+Z). */
  cardYaw: number
  cardWidth: number
  cardHeight: number
  cardThickness: number
  camElevation: number
  camAzimuth: number
  fov: number
  /** Fractions of the viewport to leave empty on each side. */
  horizontalMargin: number
  verticalMargin: number
  aspect: number
  /** Balance the viewport margins with a lens shift, preserving camera aim. */
  centerProjection?: boolean
}

const radians = (degrees: number) => degrees * Math.PI / 180
const dot = (a: Point, b: Point) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]

/** Fits the rotated card bounds in a zero-roll perspective camera. */
export function fitHeroLayout(options: HeroLayoutOptions) {
  const { cardWidth, cardHeight, cardThickness, cardSpacing, cardYaw, camElevation, camAzimuth, fov,
    horizontalMargin, verticalMargin, aspect } = options
  const count = Math.max(1, Math.round(options.cardCount))
  const spacing = cardWidth * cardSpacing
  const end = (count - 1) * spacing / 2
  const cardCenters = Array.from({ length: count }, (_, index) => index * spacing - end)
  const cardY = cardHeight / 2
  const yaw = radians(cardYaw - 90)
  const elevation = radians(camElevation)
  const azimuth = radians(camAzimuth)
  const cosElevation = Math.cos(elevation)
  const sinElevation = Math.sin(elevation)
  const cosAzimuth = Math.cos(azimuth)
  const sinAzimuth = Math.sin(azimuth)
  // Orthonormal camera axes with world +Y as up, aimed at the row center.
  const back: Point = [-cosElevation * cosAzimuth, sinElevation, cosElevation * sinAzimuth]
  const right: Point = [sinAzimuth, 0, cosAzimuth]
  const up: Point = [sinElevation * cosAzimuth, cosElevation, -sinElevation * sinAzimuth]
  const tanHalfFov = Math.tan(radians(fov) / 2)
  const tanHalfHorizontalFov = tanHalfFov * Math.max(0.01, aspect)
  const xLimit = (1 - 2 * horizontalMargin) * tanHalfHorizontalFov
  const yLimit = (1 - 2 * verticalMargin) * tanHalfFov
  const cosYaw = Math.cos(yaw)
  const sinYaw = Math.sin(yaw)
  let horizontalDistance = 0
  let verticalDistance = 0
  let nearestCorner = 0
  const cameraCorners: { x: number; y: number; along: number }[] = []

  // The end cards bound the full row. For a corner with camera-relative
  // depth D - along, solve abs(projected coordinate) <= the padded frustum.
  for (const centerX of [-end, end]) {
    for (const x of [-cardWidth / 2, cardWidth / 2]) {
      for (const y of [-cardY, cardY]) {
        for (const z of [-cardThickness / 2, cardThickness / 2]) {
          const point: Point = [centerX + x * cosYaw + z * sinYaw, y, -x * sinYaw + z * cosYaw]
          const along = dot(point, back)
          const across = dot(point, right)
          const above = dot(point, up)
          horizontalDistance = Math.max(horizontalDistance, along + Math.abs(across) / xLimit)
          verticalDistance = Math.max(verticalDistance, along + Math.abs(above) / yLimit)
          nearestCorner = Math.max(nearestCorner, along)
          cameraCorners.push({ x: across, y: above, along })
        }
      }
    }
  }

  let distance = Math.max(horizontalDistance, verticalDistance)
  let viewOffsetX = 0
  let viewOffsetY = 0
  if (options.centerProjection) {
    const bounds = (depth: number) => {
      let minX = Infinity
      let maxX = -Infinity
      let minY = Infinity
      let maxY = -Infinity
      for (const { x, y, along } of cameraCorners) {
        const cornerDepth = depth - along
        minX = Math.min(minX, x / cornerDepth)
        maxX = Math.max(maxX, x / cornerDepth)
        minY = Math.min(minY, y / cornerDepth)
        maxY = Math.max(maxY, y / cornerDepth)
      }
      return { minX, maxX, minY, maxY }
    }
    // Shifted framing depends on the projected width and height, not on the
    // distance of a particular corner to the optical axis. Both shrink with depth.
    let lower = nearestCorner
    let upper = distance
    for (let iteration = 0; iteration < 32; iteration++) {
      const middle = (lower + upper) / 2
      const { minX, maxX, minY, maxY } = bounds(middle)
      if (maxX - minX > 2 * xLimit || maxY - minY > 2 * yLimit) lower = middle
      else upper = middle
    }
    distance = upper
    const { minX, maxX, minY, maxY } = bounds(distance)
    // Convert the midpoint to viewport fractions for setViewOffset, whose
    // vertical axis starts at the top instead of the bottom.
    viewOffsetX = (minX + maxX) / (4 * tanHalfHorizontalFov)
    viewOffsetY = -(minY + maxY) / (4 * tanHalfFov)
  }

  const cameraTarget: Point = [0, cardY, 0]
  const cameraPosition: Point = [back[0] * distance, cardY + back[1] * distance, back[2] * distance]
  return { cardCenters, cardY, yaw, cameraPosition, cameraTarget, distance, viewOffsetX, viewOffsetY }
}
