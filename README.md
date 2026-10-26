# Paradigm Meet 2.0

An event site built with React, Vite, and TypeScript. Before the configured reveal time, the poster, event overview, and schedule stay hidden behind placeholders. Registration forms and contact information are available at all times. At and after the reveal time, the poster, event overview, and schedule appear.

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

## Configure the poster reveal

Open **`src/data/site.ts`**. `posterReveal` is the actual moment the site switches from the pre-reveal page to the revealed page. It controls the countdown and when the poster, event overview, and schedule become visible. Registration forms remain available before and after the reveal. Enter an ISO timestamp with an explicit timezone offset. For India, use `+05:30`:

```ts
posterReveal: '2026-10-26T14:00:00+05:30', // 26 October 2026, 2:00 PM IST
```

Update `revealDateLong` and `revealDateShort` in the same file to match `posterReveal`. These two fields only control the human-readable date shown in the pre-reveal countdown; they do not set or trigger the reveal. `eventDateLong` and `eventDateShort` are the event date, which is separate from the reveal date.

### Preview the two states

`previewNow` is a testing override for the clock. It pretends the current time is the timestamp you enter, so you can check either page state without changing the real `posterReveal` setting:

```ts
previewNow: '2026-10-26T13:59:00+05:30', // before reveal: placeholders
```

Use a timestamp earlier than `posterReveal` to see the pre-reveal page; use one at or later than `posterReveal` to see the poster, event overview, and schedule. Registrations remain visible in both states. Set `previewNow` back to `null` when finished so the site uses each visitor's real clock.

You can also preview without editing the file by adding `?now=` to the URL. For example:

- Before reveal: `?now=2026-10-26T13:59:00%2B05:30`
- After reveal: `?now=2026-10-26T14:00:01%2B05:30`

The URL override takes priority over `previewNow`. `previewNow` and `?now=` are only for previewing; neither changes the actual reveal date. After the reveal, the poster is available to tap/click to view larger.

## The full site

The complete version (events, schedule, registrations, event info, poster, Google Form links) is saved in **`_full-site-backup/`**. It is not part of the build and is not deployed. To bring it back, copy its `src/`, `public/`, `index.html` and `package.json` over the ones in the project root.

## Deploy

Run `npm run build`, then upload the **`dist/`** folder. Asset paths are relative (`base: './'`), so it works on any host or sub-path:

- **Netlify:** drag the `dist` folder onto app.netlify.com/drop.
- **Vercel:** import the project. The defaults work (build `npm run build`, output `dist`).
- **GitHub Pages:** push the contents of `dist/` to a `gh-pages` branch, or use the official Pages action.

Don't upload `_full-site-backup/`; it contains the unannounced details.

Fonts (Bangers, Barlow Condensed, Outfit) load from Google Fonts. Animations turn off automatically for visitors who have "reduce motion" switched on.
