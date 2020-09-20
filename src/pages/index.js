import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import HomeBanner from '../components/HomeBanner'
import HeroHeader from '../components/HeroHeader'
import BusinessFifth from '../components/BusinessFifth'
import TrendingStrains from '../components/HomeBanner/TrendingStrains'
import ShopFront from '../components/ShopFront'


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroHeader />
      <HomeBanner />
      <BusinessFifth />
      <TrendingStrains />
      <ShopFront />
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
  }
`

export default IndexPage
