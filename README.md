# REV 000

A portfolio prototype built around a continuous row of tactile, real 3D SD cards. React 19, TypeScript, Vite, Three.js, React Three Fiber, and DialKit. No backend or API keys are needed.

## Where we are — 3 November 2026

The first interactive prototype is implemented. The card gallery, project-focus transition, scroll momentum, live tuning, and an initial performance pass are working. This repository is the current source checkpoint; no hosted deployment has been configured yet.

| Area | Current state |
| --- | --- |
| Home | Continuous diagonal row of real 3D SD cards, subtle depth blur, compact navigation, and pause control. |
| Hover | Small spacing adjustment, a much higher lift on the card under the cursor, and a small falloff onto neighbors. |
| Browsing | Fast vertical or horizontal wheel/trackpad scrolling with momentum and direction reversal. |
| Project focus | Clicking continues lifting the card while the camera rises alongside it. Drag rotation, inertia, next/previous controls, notes, and return navigation work. |
| Content | Six sample projects and procedural card artwork. Real project stories, media, and personal About content still need to be supplied. |
| Tuning | All 81 supplied settings/action entries are saved as the source defaults in `src/config.ts`. DialKit remains available in development and production builds. |
| Performance | Six meshes per card, shared resources, offscreen culling, a 60 FPS cap, idle sleep, and lower-cost soft shadows. Final edge smoothing is retained. |
| Validation | TypeScript/production build and 30 motion tests pass. Desktop/mobile layout and the main interactions have been checked in the browser. |

The visual direction is a quiet silver/gray environment with graphite cards and colored, paper-textured labels. The current tuning favors a tightly packed, deep diagonal row with a pronounced central hover lift. Keep the saved defaults as the starting point for the next design pass.

### What is still a prototype

- The six records in `src/data/projects.ts`, their descriptions/notes, and the About copy are placeholders.
- Project focus currently shows an overview and notes; full case-study pages, project galleries, video, and outbound project links are not implemented.
- Artwork is generated locally from six procedural styles; there are no imported project images or external 3D models yet.
- Motion tests cover the mathematical helpers. Browser verification is manual; there is no automated browser regression suite or cross-device performance benchmark.
- There is no backend, contact form, analytics, hosting configuration, custom domain, or CI workflow.

### Next useful steps

1. Replace sample projects and About copy with the actual portfolio content.
2. Decide how full project stories and media should appear after opening a card.
3. Test the final content and visual tuning on the intended phones and laptops, especially scrolling, drag rotation, and sustained GPU use.
4. Choose a static host and publish the `dist` build, then add a custom domain if needed.

## Run locally

```sh
npm ci
npm run dev -- --port 5186 --strictPort
```

Use a modern Node.js release compatible with Vite 7 (Node 22.12+ is a suitable baseline). Open http://localhost:5186. Use `npm run build` to produce a static site in `dist`, and `npm run preview` to serve the production output. The output can be deployed to any static host.

## Interactions

- The diagonal card track drifts continuously toward the viewer.
- Scroll vertically or horizontally to move quickly through the row in either direction. Wheel and trackpad gestures feed a bounded momentum model; reversing a gesture reverses the row, then it eases to rest. Manual scrolling also works while automatic drift is paused or a card is hovered.
- Hover pauses the track, slightly opens the surrounding gap, and raises the hovered card much more than its neighbors. Moving away resumes the track.
- Click a card to continue lifting it upward while the camera rises alongside it and the collection falls away below. Drag it to rotate; releasing preserves a little inertia. The back has modeled gold contacts and printed markings.
- Escape or **Back to collection** returns to the row. Left/right arrows and the lower navigation move between projects.
- **Archive** provides a keyboard-accessible alternative to selecting 3D cards. About and project notes open native modal dialogs. Scrolling inside dialogs or DialKit does not drive the row.
- The pause button stops the track. System reduced-motion preferences stop automatic track and idle rotation.

## Tune the scene

Open the round **DialKit** button at the bottom right. Every exposed design parameter lives in [`src/config.ts`](src/config.ts), with folders for the row, hover, focus, camera, scroll, depth of field, materials, card proportions, lighting, interface, performance, and mobile adjustments. Changes apply live. Values and named versions persist in this browser. **Reset all settings** restores the code defaults; **Copy parameters** lets you keep a tuning snapshot.

Browser overrides can differ from the repository defaults. Copying parameters does not rewrite the source: update `src/config.ts` to make a tuning change the new default for everyone. Use **Reset all settings** to return a browser to the saved source defaults.

