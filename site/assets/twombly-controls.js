// Production configuration adapter: freezes the reviewed design defaults.
// No canvas bridge, remote control channel, or editor interface is included.
const panels = new Map();
function defaults(schema) {
  return Object.fromEntries(Object.entries(schema).filter(([key]) => key !== '_collapsed').map(([key, value]) => {
    if (Array.isArray(value)) return [key, value[0]];
    if (value && typeof value === 'object') {
      if (value.type === 'select' || value.type === 'image') return [key, value.default ?? value.options[0]];
      if (value.type === 'pad') return [key, {x: value.x[0], y: value.y[0]}];
      if (value.type === 'action') return [key, undefined];
      if (value.type === 'spring' || value.type === 'easing') return [key, value];
      return [key, defaults(value)];
    }
    return [key, value];
  }));
}
export function controls(name, schema) {
  if (panels.has(name)) return panels.get(name);
  const values = defaults(schema);
  const panel = {get: () => values, subscribe: () => () => {}, set: () => {}, remove: () => {}};
  panels.set(name, panel);
  return panel;
}
