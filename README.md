# Brian K Photography + Films

www.briankphoto.com — an [Astro](https://astro.build) site with a [Keystatic](https://keystatic.com) editor, hosted on Vercel.

## Editing content

Open **`/keystatic`** on the live site (works on a phone), sign in with GitHub, edit, and Save.
Saving commits to this repo; Vercel rebuilds and the change is live in about a minute.

What's editable: phone/email/socials and the footer bio (**Contact & footer**), the home page slideshow,
copy and pricing (**Home page**), the photo gallery (**Photography page**), and the Vimeo films (**Films page**).
Content lives in `src/content/*.yaml`; images in `src/assets/`.

## Developing

```sh
npm install
npm run dev      # http://localhost:4321, editor at http://127.0.0.1:4321/keystatic (writes local files)
npm run build
npm run shots -- http://localhost:4321 shots/local   # full-page screenshots + console/HTTP errors
```

Before a styling change, snapshot every element's rendered style, make the change, snapshot again and diff —
anything that moved or changed colour/font shows up by name:

```sh
node scripts/style-snapshot.mjs http://localhost:4321 shots/before.json
# …change CSS…
node scripts/style-snapshot.mjs http://localhost:4321 shots/after.json
node scripts/style-diff.mjs shots/before.json shots/after.json
```

Styles: `src/styles/site.css` holds the site-wide rules; everything else lives in its component's `<style>`.
