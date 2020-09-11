import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import './Business.css';
import { FaStop } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const query = graphql`
  {
    featuresThird: file(relativePath: {eq: "worldwide.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BusinessFourth = ({ }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const { featuresThird } = useStaticQuery(query)
    return (
        <section data-aos="zoom-in">

            <div className="section-fourth">

                <div class="grid-container-fourth">
                    <div class="v-text">
                        <div class="inside-text">
                            <h3>Now Is The Time To Upgrade Your Marketing Solution</h3>
                            <p>Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
                            <ul>
                                <li className="third-space"><FaStop className="third-icon" />Understand customers and meet their requirements</li>
                                <li className="third-space"><FaStop className="third-icon" />Targeted client base with Tivo's efficient technology</li>
                            </ul>
                            <button className="third-button">Learn More</button>
                        </div>
                    </div>
                    <div class="v-image">
                        <div class="inside-image">
                            <Image fluid={featuresThird.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}



export default BusinessFourth