import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import './Business.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const query = graphql`
  {
    headers: file(relativePath: {eq: "find-cannabis-strains.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HeroHeaderFirst = ({ }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const { headers } = useStaticQuery(query)
    return (
        <section data-aos="fade-right">

            <div class="grid-container-business">
                <div class="k-1">
                    <div class="k-title">
                        <h2 className="business-title">Learn more about the plant</h2>
                    </div>
                    <div class="k-description">
                        <p className="business-text">Use Weed's Home to automate your marketing actions in order to reach a much larger audience in the cannabis.</p>
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


export default HeroHeaderFirst