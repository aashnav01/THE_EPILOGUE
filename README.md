# Paradigm Meet 2.0 — coming-soon site

A teaser page: the name, a poster-reveal countdown, and "Coming soon" for everything else.
Built with React + Vite + TypeScript. No UI libraries, no backend.

## Run it

You need Node.js 18 or newer.

```bash
npm install
npm run dev        # local preview at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
npm run typecheck  # optional TypeScript check
```

To test on your phone, run `npm run dev -- --host` and open the "Network" URL on a phone connected to the same Wi-Fi.

## Change the poster-reveal date or time

Open **`src/data/site.ts`** and edit `posterReveal`. It is an absolute time in IST, so it is correct on any phone in any timezone:

```ts
posterReveal: '2026-10-26T00:00:00+05:30',   // 26 Oct 2026, 12:00 AM IST
// e.g. 6 PM instead:  '2026-10-26T18:00:00+05:30'
```

The same file holds the display date (`revealDateLong`, `revealDateShort`) and the text of each "Coming soon" section.

To preview what visitors see once the countdown hits zero, add `?now=` to the URL, e.g. `?now=2026-10-26T00:00:00%2B05:30`.

## The full site

The complete version (events, schedule, registrations, event info, poster, Google Form links) is saved in **`_full-site-backup/`**. It is not part of the build and is not deployed. To bring it back, copy its `src/`, `public/`, `index.html` and `package.json` over the ones in the project root.

## Deploy

Run `npm run build`, then upload the **`dist/`** folder. Asset paths are relative (`base: './'`), so it works on any host or sub-path:

- **Netlify:** drag the `dist` folder onto app.netlify.com/drop.
- **Vercel:** import the project. The defaults work (build `npm run build`, output `dist`).
- **GitHub Pages:** push the contents of `dist/` to a `gh-pages` branch, or use the official Pages action.

Don't upload `_full-site-backup/`; it contains the unannounced details.

Fonts (Bangers, Barlow Condensed, Outfit) load from Google Fonts. Animations turn off automatically for visitors who have "reduce motion" switched on.
