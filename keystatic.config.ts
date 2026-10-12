import { config, fields, singleton } from '@keystatic/core';

// Images live in src/assets so Astro can resize them at build time. The stored
// value is the path from the project root (e.g. /src/assets/gallery/x.jpg),
// which src/lib/content.ts resolves to an image import.
const image = (label: string, dir: string) =>
  fields.image({ label, directory: `src/assets/${dir}`, publicPath: `/src/assets/${dir}/` });

export default config({
  // Locally the editor writes straight to these files. On the live site it
  // commits to GitHub instead, and the commit triggers a Vercel rebuild.
  storage: import.meta.env.PROD
    ? { kind: 'github', repo: { owner: 'brian-kilpatrick', name: 'Brian-K-Photo' } }
    : { kind: 'local' },
  ui: {
    brand: { name: 'Brian K Photo' },
    navigation: { Site: ['settings', 'home', 'photography', 'films'] },
  },
  singletons: {
    settings: singleton({
      label: 'Contact & footer',
      path: 'src/content/settings',
      schema: {
        phone: fields.text({ label: 'Phone number', description: 'Shown as typed, e.g. (267) 277-3498' }),
        email: fields.text({ label: 'Email' }),
        facebook: fields.url({ label: 'Facebook page' }),
        instagram: fields.url({ label: 'Instagram profile' }),
        zola: fields.url({ label: 'Zola listing' }),
        aboutMe: fields.markdoc.inline({ label: 'About me (footer)' }),
        siteName: fields.text({ label: 'Business name', description: 'Ends every page title except the home page’s' }),
        siteTitle: fields.text({ label: 'Site title (search results)' }),
        siteDescription: fields.text({ label: 'Site description (search results)', multiline: true }),
        contactDescription: fields.text({ label: 'Contact page description (search results)', multiline: true }),
      },
    }),
    home: singleton({
      label: 'Home page',
      path: 'src/content/home',
      schema: {
        slides: fields.array(
          fields.object({
            desktop: image('Wide photo (desktop)', 'home/slider/desktop'),
            mobile: image('Tall photo (phone)', 'home/slider/mobile'),
            alt: fields.text({ label: 'Description of the wide photo' }),
            mobileAlt: fields.text({ label: 'Description of the tall photo' }),
          }),
          { label: 'Slideshow', itemLabel: (props) => props.fields.alt.value || 'Slide' },
        ),
        taglineLines: fields.array(fields.text({ label: 'Line' }), {
          label: 'Tagline lines',
          itemLabel: (props) => props.value,
        }),
        taglineLead: fields.text({ label: 'Tagline last line' }),
        taglineFlourish: fields.text({ label: 'Tagline script word' }),
        seoHeading: fields.text({ label: 'Black banner heading' }),
        introHeading: fields.text({ label: 'Intro heading' }),
        intro: fields.markdoc.inline({ label: 'Intro' }),
        photoTile: image('Photography tile', 'home'),
        filmTile: image('Films tile', 'home'),
        streamingVisible: fields.checkbox({ label: 'Show live streaming section', defaultValue: true }),
        streamingHeading: fields.text({ label: 'Live streaming heading' }),
        streaming: fields.markdoc.inline({ label: 'Live streaming' }),
        investmentHeading: fields.text({ label: 'Investment heading' }),
        investment: fields.markdoc.inline({ label: 'Investment' }),
      },
    }),
    photography: singleton({
      label: 'Photography page',
      path: 'src/content/photography',
      schema: {
        intro: fields.markdoc.inline({ label: 'Intro' }),
        description: fields.text({ label: 'Description (search results and link previews)', multiline: true }),
        photos: fields.array(
          fields.object({
            image: image('Photo', 'gallery'),
            alt: fields.text({ label: 'Description' }),
          }),
          { label: 'Gallery', itemLabel: (props) => props.fields.alt.value || 'Photo' },
        ),
      },
    }),
    films: singleton({
      label: 'Films page',
      path: 'src/content/films',
      schema: {
        intro: fields.markdoc.inline({ label: 'Intro' }),
        description: fields.text({ label: 'Description (search results and link previews)', multiline: true }),
        videos: fields.array(
          fields.object({
            vimeoId: fields.text({ label: 'Vimeo video ID', description: 'The number at the end of the Vimeo link' }),
            title: fields.text({ label: 'Title' }),
          }),
          { label: 'Films', itemLabel: (props) => props.fields.title.value || props.fields.vimeoId.value },
        ),
      },
    }),
  },
});
