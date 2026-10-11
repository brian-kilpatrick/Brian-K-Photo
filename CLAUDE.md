# CLAUDE.md — Brian K Photography + Films

Brian's wedding photo/video business site, www.briankphoto.com. Astro 7 + Keystatic CMS, hosted on Vercel.
Ported from a 2022 Gatsby 2 site in October 2026; the switch-over is still in progress — see `TODO.md`.

## Where things are

- Content (copy, prices, phone, gallery, films): `src/content/*.yaml`, edited through Keystatic at `/keystatic`.
  Schema: `keystatic.config.ts`. Read via `src/lib/content.ts` (`read`, `asset`, `markdoc`).
- Images: `src/assets/` (resized to WebP at build by `astro:assets`). Fonts: `public/type/` + the Adobe
  Fonts kit `zta7dxa` linked in `src/layouts/Layout.astro` (allowed on briankphoto.com, *.vercel.app, localhost).
- Styles: `src/styles/site.css` for shared rules; everything else in its component's `<style>`. No Bootstrap, no Sass.
- Pages are prerendered; only `/keystatic` and `/api/keystatic/*` run on demand (Vercel function).

## Conventions

- Content changes go in the YAML (or through the editor), never hard-coded in a page.
- The design was ported 1:1 on purpose. Visual changes are deliberate and called out in the commit.
- Keep the tracking that exists (GA `G-SKB575P3BE`, Facebook pixel, HoneyBook widget); add nothing new.

## Verifying a change

```sh
npm run dev                                     # http://localhost:4321
npx astro check && npm run build
npm run shots -- http://localhost:4321 shots/x  # screenshots of every page, phone+desktop, + findings.txt
node scripts/style-snapshot.mjs <url> shots/before.json   # before/after any CSS change…
node scripts/style-diff.mjs shots/before.json shots/after.json
```

Expected noise in `findings.txt`: `/video` 401s from `challenges.cloudflare.com` / `player.vimeo.com`
(Vimeo blocks headless browsers) and `/contact` `requestStorageAccess` + a `forEach` pageerror (HoneyBook).
Anything else is real.

## Gotchas

- **`@astrojs/vercel` is pinned to 11.0.12.** 11.0.13 crashes every on-demand route ("Cannot find native
  binding", withastro/astro#18328). Unpin once a fixed release ships, and check `/keystatic` returns 200.
- **"504 Outdated Optimize Dep" in dev** after adding/removing packages: restart `astro dev`. Client scripts
  (lightbox, slider) silently don't run until you do.
- **Keystatic storage is `local` in dev, `github` in production** — saving in dev writes files; saving on the
  live site commits to GitHub and Vercel rebuilds.
- Deploy: `vercel deploy --prod` from this directory (project `brian-k-photo`). Git-connected, but the
  production branch is still `master` (the old Gatsby code) until the switch-over in `TODO.md`.
