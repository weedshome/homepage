import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import './Business.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BusinessSecond from './BusinessSecond';

const query = graphql`
  {
    headers: file(relativePath: {eq: "header-business.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BusinessFirst = ({ }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const { headers } = useStaticQuery(query)
    return (
        <section data-aos="fade-right">

            <BusinessSecond />

        </section>
    )
}


export default BusinessFirst