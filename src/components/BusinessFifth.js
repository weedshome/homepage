import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import './Business.css';
import { FaStop } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const query = graphql`
  {
    featuresThird: file(relativePath: {eq: "cannabis-strains-finder.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BusinessFifth = ({ }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const { featuresThird } = useStaticQuery(query)
    return (
        <section data-aos="flip-left">
            <div className="section-third">
                <div className="hero-info-2">
                    <div className="above-heading">DESCRIPTION</div>
                    <h2 className="h2-heading">Marketing Automation</h2>
                    <p className="third-para">Take your business strategy to the next level and automatize your marketing tasks to save time for product development. Tivo can provide results in less than 2 weeks</p>
                </div>
                <div class="grid-container-third">
                    <div class="third-image">
                        <div class="image-third">
                            <Image fluid={featuresThird.childImageSharp.fluid} />
                        </div>
                    </div>
                    <div class="third-text">
                        <div class="third-text-box">
                            <h3>Marketing Automation</h3>
                            <p className="third-para2">Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
                            <ul>
                                <li className="third-space"><FaStop className="third-icon" />Understand customers and meet their requirements</li>
                                <li className="third-space"><FaStop className="third-icon" />Targeted client base with Tivo's efficient technology</li>
                            </ul>
                            <button className="third-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


export default BusinessFifth