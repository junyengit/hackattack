# Deploying Hackattack House

This is a plain static site (HTML + CSS + JS + images) with **no build step**,
so hosting is simple and free. Pick **one** of the options below.

---

## Option A — Netlify Drop (fastest, no account fuss) ⭐ recommended to start

1. Go to **https://app.netlify.com/drop**
2. Drag the **entire project folder** (`hackattack/`) onto the page.
   - Make sure it includes `index.html`, `styles.css`, `script.js`,
     `favicon.svg`, `og.jpg`, and the `photos/` folder.
3. It deploys in ~10 seconds and gives you a URL like
   `https://random-name-123.netlify.app`.
4. Create a free account when prompted so the site stays up and you can add a
   custom domain.

To update later: drag the folder onto the same site again (Site → Deploys), or
switch to the Git option below for auto-deploys.

---

## Option B — Vercel or Netlify via GitHub (auto-deploy on every push)

Best once you'll be making ongoing edits.

1. Put the project on GitHub:
   ```bash
   cd /Users/jeung-yenlui/Documents/hackattack
   git add .
   git commit -m "Hackattack House site"
   git branch -M main
   git remote add origin https://github.com/<you>/hackattack-house.git
   git push -u origin main
   ```
2. Go to **https://vercel.com** (or Netlify) → **Add New Project** →
   import the repo.
3. Framework preset: **Other / No framework**. Build command: **none**.
   Output/publish directory: **`.`** (the repo root). Deploy.
4. Every `git push` now redeploys automatically.

---

## Custom domain (e.g. hackattackhouse.com)

1. Buy the domain (Namecheap, Cloudflare, Google Domains, etc.) if you haven't.
2. In your host (Netlify: **Domain settings → Add domain**; Vercel:
   **Project → Settings → Domains**), add the domain.
3. Point DNS as the host instructs — usually either:
   - an **A record** to the host's IP, **or**
   - a **CNAME** for `www` to the host's target, **or**
   - (easiest) change your registrar's **nameservers** to the host's.
4. HTTPS/SSL is issued automatically once DNS resolves (a few min–few hrs).

---

## Post-deploy checklist (do these once you have the real URL)

- [ ] **Update social-card URLs** in `index.html` `<head>` — replace
      `https://hackattackhouse.com/` in `og:url`, `og:image`, and
      `twitter:image` with your real domain (they must be absolute for link
      previews to render). Redeploy.
- [ ] **Activate the Formspree form** — submit the live Apply form once with
      real info, then click the confirmation link Formspree emails you. Until
      then, submissions won't forward.
- [ ] **Test the form** end-to-end from the live site; confirm the email lands.
- [ ] **Check the link preview** — paste the URL into iMessage / Slack / X and
      confirm the `og.jpg` image + title show. (Use
      https://www.opengraph.xyz to preview without posting.)
- [ ] **Spot-check on a phone** — nav menu, gallery, the View band, the form.
- [ ] Make sure `hello@hackattackhouse.com` (footer) is a real, monitored inbox.

---

## Notes

- The Google Map embed and the Formspree form both need the site served over
  **http/https** (not opened as a `file://` path) — which any of the hosts
  above provide automatically.
- If you swap any photo, regenerate its WebP so the fast version stays in sync:
  `cwebp -q 80 photos/NAME.jpg -o photos/NAME.webp`
