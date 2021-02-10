module.exports = {
  siteMetadata: {
    title: "Kei Nagasawa",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "MtPLQ6eZrnmx6O_qUvQOtkqx_vo5BkVv8xY-WbM4Qy4",
        spaceId: "rqyee5s9juuf",
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
