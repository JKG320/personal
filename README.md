# REV 000

A portfolio prototype with a finite row of 12 interactive 3D SD cards. The site uses React, TypeScript, Vite, Three.js, and React Three Fiber. It does not need a backend.

## Run locally

```sh
npm ci
npm run dev -- --port 5186 --strictPort
```

Open http://127.0.0.1:5186/. Use `npm run build` for a static production build and `npm test` to run the layout and motion tests.

## Tune the hero

Scene defaults live in the single `CONFIG` object at the top of [src/config.ts](src/config.ts). Open http://127.0.0.1:5186/?debug to change the card count, spacing, angle, camera and gradient colors live. **Log CONFIG JSON** prints the full current configuration in the browser console. Copy the values you want to keep into the source.

The camera fits the complete straight row on resize. The background is a seamless radial gradient, with a separate floor that catches the key light's shadows and soft contact shadows under the cards.

Select a card to open its project and drag to rotate it. The Archive provides a keyboard-accessible way to open every card. The 12 numbered cards reuse the six sample entries in [src/data/projects.ts](src/data/projects.ts); replace those records with the final portfolio content when ready.
