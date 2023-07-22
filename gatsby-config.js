/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `v2m63u1ogzpz`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
