module.exports = {
  siteMetadata: {
    title: `Comfortable Space`,
    description: `Answering Unasked Questions -- Voice UI implementation with React.js and Gastby`,
    author: `@danoszz`,
  },
  footerData: {
    repo_url: `https://github.com/danoszz/comfortable-space`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `comfortable-space`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/comfortable-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
