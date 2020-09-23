import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomeBanner from '../components/HomeBanner'
import HeroHeader from '../components/HeroHeader'
import BusinessFifth from '../components/BusinessFifth'
import TrendingStrains from '../components/HomeBanner/TrendingStrains'


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroHeader />
      <HomeBanner />
      <BusinessFifth />
      <TrendingStrains />
    </Layout>
  )
}


export default IndexPage
