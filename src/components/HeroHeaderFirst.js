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
    padding-bottom: 20px;
}
.business-title {
    font-size: 3.3rem;
    line-height: 3.4rem;
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
  .business-text {
    font-size: 13px;
  }
  .business-hero-image {
    width: 300px;
  }

  .business-image-container {
    margin-top: 1rem;
    margin-left: 1.5rem;
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
    .business-text {
      font-size: 13px;
      text-align: center;
    }
  }
`


export default HeroHeaderFirst