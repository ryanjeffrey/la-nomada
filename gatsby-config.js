module.exports = {
  siteMetadata: {
    title: "la-nomada",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "la-nomada-shop",
        accessToken: "909c44851766ff2562caf22085631954",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-187674341-1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
