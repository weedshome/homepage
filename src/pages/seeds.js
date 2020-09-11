import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import ProductBanner from "../components/ProductBanner"
import ShopFront from '../components/ShopFront'
import { IoMdArrowRoundForward } from 'react-icons/io'


const Seeds = ({ data }) => {
  const {
    allContentfulSeeds: { nodes: products },
  } = data

  return (
    <Wrapper>
      <Layout>
        <ShopFront />
        <section className="posts">
          <h3 class="posts-title-products">recently published</h3>
          <div className="posts-center-grid">
            <div className="product-grid-strains">
              {products.map(product => {
                return (
                  <article key={product.id}>
                    <div className="d">
                      <Image fluid={product.image.fluid} alt={product.title}></Image>
                      <div className="info">
                        <h3>{product.title}</h3>
                        <div class="underline"></div>
                        <Link className="link" to={`/products/${product.slug}`}>more details <IoMdArrowRoundForward /></Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
            <article>
              <ProductBanner />
            </article>
          </div>
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
    color: black;
    margin-bottom: 1rem;
    font-size: 1.5rem;
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
    font-weight: 400;
    margin-bottom: 0.5rem;
    text-transform: initial;
    font-family: teko;
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
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-family: teko;
    color: var(--clr-primary-5);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
    margin-left: 0.25rem;
    margin-bottom: 0.35rem;
    font-size: 1.1rem;
    }
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
    font-family: teko;
    letter-spacing: var(--spacing);
    padding-right: 30px;
    font-size: 18px;
    margin-right: auto;
    padding-top: 2.3px;
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
    grid-template-rows: 1fr 1fr;
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
  .posts-center-grid {
    display: grid;
    grid-template-columns: 1fr 250px;
    column-gap: 1rem;
  }
`

export const query = graphql`
  {
    allContentfulSeeds(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        id
        price
        title
        slug
        info {
          info
        }
        image {
          fluid {
          ...GatsbyContentfulFluid
          }
        }
        rating
      }
    }
  }
`

export default Seeds