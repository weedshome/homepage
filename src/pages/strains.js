import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import SearchComp from '../components/search/searchComp'
import 'instantsearch.css/themes/algolia.css';
import SEO from '../components/SEO'


const Strains = ({ data }) => {

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cannabis Strains",
    "description": "Browse through our cannabis strain database and find the perfect bud for yourself.",
    "publisher": {
      "@type": "Weed's Home",
      "name": "Weed's Home"
    },
  }

  return (
    <Wrapper>
      <Layout>
        <SEO title="Strains" schemaMarkup={schema} />
        <div className="strains-background">
          <section className="posts">
            <article>
              <SearchComp />
            </article>
          </section>
        </div>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.strains-background {
  background: #f1f5fe;
}
h3.posts-title-products {
  padding-top: 2rem;
}
  article {
    margin-bottom: 1rem;
}
  .info {
    text-align: center;
    border-bottom: solid hsl(95, 28%, 46%);
  }
  .posts-title-products {
    text-transform: uppercase;
    color: #102a42;
    padding-left: 20px;
    font-size: 1.2rem !important;
    align-items: center;
    display: flex;
  }
  .posts-title-products svg {
    color: #102a42;
  }
  .img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 17rem;
  }
  .category {
    display: inline-block;
    background: hsl(95, 28%, 46%);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: white;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
  li.ais-Hits-item p {
    line-height: 1.8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 540px;
    font-size: .8rem;
  }
  .link {
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    letter-spacing: var(--spacing);
    color: rgb(37,41,53);
    font-weight: 400;
    text-transform: capitalize;
    font-size: 0.7rem !important;
    }
  }
  .link svg {
    font-size: 14px;
    margin-left: 3px;
}
  .link:hover {
    border-color: #0a0c10;
    color: #0a0c10;
  }
  .rating {
    margin-bottom: 0.5rem;
  }
  .product-rating {
    letter-spacing: var(--spacing);
    padding-right: 23px;
    font-size: 13px;
    margin-right: auto;
    padding-top: 5px;
  }
  .rating-stars {
      margin-right: 10px;
  }
  .card-styles {
    text-transform: uppercase;
    color: black;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 18px;
    border: 2px solid transparent;
    cursor: pointer;
  }
  .product-grid-strains {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
  }
  .info-text {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .span-float {
    float: left;
    font-size: 18px;
    letter-spacing: var(--spacing);
    text-align: center;
    background: #6f9654;
    color: white;
    padding-top: 4px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .span-float2 {
    float: right;
    text-align: center;
    font-size: 18px;
    letter-spacing: var(--spacing);
    background: #000000;
    color: white;
    padding-top: 4px;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (max-width: 800px) {
    .posts-center {
      padding-top: 3rem;
  }

    li.ais-Hits-item p {
      white-space: unset;
      overflow: unset;
      text-overflow: unset;
      width: 100%;
      }
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      .info {
        text-align: left;
        padding: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .img {
        max-height: 10rem;
        background: #6f9654;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
  .d {
    box-shadow: 0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 2.5px 2px rgba(0,0,0,0.06), 0 1.3px 3.9px rgba(0,0,0,0.072), 0 1.8px 3.4px rgba(0,0,0,0.086), 0 5px 5px rgba(0,0,0,0.12);
    border-radius: var(--radius);
    border: 1px solid #6f9654;
  }
  .posts-text-strains {
    color: hsl(209deg 61% 16%);
    font-size: 12px;
    letter-spacing: var(--spacing);
  }
  .info-strains {
    box-shadow: 0 4px 8px rgba(0,0,0,.16);
    padding: 20px;
    background-color: #ebf3f5;
    margin-bottom: 1rem;
    border: solid 1px #3d796d;
  }
  section.posts {
    padding-top: 3rem !important;
}
`

export const query = graphql`
  {
    allContentfulStrains(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        id
        price
        title
        slug
        rating
        category
        info {
          info
        }
      }
    }
  }
`

export default Strains
