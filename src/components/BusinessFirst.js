import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import './Business.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

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

            <div class="grid-container-business">
                <div class="k-1">
                    <div class="above-heading">Business | Weed's Home </div>
                    <div class="k-title">
                        <h2 className="business-title">Cannabis Marketing Automation</h2>
                    </div>
                    <div class="k-description">
                        <p className="business-text">Use Weed's Home to automate your marketing actions in order to reach a much larger audience</p>
                    </div>
                    <div class="k-button">
                        <button className="business-button" to="/">Contact Us</button>
                    </div>
                </div>
                <div class="k-2">
                    <div className="business-image-container">
                        <div class="business-hero-image">
                            <Image fluid={headers.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default BusinessFirst