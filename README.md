# Hackattack House — hacker house site

A clean, single-page marketing site for a Los Angeles hacker house on the
entire 7th floor at 6100 Wilshire Blvd. No build step, no dependencies — just
HTML, CSS, and a little vanilla JS.

## Run it

It's a static site. Either:

- Double-click `index.html`, **or**
- Serve it locally (better for the map embed):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Files

- `index.html` — all the content/copy
- `styles.css` — all styling (design tokens at the top in `:root`)
- `script.js` — nav, scroll reveals, form stub

## Customize

- **Accent color:** change `--accent` in `styles.css` `:root`.
- **Photos:** real photos live in `photos/`:
  - `hero.jpg` — branded front desk (hero)
  - `floor.jpg` — full-bleed "View" band (desks + city windows)
  - `studio.jpg` — Work section
  - `apartment.jpg` — Live section (the 5-min-away studio)
  - gallery: `hackattack-wall.jpg`, `desks.jpg`, `kitchen.jpg`,
    `offices.jpg`, `floorwide.jpg`, `studio.jpg`

  To swap any, replace the file with the same name.

  Each photo also has a `.webp` version (~50–65% smaller) that the browser
  loads automatically, falling back to the `.jpg`. If you replace a `.jpg`,
  regenerate its WebP: `cwebp -q 80 photos/NAME.jpg -o photos/NAME.webp`
  (install once with `brew install webp`).
- **Favicon / social card:** `favicon.svg` (+ `favicon-32.png`,
  `apple-touch-icon.png`) and `og.jpg` (1200×630 share image). Update the
  absolute `og:url` / `og:image` URLs in `index.html` once you have a domain.
- **Pricing:** placeholder numbers live in the Membership section
  (`data-price` spans) — set your real numbers.
- **Application form (Formspree):** create a form at
  [formspree.io](https://formspree.io), then in `index.html` replace
  `YOUR_FORM_ID` in the `<form action="https://formspree.io/f/YOUR_FORM_ID">`
  with your real form ID. Submissions email you; the page shows an inline
  thank-you (submitted via AJAX, no redirect).
- **Email:** replace `hello@hackattackhouse.com` in the footer.

## Deploy

Drag the folder onto [Netlify](https://app.netlify.com/drop), or push to a repo
and enable GitHub Pages / Vercel / Cloudflare Pages. It's all static.
