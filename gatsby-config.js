require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.weedshome.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

process.env.GATSBY_CONCURRENT_DOWNLOAD = 1

const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Weed's Home`,
    description: `Awesome Cannabis Blog built with Gatsby, Contentful and Algolia`,
    titleTemplate: `Weed's Home`,
    siteUrl: `https://weedshome.com/`,
    image: `mainImg.png`,
    twitterUsername: `@weedshome`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/images/`,
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
        forceFullSync: true,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        indexName: "strains",
        queries: require("./src/constants/algolia"),
        chunkSize: 10000,
      },
    },

    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://weedshome.us2.list-manage.com/subscribe/post?u=fd9a17c64e85917ad604485c7&amp;id=ba7c85c13d',
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `@contentful/gatsby-transformer-contentful-richtext`,
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}
