require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Gatsby MDX Blog`,
    description: `Awesome Blog built with Gatsby and MDX`,
    titleTemplate: `%s MDX Blog`,
    url: `https://mdx-blog.netlify.app/`,
    image: `mainImg.png`,
    twitterUsername: `@john_smilga`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/products`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9o07roe0gz0h`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `KL4_SRyDhpmqnlqsJ1cMlfeuXOSFQ6MBGlA-dUrd-MM`,
        forceFullSync: true,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `weedshome.wh`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: "1DR891HL15",
        apiKey: "a2a259879ba297d63c0aea215b854c9c",
        indexName: "strains",
        queries: require("./src/constants/algolia"),
        chunkSize: 10000,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Open Sans`,
          },
          {
            family: `Teko`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Strains`,
            mapping: { image: `fileNode` }
          }
        ]
      }
    }
  ],
}
