import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HeroHeader from '../components/HeroHeader'
import BusinessFifth from '../components/BusinessFifth'
import TrendingStrains from '../components/HomeBanner/TrendingStrains'
import { useStaticQuery, graphql } from "gatsby"
import TrendingBlog from '../components/HomeBanner/TrendingBlog'

const IndexPage = ({ data }) => {
  const { site } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
        }
      }
    }
    `
  )
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Weeds Home",
    "description": site.siteMetadata.description,
    "alternateName": "weedshome",
    "url": site.siteMetadata.siteUrl,
    "logo": "https://www.weedshome.com/src/components/assets/wh-logo-main.png",
    "sameAs": "https://www.facebook.com/WeedsHome/"
  }
  return (
    <Layout>
      <SEO title="Home" schemaMarkup={schema} />
      <HeroHeader />
      <TrendingStrains />
      <BusinessFifth />
      <TrendingBlog />
    </Layout>
  )
}


export default IndexPage
