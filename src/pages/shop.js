import React from 'react'
import Layout from '../components/Layout'
import Products from '../components/Products'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Newsletter from '../components/Newsletter'
import ShopFront from '../components/ShopFront'


const Shop = ({ data }) => {
  const { allMdx: { nodes: products } } = data

  return (
    <Layout>
      <SEO title="Home" />
      <ShopFront />
      <Products products={products} title="recently published" />
      <Newsletter />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "/products/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
        nodes {
        excerpt
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM YYYY")
            category
            author
            readTime
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          id
        }
      }
    }
`

export default Shop
