import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import ProductBanner from "../components/ProductBanner"
import { IoMdArrowRoundForward } from 'react-icons/io'
import ReactStars from "react-stars";
import HealthFront from "../components/HealthFront"
import HealthBanner from "../components/HealthBanner"


const Health = ({ data }) => {
  const {
    allContentfulHealth: { nodes: products },
  } = data

  return (
    <Wrapper>
      <Layout>
        <section className="posts">
          <h3 class="posts-title-products">recently published</h3>
          <div className="posts-center-grid">
            <div className="product-grid-strains">
              {products.map(product => {
                return (
                  <article key={product.id}>
                    <Link className="link" to={`/health/${product.slug}`}>
                      <div className="d">
                        <figure className="post-card-figure">
                          <Image fixed={product.image.fixed} alt={product.title}></Image>
                          <span class="post-card-badge">{product.category}</span>
                        </figure>
                        <div className="info">
                          <h3>{product.title}</h3>
                          <p className="readmore">{product.excerpt.excerpt}</p>
                          <div className="article-info">
                            <p className="author-text">{product.author}</p>
                            <p className="author-text2">{product.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                )
              })}
            </div>
            <article>
              <HealthBanner />
            </article>
          </div>
        </section>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: 1rem;
  .post-card-figure {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    background-color: #f6f7f8;
    display: grid;
  }
  
  .post-card-badge {
    position: absolute;
      top: 16px;
      left: 12px;
      display: block;
      padding: 4px;
      text-transform: uppercase;
      text-align: center;
      font-size: .575rem !important;
      font-weight: 500 !important;
      white-space: nowrap;
      color: #ffffff;
      background-color: #6e9654;
      box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
      border-radius: 4px;
      font-family: optima;
  }
  article {
    margin-bottom: 1rem;
}
  .info {
    text-align: left;
    padding-bottom: 0.5rem !important;
    border: none !important;
    padding: 10px;
    background: #ffffff !important;
  }
  .posts-title-products {
    text-transform: uppercase;
    color: black;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .img {
    height: 10rem;
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
  .author-text {
    margin-bottom: 0;
    margin-right: auto;
    margin-left: 0;
    font-weight: bold;
  }
  .author-text2 {
    margin-bottom: 0;
  }
  h3 {
    font-weight: 400;
    margin-bottom: 0.5rem;
    text-transform: initial;
    font-family: optima;
    line-height: 24px;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: 1.1rem;
    color: #102a42;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.8;
    font-size: 12px;
    font-family: optima;
    text-transform: none;
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
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
    box-shadow: rgba(1,1,1,0.05) 1px 1px 5px 0px;
    background-color: #ffffff;
  }
  .article-info {
    align-items: center;
    display: flex;
  }
  .posts-center-grid {
    display: grid;
    grid-template-columns: 1fr 250px;
    column-gap: 1rem;
    padding-top: 5rem !important;
  }
.readmore {
  width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
`

export const query = graphql`
  {
    allContentfulHealth(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        id
        title
        slug
        date
        author
        category
        image {
          fixed(width: 300, height: 170) {
          ...GatsbyContentfulFixed
          }
        }
        excerpt {
          excerpt
        }
      }
    }
  }
`

export default Health