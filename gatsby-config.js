module.exports = {
  siteMetadata: {
    title: "appleseed's homepage",
    author: {
      name: 'Chankyu Kang',
      summary: 'A typescript developer, junior system architect',
      email: 'apple12347678@gmail.com',
    },
    description: 'A homepage of appleseed',
    site_url: 'https://appleseed.dev',
  },
  plugins: [
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'resume',
        path: `${__dirname}/content/resume`,
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        path: `${__dirname}/content/locale`,
        languages: ['en', 'ko'],
        defaultLanguage: 'ko',
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        redirect: false,
        pages: [
          {
            matchPath: '/:lang?/resume',
            getLanguageFromPath: true,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "appleseed's homepage",
        short_name: 'appleseed',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#17181c',
        display: 'minimal-ui',
        icons: [
          {
            src: 'icons/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Sans'],
        },
      },
    },
  ],
};
