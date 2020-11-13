module.exports = {
  siteMetadata: {
    title: "appleseed's home page",
    author: {
      name: 'Chankyu Kang',
      summary: 'A typescript developer, junior system architect',
      email: 'apple12347678@gmail.com',
    },
    description: 'A home page of appleseed',
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
        pages: [],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "appleseed's dev blog",
        short_name: 'appleseed',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#17181c',
        display: 'minimal-ui',
        icons: [],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'IBM Plex Sans',
          },
        ],
      },
    },
  ],
};
