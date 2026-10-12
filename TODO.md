# Switch-over TODO

The Astro site is live at https://www.briankphoto.com (Vercel, deployed from `master`).

## To finish the switch

- [x] **Keystatic GitHub login** (needs a desktop browser, ~5 min). In `keystatic.config.ts` temporarily
      use `kind: 'github'` in dev, run `npm run dev`, open http://127.0.0.1:4321/keystatic, follow
      "Create GitHub App" (owner: brian-kilpatrick, repo access: Brian-K-Photo). It writes
      `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET` and
      `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` to `.env`. Add all four to Vercel (`vercel env add`, Production),
      revert the config line, redeploy, and add `https://www.briankphoto.com/api/keystatic/github/oauth/callback`
      (and the vercel.app one) as callback URLs on the GitHub App.
- [x] **Merge `astro` into `master`** and set it as Vercel's production branch (it already is `master`).
      Discard the stale uncommitted `src/pages/index.js` title edit in the main checkout first — the Astro
      home page already uses "Home".
- [x] **Move the domain.** `www.briankphoto.com` serves the Astro site from Vercel (Let's Encrypt cert);
      `briankphoto.com` redirects to it. Screenshots of the live domain are in `shots/prod`: only the expected noise.
- [ ] **On or after 2026-10-12:** delete the `gh-pages` branch and turn off GitHub Pages in the repo settings.
      Waiting a day lets cached DNS answers that still point at GitHub Pages expire, so nobody hits a 404.
- [ ] Submit a test HoneyBook inquiry on https://www.briankphoto.com/contact and check it arrives.
- [ ] In Google Search Console: check the site still verifies (the meta tag is on the page) and submit
      `https://www.briankphoto.com/sitemap-index.xml`.

## Content to review (Brian's call — unchanged from the old site)

- [x] "Live Video Streaming" pandemic-era copy rewritten as "Live Streaming" (for loved ones who can't travel).
      **Claude's draft** — reword it in Keystatic → Home page if it doesn't sound like you.
- [ ] Prices ($3,000 / $5,500 / streaming tiers) date from 2022.
- [x] Gallery and slideshow photos have real descriptions. Slides have two (wide and tall photos differ);
      the phone one is swapped in by `Slider.astro`'s script.
- [ ] **The Photography page intro and the search descriptions are Claude's drafts** (Keystatic → Photography
      page: Intro, Description; Films page: Description; Contact & footer: Contact page description). Rewrite
      them in your voice.
- [x] Home page title shortened to "Brian K Photography + Films | Philadelphia Wedding Photographer" (66 chars).
- [ ] Make sure the Google Business Profile has the new number, (267) 277-3498.

## Later

- [ ] Unpin `@astrojs/vercel` once withastro/astro#18328 is fixed, and drop the `path-to-regexp` override in
      `package.json` if the new version no longer pulls in 6.1.0 (`npm ls path-to-regexp`).
- [ ] Close or merge the ~20 stale Dependabot branches on GitHub (they target the deleted Gatsby code).
