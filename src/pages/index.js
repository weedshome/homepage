import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import HomeBanner from '../components/HomeBanner'
import HeroHeader from '../components/HeroHeader'
import BusinessFifth from '../components/BusinessFifth'


const IndexPage = ({ data }) => {
  const { allMdx: { nodes: posts } } = data
  const { allAirtable: { nodes: strains } } = data
  return (
    <Layout>
      <SEO title="Home" />
      <HeroHeader />
      <HomeBanner />
      <BusinessFifth />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    allAirtable(filter: {table: {eq: "Strains"}}, limit: 3, sort: {fields: data___date, order: DESC}) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
