module.exports = {
  siteMetadata: {
    title: "Kei Nagasawa",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: `${process.env.GATSBY_CONTENTFUL_API_KEY}`,
        spaceId: `${process.env.GATSBY_CONTENTFUL_SPACE_ID}`,
      },
    },
    "gatsby-plugin-emotion",
//     {
//       resolve: "gatsby-plugin-google-analytics",
//       options: {
//         trackingId: "",
//       },
//     },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
