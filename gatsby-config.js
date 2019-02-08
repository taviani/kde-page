module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'KDE eurl | 2005-2017',
    author: 'Edouard Lacan',
    description:
      'A web agency dedicated to music and small businesses administration.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'KDE 2005-2017',
        short_name: 'kde',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/kde-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