The **Scroll** folder controls sensitivity, maximum speed, friction, follow response, and direction. **Hover → Center Lift** controls the hovered card's height; **Neighbor Lift** controls the fraction applied to surrounding cards, and **Gap** controls the subtle spacing adjustment. The hovered card keeps a connected hit area down to its resting position so it remains clickable as it rises. **Focus → Camera Rise / Camera Response** tune the upward camera follow; **Background Drop** controls how far the other cards sink during selection. New settings retain their defaults alongside previously saved tuning values.

Depth-of-field focus distance and range are in **world units**, matching the installed postprocessing version. The blur pass is bypassed entirely in project focus; its resources stay mounted to keep transitions stable. Pixel ratio, shadow visibility, blur strength/resolution, and antialiasing are adjustable for slower devices. The default quality uses 4× MSAA and a final SMAA pass after blur and tone mapping to smooth the finished card silhouettes. Desktop blur runs at 720px; mobile retains a separate 480px setting. **Performance → Edge Smoothing** controls the final SMAA pass.

## Add your work

Edit [`src/data/projects.ts`](src/data/projects.ts). The six entries are deliberately marked as sample projects. The card track, archive, and detail view all read from this list. Each entry has a title, ID, discipline, year, accent color, artwork style, description, and notes.

The available procedural artwork styles are `starburst`, `orbit`, `wave`, `grid`, `bloom`, and `signal`. Artwork and paper textures are generated once, cached across repeated cards, and uploaded to the GPU. Replace `createProjectTexture` in [`src/scene/textures.ts`](src/scene/textures.ts) to use custom project imagery later.

## Structure and performance

- `src/App.tsx`: navigation, project content, accessible controls, dialogs, and DialKit.
- `src/scene/Gallery.tsx`: camera, lighting, card selection, hover and drag interaction, and postprocessing.
- `src/scene/CardModel.tsx`: low-poly beveled card geometry and materials.
- `src/scene/textures.ts`: deterministic procedural artwork, paper, shell grain, and back printing.
- `src/scene/motion.ts`: frame-rate-independent damping, circular track positions, and hover falloff.
- `src/scene/scroll.ts`: dominant-axis wheel normalization and frame-rate-independent scroll momentum.
- `src/scene/FrameLoop.tsx`: one capped rendering scheduler with idle sleep and visibility handling.
- `src/scene/FrameProbe.tsx`: opt-in local rendering measurements at `?profile`.

Animation uses refs without per-frame React state updates. One scheduler caps active rendering at 60 FPS, stops after hover or paused motion settles, and resumes on interaction. Hidden tabs suspend rendering. Cards outside the camera's view are culled as a group. The track uses three copies of the project list; wrapping takes place off screen.

The 60 FPS setting is a target/cap, not a guarantee on every device. Final performance should be checked with the real project content on the intended hardware.

Each card uses six draw calls instead of thirteen. Geometries, materials, and textures are shared across repeated cards; fixed details and gold contacts are merged without removing the back or front details. Default soft shadows use 1024px maps and update at 30 FPS. Device pixel ratio stays capped at 1.5 and the existing antialiasing remains enabled. The frame cap and shadow quality are adjustable in **Performance**. The 3D engine is lazy-loaded separately from the page interface. The fallback archive remains available if WebGL cannot initialize. Fonts use Google Fonts with system fallbacks.

For local measurements, open `http://localhost:5186/?profile` and inspect the canvas `data-render-stats` attribute: FPS, CPU submission time, average draw calls, geometry/texture counts, and the sampling timestamp. It updates only while frames render; an unchanged timestamp on a settled hover confirms idle sleep. Measurements stay on the device and no profiling overlay is shown to visitors.

## Checks

```sh
npm test
npm run build
```

There are 30 tests across `motion.test.ts` and `scroll.test.ts`. They cover damping at different frame rates, offscreen wrapping, circular-track invariants, hover falloff, scroll direction/unit normalization, and momentum integration. Browser verification covers all four scroll directions, card selection, rotation, return/navigation, dialogs, and DialKit. Idle sleep, wake-on-scroll, and the bypass of depth blur during project focus have also been checked locally.

Generated output (`dist`), dependencies (`node_modules`), local preview screenshots (`artifacts`), and TypeScript build caches are intentionally ignored by Git. The source and lockfile are sufficient to reproduce the build.
