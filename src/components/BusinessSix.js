import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './Business.css';
import styled from "styled-components"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../components/ContactForm'

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

const BusinessSix = ({ }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const { featuresThird } = useStaticQuery(query)
    return (
        <Wrapper>
            <section data-aos="fade-right">
                <div className="section-third">
                    <div className="section-width">
                        <div className="hero-info-2">
                            <h2 className="h2-heading">Marketing Automation</h2>
                            <p className="third-para">Take your business strategy to the next level and automatize your marketing tasks to save time for product development. Tivo can provide results in less than 2 weeks</p>
                        </div>
                        <section id="contactUs" className="main special">
                            <div className="major">
                                <ContactForm></ContactForm>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 85vw;
max-width: var(--max-width);
margin: 0 auto;
padding-bottom: 6rem;
button {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #102a42;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 15px;
    padding: 12px 16px;
    margin-top: 1rem;
}
input#fromEmail {
    border: solid 2px #102a42;
    padding: 10px;
}
input#subject {
    border: solid 2px #102a42;
    padding: 10px;
}
input#website {
    border: solid 2px #102a42;
    padding: 10px;
}
textarea#body {
    border: solid 2px #102a42;
}
form {
    margin: 0 auto;
}
label {
    letter-spacing: var(--spacing);
    color: hsl(209deg 61% 16%);
    line-height: 1.8;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    text-transform: none;
    border-radius: var(--radius);
    padding-top: 2rem;
}
.buttons-header {
                        box - sizing: border-box;
    margin: 0;
    min-width: 0;
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
    background-color: #102a42;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 15px;
    padding: 12px 16px;
    margin-right: 24px;
  }
@media screen and (min-width: 768px) and (max-width: 1023px) {
                        padding - bottom: 0rem;
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
                        padding - top: 2rem;
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
    background-color: #102a42;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 11px;
    padding: 12px 16px;
  }
  }


  @media screen and (max-width: 767px) {
    .section - width {
                        width: 85vw;
        max-width: var(--max-width);
        margin: 0 auto;
    }
    p.third-para {
                        width: 100%;
    }
    .third-text-box {
                        padding - top: 2rem;
    }
    h2.h2-heading {
                        font - size: 1.5rem;
    }
    .section-third {
                        padding - bottom: 12rem;
    }
    .button-first {
                        border: 2px solid;
        display: inline-block;
        border-radius: 8px;
        letter-spacing: 0.02em;
        cursor: pointer;
        font-weight: 500;
        line-height: 1;
        background-color: #102a42;
        box-shadow: 0 3px 8px rgba(0,0,0,0.09);
        border-color: transparent;
        color: #FFFFFF;
        font-size: 11px;
        padding: 12px 16px;
        margin: 0 auto;
      }
    }
`

export default BusinessSix