import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import './Business.css';
import { FaStop } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/tabs.css'

const query = graphql`
  {
    featuresThird: file(relativePath: {eq: "solution.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuresThirdTwo: file(relativePath: {eq: "header-image-business.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ShopTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  const { featuresThird } = useStaticQuery(query)
  return (
    <section data-aos="fade-left">
      <div class="grid-container-fourth">
        <div class="third-text">
          <div class="third-text-box">
            <h2 className="strain-header-text">Cannabis Marketin Automation</h2>
            <p className="strain-text-header">Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
            <ul>
              <li className="third-space"><FaStop className="third-icon" />Understand customers and meet their requirements</li>
              <li className="third-space"><FaStop className="third-icon" />Targeted client base with Tivo's efficient technology</li>
            </ul>
          </div>
        </div>
        <div class="third-image2">
          <div class="image-third">
            <Image fluid={featuresThird.childImageSharp.fluid} />
          </div>
        </div>
      </div>

    </section>
  )
}


export default ShopTwo