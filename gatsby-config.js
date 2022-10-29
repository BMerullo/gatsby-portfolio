/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Bob Merullo",
    description: "Bob Merullo's Web Development",
    author: "Bob Merullo",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Carrois Gothic",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
}
