/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Eaasy Routine`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Recept",
        link: "/RecepiesApp",
      },
      {
        name: "Träningspass",
        link: "/TrainingApp",
      },
      {
        name: "Boka skjuts",
        link: "/BookingApp",
      },
    ],
  },

  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/easyroutine-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_SPACE_ID,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },

    // {
    //   resolve: "gatsby-plugin-netlify",
    //   options: {
    //     redirects: [
    //       {
    //         fromPath: "/RecepiesApp",
    //         toPath: "/RecepiesApp",
    //         isPermanent: true,
    //         statusCode: 301,
    //       },
    //       {
    //         fromPath: "/TrainingApp",
    //         toPath: "/TrainingApp",
    //         isPermanent: true,
    //         statusCode: 301,
    //       },
    //       {
    //         fromPath: "/BookingApp",
    //         toPath: "/BookingApp",
    //         isPermanent: true,
    //         statusCode: 301,
    //       },
    //     ],
    //   },
    // },
  ],
}
