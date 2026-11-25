# REV 000

The reviewed production portfolio for **rev000.com**, by Jules Gates.

## Production version

`site/` is the self-contained version approved on the Twombly canvas on November 24, 2026 (**01 + 02 · Hover hero → Project**, frame `d762ea9d73ec`). It preserves the exact bundled React/Three.js implementation and interaction helpers from that version. It does not require an API, environment variables, or a Twombly connection. The editor controls adapter is replaced with frozen design defaults for production.

The production version includes the black SD-card collection, collective scrolling with top-anchored bottom-edge lag, stable hover lifts, localized ASCII headline effect, project navigation, the guarded content-to-landing transition, and the updated Archive and About panels.

```sh
npm run build
npm run preview:production
```

The build uses only Node's standard library, checks JavaScript syntax and local imports, and copies `site/` to `dist/`. No dependency installation is required for the production build. The preview is available at http://127.0.0.1:5186/.

## Vercel

Import `JKG320/personal` into Vercel with the repository root as the project root. `vercel.json` selects the static production build and `dist/` output. Add `rev000.com` and `www.rev000.com` in the project's Domains settings, then copy the exact DNS records Vercel supplies into Squarespace. Keep existing email records unchanged.

## Editing the reviewed version

The production entry is `site/index.html`. The shared screen and Three.js implementation are in `site/assets/index-DtrH3oks.js` and `site/assets/Gallery-CsqLrdB-.js`. These are the bundled snapshot, not the older prototype's TypeScript sources.

Interaction helpers are readable modules in `site/assets/`: `hero-controls.js` holds design defaults; `home-scroll.js` handles homepage inputs; `project-color-growth.js` handles section scrolling and tint; `headline-scramble.js` handles the localized ASCII effect. Styles are in `site/assets/index-BBJkfuT6.css`.

## Earlier prototype

The original React/TypeScript prototype remains under `src/`. It is preserved for reference and is not the production entry point. To work on that earlier version:

```sh
npm ci
npm run dev
npm run build:prototype
npm test
```

Do not replace the production deployment with the older prototype build unless intentionally changing versions.
