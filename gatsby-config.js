module.exports = {
  siteMetadata: {
    siteUrl: "https://tommymacwilliam.com",
    title: "All Aircraft, Report",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 90,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://use.typekit.net"],
        web: [
          {
            name: "arboteck",
            file: "https://use.typekit.net/ofg7kyr.css",
          },
          {
            name: "fenway-park-jf",
            file: "https://use.typekit.net/ofg7kyr.css",
          },
          {
            name: "proxima-nova",
            file: "https://use.typekit.net/ofg7kyr.css",
          },
          {
            name: "roc-grotesk-wide",
            file: "https://use.typekit.net/ofg7kyr.css",
          },
        ],
      },
    },
  ],
};
