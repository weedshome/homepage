import React, { useEffect } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';
import './Business.css';
import { FaStop } from 'react-icons/fa';
import styled from "styled-components"
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmailBg from '../assets/Background-home2.svg'

const query = graphql`
  {
    featuresThird: file(relativePath: {eq: "background2.svg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BusinessFifth = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const { featuresThird } = useStaticQuery(query)
    return (
        <Wrapper>
            <section>
                <div className="section-third">
                    <div className="section-width">
                        <div className="hero-info-2">
                            <h2 className="h2-heading">Marketing Automation</h2>
                            <p className="third-para">Take your business strategy to the next level and automatize your marketing tasks to save time for product.</p>
                        </div>
                        <div class="grid-container-third">
                            <div class="third-image">
                                <div class="image-third">
                                </div>
                            </div>
                            <div class="third-text">
                                <div class="third-text-box">
                                    <h3>Marketing Automation</h3>
                                    <p className="third-para2">Target the right customers for your business with the help of Weed's Home network and deploy efficient.</p>
                                    <ul>
                                        <li className="third-space"><FaStop className="third-icon" />Understand customers and meet their requirements</li>
                                        <li className="third-space"><FaStop className="third-icon" />Targeted client base with Weed's Home efficient technology</li>
                                    </ul>
                                    <div className="buttons-header">
                                        <Link className="link" to="/business/">
                                            <p class="button-first">See how</p>
                                        </Link>
                                    </div>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
scroll-snap-align: center;
height: 100vh;
min-height: 36rem;
background:
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) /2 )
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
padding-bottom: 6rem;
.buttons-header {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    justify-content: left;
    margin-top: 32px;
    display: flex;
  }
  .button-first {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #3d796d;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 15px;
    padding: 12px 16px;
    margin-right: 24px;
  }
@media screen and (min-width: 768px) and (max-width: 1023px) {
    padding-bottom: 0rem;
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
.third-image {
    width: 300px;
}
.button-first {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #3d796d;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 11px;
    padding: 12px 16px;
  }
  .buttons-header {
    justify-content: center !important;
  }
}
  
  
  @media screen and (max-width: 767px) {
    background: #bad0cb;
    padding-bottom: 0rem;
    .buttons-header {
        justify-content: center !important;
    }
    .section-width {
        width: 85vw;
        max-width: var(--max-width);
        margin: 0 auto;
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
        padding-bottom: 0rem;
    }
    .button-first {
        border: 2px solid;
        display: inline-block;
        border-radius: 8px;
        letter-spacing: 0.02em;
        cursor: pointer;
        font-weight: 500;
        line-height: 1;
        background-color: #3d796d;
        box-shadow: 0 3px 8px rgba(0,0,0,0.09);
        border-color: transparent;
        color: #FFFFFF;
        font-size: 11px;
        padding: 12px 16px;
        margin: 0 auto;
      }
    }
`

export default BusinessFifth