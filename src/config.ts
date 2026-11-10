// Hero defaults. Edit these here, or try values live at /?debug and log the JSON.
export const CONFIG = {
  cardCount: 12,
  cardSpacing: 0.6, // fraction of the card width
  cardYaw: 20, // degrees from facing down the row toward -X
  cardWidth: 24,
  cardHeight: 32,
  cardThickness: 2,
  cardUnitScale: 0.075,
  artworkCoverage: 0.7,
  horizontalMargin: 0.1,
  verticalMargin: 0.16,
  centerProjection: true,
  camElevation: 30,
  camAzimuth: 50, // degrees from the -X end of the row
  fov: 28,
  gradientCenter: '#F2F2F0',
  gradientEdge: '#CFCFCC',
  gradientCorner: '#A8A8A5',
  gradientOrigin: [0.45, 0.28] as [number, number], // UV, from the lower left
  gradientRadius: [0.76, 0.86] as [number, number],
  headerColor: '#1A1A1A',
  shellColor: '#202020',
  roughness: 0.88,
  metalness: 0,
  labelRoughness: 0.92,
  wear: 0.6,
  keyIntensity: 3.2,
  keyHeight: 12,
  keyBehind: 7,
  keyLeft: 7,
  fillIntensity: 1.25,
  fillSky: '#FFFFFF',
  fillGround: '#A8A8A5',
  shadowOpacity: 0.21,
  shadowResolution: 256,
  shadowRadius: 4,
  contactOpacity: 0.24,
  contactWidth: 1.24,
  contactDepth: 0.25,
  floorOffset: 0.004,
  grainOpacity: 0.028,
  focusDistance: 12.5,
  focusOffset: 0.9,
  focusResponse: 10,
  dragSensitivity: 0.008,
  frameRate: 60,
  maxPixelRatio: 2,
}

export type HeroConfig = typeof CONFIG
export const cardCode = (index: number) => `A${String(index + 1).padStart(3, '0')}`
