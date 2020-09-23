
const contentfulQuery = `
{
    allContentfulStrains {
      nodes {
        id
        title
        price
        indica
        sativa
        category
        hybrid
        image {
          file {
            url
          }
        }
      }
    }
  }
`

function pageToAlgoliaRecords({ id, title, price, indica, sativa, hybrid, image }) {
  return { objectID: id, title, price, indica, sativa, hybrid, image }

}

const queries = [
  {
    query: contentfulQuery,
    transformer: ({ data }) => data.allContentfulStrains.nodes.map(pageToAlgoliaRecords),
  }
]

module.exports = queries