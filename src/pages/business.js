import React from 'react'
import HeroFront from '../components/HeroFront'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SEO from '../components/SEO'
import BusinessHero from '../components/BusinessHero'
import BusinessThird from '../components/BusinessThird'
import BusinessFourth from '../components/BusinessFourth'
import BusinessFifth from '../components/BusinessFifth'
import BusinessSix from '../components/BusinessSix'
import ShopFront from '../components/ShopFront'

const Business = ({ }) => {

    return (
        <Layout>
            <SEO title="Home" />
            <BusinessHero />
            <BusinessFourth />
            <ShopFront />
            <BusinessSix />
        </Layout>
    )
}

export default Business
