const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  query GetStrains {
    strains: allContentfulStrains(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        slug
      }
    }
    growing: allContentfulGrowing(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        slug
      }
    }
    news: allContentfulNews(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        slug
      }
    }
    lifestyle: allContentfulLifestyle(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        slug
      }
    }
    health: allContentfulHealth(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        slug
      }
    }
  }
  `)

  result.data.strains.nodes.forEach(strain => {
    createPage({
      path: `/strains/${strain.slug}`,
      component: path.resolve(`src/templates/strain-template.js`),
      context: {
        slug: strain.slug
      },
    })
  })
  result.data.growing.nodes.forEach(growing => {
    createPage({
      path: `/growing/${growing.slug}`,
      component: path.resolve(`src/templates/growing-template.js`),
      context: {
        slug: growing.slug
      },
    })
  })
  result.data.news.nodes.forEach(news => {
    createPage({
      path: `/news/${news.slug}`,
      component: path.resolve(`src/templates/news-template.js`),
      context: {
        slug: news.slug
      },
    })
  })
  result.data.lifestyle.nodes.forEach(lifestyle => {
    createPage({
      path: `/lifestyle/${lifestyle.slug}`,
      component: path.resolve(`src/templates/lifestyle-template.js`),
      context: {
        slug: lifestyle.slug
      },
    })
  })
  result.data.health.nodes.forEach(health => {
    createPage({
      path: `/health/${health.slug}`,
      component: path.resolve(`src/templates/health-template.js`),
      context: {
        slug: health.slug
      },
    })
  })
  result.data.howto.nodes.forEach(howto => {
    createPage({
      path: `/howto/${howto.slug}`,
      component: path.resolve(`src/templates/howto-template.js`),
      context: {
        slug: howto.slug
      },
    })
  })
}
