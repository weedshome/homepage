
const contentfulQuery = `
{
    allContentfulStrains(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        id
        title
        price
        thc
        indica
        sativa
        category
        hybrid
        effects
        usages
        rating
        cbd
        slug
        alt
        info {
          info
        }
        image {
          file {
          url
          }
          }
        }
      }
    }
`

function pageToAlgoliaRecords({ id, slug, thc, usages, rating, effects, title, category, cbd, price, indica, sativa, hybrid, info, image, alt }) {
  return { objectID: id, slug, usages, thc, rating, effects, title, category, cbd, price, indica, sativa, hybrid, info: info.info, image: image.file.url, alt }

}

const queries = [
  {
    query: contentfulQuery,
    transformer: ({ data }) => data.allContentfulStrains.nodes.map(pageToAlgoliaRecords),
  }
]

module.exports = queries
