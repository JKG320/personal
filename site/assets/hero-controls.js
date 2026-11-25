import { controls } from './twombly-controls.js';

// All values are shared by Twombly, and flow into the Hero's existing scene config.
export const heroControls = controls('Hero · Camera & light', {
  Camera: {
    camElevation: [35, 3, 55, 0.5],
    camAzimuth: [50, 15, 85, 0.5],
    fov: [22, 18, 60, 1],
    cameraZoom: [1.57, 0.65, 1.8, 0.01],
    horizontalMargin: [0.11, 0, 0.3, 0.01],
    verticalMargin: [0.16, 0.05, 0.3, 0.01],
  },
  Lighting: {
    lightAzimuth: [-176, -180, 180, 1],
    lightElevation: [21, 4, 65, 0.5],
    keyIntensity: [3.7, 0, 8, 0.1],
    fillIntensity: [0.35, 0, 2, 0.05],
    frontFillIntensity: [1.15, 0, 3, 0.05],
    fillSky: '#ffffff',
    fillGround: '#a8a8a5',
  },
  Shadows: {
    shadowOpacity: [0.28, 0, 0.85, 0.01],
    shadowFilter: {type: 'select', options: ['Soft', 'Crisp'], default: 'Soft'},
    shadowRadius: [0, 0, 32, 0.25],
    shadowBlur: [0, 0, 64, 0.5],
    blurSamples: {type: 'select', options: ['8', '16', '32'], default: '32'},
    shadowMapSize: {type: 'select', options: ['2048', '4096', '8192'], default: '4096'},
    contactSoftness: [2, 0.5, 6, 0.1],
    contactWidth: [1.24, 0.5, 3, 0.05],
    contactDepth: [0.25, 0.1, 2, 0.05],
    contactOpacity: [0.22, 0, 0.5, 0.01],
    floorOffset: [0.054, 0.004, 1, 0.01],
  },
  Quality: {
    renderPixelRatio: [2.5, 1, 3, 0.25],
  },
  Cards: {
    _collapsed: true,
    cardCount: [15, 3, 30, 1],
    cardSpacing: [0.7, 0.35, 1.4, 0.01],
    cardYaw: [1, -30, 70, 1],
    artworkCoverage: [0.69, 0.3, 0.95, 0.01],
  },
  Surface: {
    _collapsed: true,
    shellColor: '#202020',
    roughness: [0.88, 0.1, 1, 0.01],
    metalness: [0, 0, 1, 0.01],
    wear: [0.6, 0, 1, 0.05],
    grainOpacity: [0.028, 0, 0.1, 0.002],
  },
});


export const gradientControls = controls('Background Gradient', {
  'Move highlight': { type: 'pad', x: [0.05, 0, 1, 0.01], y: [0.54, 0, 1, 0.01] },
  'Width': [1.17, 0.25, 1.6, 0.01],
  'Height': [0.52, 0.25, 1.6, 0.01],
});

export const liftControls = controls('Hover Lift', {
  'Lift height (% of card)': [45, 0, 90, 1],
  'Speed': [3.8, 0.6, 6, 0.05],
  'Bounce (%)': [0, 0, 35, 1],
  'Scroll body lag (degrees)': [4, 0, 10, 0.25],
  'Scroll lag response': [2.8, 1, 6, 0.1],
});

export const shadowControls = controls('Advanced Shadows', {
  'Shadow tint': '#000000',
  'Extra blur': [0, 0, 36, 0.25],
  'Blur stretch': [0.25, 0.25, 4, 0.05],
  'Distance softening': [0, 0, 36, 0.25],
  'Distance fade': [1, 0, 1, 0.01],
  'Fade distance': [8.75, 0.25, 25, 0.25],
});
