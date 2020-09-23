import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BusinessHero from '../components/BusinessHero'
import BusinessFourth from '../components/BusinessFourth'
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
