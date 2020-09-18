import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import './Business.css';
import { FaStop } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components"

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
        <Wrapper>
            <section data-aos="flip-left">
                <div className="section-third">
                    <div className="section-width">
                        <div className="hero-info-2">
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
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
@media screen and (min-width: 768px) and (max-width: 1023px) {
.section-width {
    width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 4rem;
}
p.third-para {
    width: 100%;
}
.third-text-box {
    padding-top: 2rem;
}
.section-third {
    padding-bottom: 6rem;
}
.third-image {
    width: 300px;
}
  }
  
  
  @media screen and (max-width: 767px) {
    .section-width {
        width: 85vw;
        max-width: var(--max-width);
        margin: 0 auto;
        margin-bottom: 4rem;
    }
    p.third-para {
        width: 100%;
    }
    .third-text-box {
        padding-top: 2rem;
    }
    h2.h2-heading {
        font-size: 1.5rem;
    }
    .section-third {
        padding-bottom: 12rem;
    }
    }
`

export default BusinessFifth