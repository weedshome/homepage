
const contentfulQuery = `
{
    allContentfulStrains(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        id
        title
        price
        indica
        sativa
        category
        hybrid
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

function pageToAlgoliaRecords({ id, slug, title, category, cbd, price, indica, sativa, hybrid, info, image, alt }) {
  return { objectID: id, slug, title, category, cbd, price, indica, sativa, hybrid, info: info.info, image: image.file.url, alt }

}

const queries = [
  {
    query: contentfulQuery,
    transformer: ({ data }) => data.allContentfulStrains.nodes.map(pageToAlgoliaRecords),
  }
]

module.exports = queries
