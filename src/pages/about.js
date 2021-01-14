import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from 'styled-components'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from '../components/SEO'

const About = ({
  data: {
    page: {
      title,
      body,
    },
  },
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About",
    "about": "Weed's Home creates data sets for cannabis strains, seeds, and growing gear.",
    "description": "The about page of Weed's Home.",
    "publisher": {
      "@type": "Weed's Home",
      "name": "Weed's Home"
    },
  }
  return (
    <Layout>
      <SEO title="About" schemaMarkup={schema} />
      <Wrapper>
        <div className="search-text" style={{ textAlign: "left" }}>
        </div>
        <section className="posts">
          <article className="height-page">
            <div className="post-info">
              <h2 className="page-title">{title}</h2>
              <div className="underline"></div>
            </div>
            {documentToReactComponents(body.json)}
          </article>
        </section>
      </Wrapper>
    </Layout >
  )
}

export const query = graphql`
query GetSinglePage {
    page: contentfulPage(title: {eq: "About Us"}) {
      title
      body {
        json
      }
    }
  }
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  padding-top: 15px;
  .page-title {
      font-weight: 700 !important;
      font-size: 35px !important;
  }
  @media screen and (max-width: 767px) {
    padding-top: 4rem;
    .height-page {
        width: auto !important;
        padding-top: 0px !important;
      }
  }
  .height-page {
    max-width: 1050px;
    padding: 25px;
    padding-top: 3rem;
    width: 700px;
    margin: 0 auto;
  }
  .post-info {
    text-align: center;
    padding-bottom: 2rem;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
`

export default About



