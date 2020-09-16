import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import ProductBanner from "../components/ProductBanner"
import ShopFront from '../components/ShopFront'
import { GoSettings } from 'react-icons/go'
import ReactStars from "react-stars";
import SearchComp from '../components/search/searchComp'
import 'instantsearch.css/themes/algolia.css';
import StrainSlider from "../components/StrainSlider"

const Strains = ({ data }) => {
  const {
    allContentfulStrains: { nodes: strains },
  } = data

  return (
    <Wrapper>
      <Layout>
        <ShopFront />
        <section className="posts">
          <h3 className="posts-title-products"><GoSettings />Browse Seeds</h3>
          <p className="posts-text-strains">Auto-flowering marijuana seeds | Autoflowering cannabis plants start flowering on their own within 2-4 weeks of germination. Classic varieties, both Indica and Sativa dominant, are photoperiodic plants. Therefore, they are traditionally exposed to 12 hours of light in order to induce flowering indoors but might not have enough time to finish outdoors before the days get shorter – unlike autoflowering strains.They are Indica or Sativa plants crossbred with a Ruderalis representative, making them the perfect choice for areas where summer.</p>
          <article>
            <SearchComp />
          </article>
        </section>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: 1rem;
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
  h3 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: initial;
    font-family: optima;
    font-size: 0.8rem !important;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.8;
  }
  .link {
    padding-bottom: 0.1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: optima;
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
  footer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-primary-5);
        margin-right: 0.5rem;
      }
    }
  }
  .rating {
    margin-bottom: 0.5rem;
  }
  .product-rating {
    font-family: optima;
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
    font-family: teko;
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
    font-family: teko;
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
    font-family: teko;
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
  @media (min-width: 800px) {
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
    padding: 20px;
    padding-top: 10px;
    font-family: optima;
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
      }
    }
  }
`

export default Strains