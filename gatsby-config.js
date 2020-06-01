/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // pathPrefix: "/website",
  siteMetadata: {
    title: 'fegabe.es - Fernando Garcia Bernal - Unity Game Developer',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: " UA-4375927-2",
      },
    },
  ],
}