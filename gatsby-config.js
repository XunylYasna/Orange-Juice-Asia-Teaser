module.exports = {
  siteMetadata: {
    title: `Orange Juice Asia`,
    description: `Independent Label & Artist Collective`,
    author: `Spektrum Design Co. - Lynux Ansay`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Helvetica Neue, Bebas Neue, League Gothic, Helvetica"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
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
        name: `Orange Juice Asia Website`,
        short_name: `OJA Website`,
        start_url: `/`,
        background_color: `#ED8F31`,
        theme_color: `#ED8F31`,
        display: `minimal-ui`,
        icon: `src/images/OrangeJuice ICON White on Orange.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155394774-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
