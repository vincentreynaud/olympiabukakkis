module.exports = {
  siteMetadata: {
    title: "Olympia Bukakkis",
    description: "Olympia Bukakkis' static portfolio website",
    author: "Vincent Reynaud <mail@vincentreynaud.de>",
    siteUrl: "https://olympiabukakkis.com/",
    sections: ["events", "work"]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-plugin-catch-links",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 900,
              quality: 75,
              withWebp: true,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lewis Gatsby Starter Blog",
        short_name: "Lewis Gatsby Starter Blog",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt"
  ]
};
