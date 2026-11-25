// Fit the light projection around the casters. A receiver's shadow has the same
// light-space x/y as its caster, so even long shadows need no giant square map.
export function fitHeroShadow(centers, size, yaw, azimuth, elevation, pad = 0.35) {
  const az = azimuth * Math.PI / 180;
  const el = elevation * Math.PI / 180;
  const right = [Math.cos(az), 0, -Math.sin(az)];
  const up = [-Math.sin(el) * Math.sin(az), Math.cos(el), -Math.sin(el) * Math.cos(az)];
  let left = Infinity, bottom = Infinity, rightEdge = -Infinity, top = -Infinity;
  for (const center of [centers[0], centers.at(-1)]) {
    for (const x of [-size.width/2, size.width/2]) {
      for (const y of [0, size.height]) {
        for (const z of [-size.thickness/2, size.thickness/2]) {
          const point = [center + x*Math.cos(yaw) + z*Math.sin(yaw), y,
            -x*Math.sin(yaw) + z*Math.cos(yaw)];
          const u = point.reduce((sum, v, i) => sum + v*right[i], 0);
          const v = point.reduce((sum, value, i) => sum + value*up[i], 0);
          left = Math.min(left,u); rightEdge = Math.max(rightEdge,u);
          bottom = Math.min(bottom,v); top = Math.max(top,v);
        }
      }
    }
  }
  // Cover bevels and PCF filtering taps.
  return {left:left-pad, right:rightEdge+pad, bottom:bottom-pad, top:top+pad};
}
