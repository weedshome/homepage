import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import './Business.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components"

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
    <Wrapper>
      <section data-aos="fade-right">
        <div className="home-width">
          <div class="grid-container-business">
            <div class="k-1">
              <div class="k-title">
                <h2 className="business-title">Learn more about the plant</h2>
              </div>
              <div class="k-description">
                <p className="business-text">Use Weed's Home to automate your marketing actions in order to reach a much larger audience in the cannabis.</p>
                <div className="buttons-header">
                  <button class="button-first">Request a demo</button>
                  <button class="button-second">Start a free trial</button>
                </div>
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
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`

@media screen and (min-width: 1024px) {
.grid-container-business {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    grid-template-areas: "k-1 k-2";
    place-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
  .k-1 {
    padding-bottom: 3.5rem;
   }
   .business-title {
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 1rem;
    color: #102a42;
  }
  .business-hero-image {
    width: 630px;
  }

  .business-image-container {
    margin-top: 1rem;
    margin-left: 1.5rem;
  }
  .buttons-header {
    box-sizing: border-box;
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
  .button-second {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background: #FFFFFF;
    border-color: #102a42;
    color: #102a42;
    font-size: 15px;
    padding: 12px 16px;
    margin-right: 24px;
    background-color: transparent;
  }
  p.business-text {
    margin: 0 auto;
    padding: 5px;
    display: block;
    letter-spacing: var(--spacing);
    color: hsl(209deg 61% 16%);
    line-height: 1.8;
    font-size: 12px !important;
    font-family: 'Montserrat', sans-serif;
    text-transform: none;
    border-radius: var(--radius);
  }
}


@media screen and (min-width: 768px) and (max-width: 1023px) {
  .grid-container-business {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    grid-template-areas: "k-1 k-2";
    place-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    padding-top: 6rem;
    padding-bottom: 3rem;
    width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .k-1 {
    padding-bottom: 20px;
}
.business-title {
    font-size: 1.5rem;
    line-height: 2.4rem;
    margin-bottom: 0.5rem;
    color: #102a42;
  }
   p.business-text {
    margin: 0 auto;
    padding: 5px;
    display: block;
    letter-spacing: var(--spacing);
    color: hsl(209deg 61% 16%);
    line-height: 1.8;
    font-size: 12px !important;
    font-family: 'Montserrat', sans-serif;
    text-transform: none;
    border-radius: var(--radius);
  }
  .business-hero-image {
    width: 300px;
  }

  .business-image-container {
    margin-top: 1rem;
    margin-left: 1.5rem;
  }
  .buttons-header {
    box-sizing: border-box;
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
    font-size: 13px;
    padding: 12px 16px;
    margin-right: 24px;
  }
  .button-second {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background: #FFFFFF;
    border-color: #102a42;
    color: #102a42;
    font-size: 13px;
    padding: 12px 16px;
    margin-right: 24px;
    background-color: transparent;
  }
}


@media screen and (max-width: 767px) {
    .grid-container-business {
      display: grid !important;
      grid-template-columns:  1fr !important;
      grid-template-rows: 1fr !important;
      gap: 1px 1px !important;
      grid-template-areas: "k-1" !important;
      padding: 2rem;
      padding-top: 6rem;
      padding-bottom: 3rem;
    }
    .business-hero-image {
      width: 300px;
      margin: 0 auto
    }
    .business-title {
      font-size: 1.2rem;
      line-height: 2.4rem;
      margin-bottom: 0.5rem;
      color: #102a42;
      text-align: center;
    }
    p.business-text {
      margin: 0 auto;
      padding: 5px;
      display: block;
      letter-spacing: var(--spacing);
      color: hsl(209deg 61% 16%);
      line-height: 1.8;
      font-size: 12px !important;
      font-family: 'Montserrat', sans-serif;
      text-transform: none;
      border-radius: var(--radius);
      text-align: center;
    }
    .buttons-header {
      box-sizing: border-box;
      justify-content: center;
      min-width: 0;
      margin-top: 32px;
      margin-bottom: 32px;
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
      font-size: 11px;
      padding: 12px 16px;
      margin-right: 24px;
    }
    .button-second {
      border: 2px solid;
      display: inline-block;
      border-radius: 8px;
      letter-spacing: 0.02em;
      cursor: pointer;
      font-weight: 500;
      line-height: 1;
      background: #FFFFFF;
      border-color: #102a42;
      color: #102a42;
      font-size: 11px;
      padding: 12px 16px;
      margin-right: 24px;
      background-color: transparent;
    }
  }
`


export default HeroHeaderFirst