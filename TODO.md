# Switch-over TODO

The Astro site is live at https://brian-k-photo.vercel.app. www.briankphoto.com still serves the old Gatsby
build from GitHub Pages (`gh-pages` branch).

## To finish the switch

- [ ] **Keystatic GitHub login** (needs a desktop browser, ~5 min). In `keystatic.config.ts` temporarily
      use `kind: 'github'` in dev, run `npm run dev`, open http://127.0.0.1:4321/keystatic, follow
      "Create GitHub App" (owner: brian-kilpatrick, repo access: Brian-K-Photo). It writes
      `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET` and
      `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` to `.env`. Add all four to Vercel (`vercel env add`, Production),
      revert the config line, redeploy, and add `https://www.briankphoto.com/api/keystatic/github/oauth/callback`
      (and the vercel.app one) as callback URLs on the GitHub App.
- [ ] **Merge `astro` into `master`** and set it as Vercel's production branch (it already is `master`).
      Discard the stale uncommitted `src/pages/index.js` title edit in the main checkout first — the Astro
      home page already uses "Home".
- [ ] **Move the domain.** Add `www.briankphoto.com` and `briankphoto.com` to the Vercel project, then
      change DNS at the registrar to Vercel's records. Keep `gh-pages` until the new site is confirmed live,
      then delete the branch and turn off GitHub Pages in the repo settings.
- [ ] After the move: re-run `npm run shots -- https://www.briankphoto.com shots/prod`, submit a test
      HoneyBook inquiry, and check Google Search Console still verifies (meta tag is carried over).

## Content to review (Brian's call — unchanged from the old site)

- [ ] "Live Video Streaming" section is pandemic-era copy — hide it with the toggle in Keystatic (Home page).
- [ ] Prices ($3,000 / $5,500 / streaming tiers) date from 2022.
- [ ] Gallery photo descriptions are generic ("…wedding photography 12"); real alt text helps SEO.

## Later

- [ ] Unpin `@astrojs/vercel` once withastro/astro#18328 is fixed.
- [ ] Close or merge the ~20 stale Dependabot branches on GitHub (they target the deleted Gatsby code).
