import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BusinessFourth from '../components/BusinessFourth'
import BusinessSix from '../components/BusinessSix'

const Business = () => {

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Cannabis Business",
        "description": "Target the right customers for your cannabis business with the help of Weed's Home patented segmentation technology and deploy efficient marketing campaigns.",
        "publisher": {
            "@type": "Weed's Home",
            "name": "Weed's Home"
        },
    }

    return (
        <Layout>
            <SEO title="Business" schemaMarkup={schema} />
            <BusinessFourth />
            <BusinessSix />
        </Layout>
    )
}

export default Business
