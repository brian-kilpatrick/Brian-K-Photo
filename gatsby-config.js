module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Brian K Photography + Films | Philadelphia Wedding Photography | Philadelphia Wedding Videography`,
    description: `Virbrant & Modern Wedding Photography & Videography servicing Philadelphia, New Jersey, Delaware, NYC & Nationwide.`,
    siteUrl: 'https://www.briankphoto.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-134867932-2',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Brian K Photography + Films',
        short_name: 'Brian K Photography + Films',
        description: 'Wedding Photography & Videography in Philadelphia, Pennsylvania and beyond',
        homepage_url: 'https://www.briankphoto.com',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
