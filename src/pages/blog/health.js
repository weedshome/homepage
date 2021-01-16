import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import HealthBanner from "../../components/HealthBanner"


const Health = ({ data }) => {
  const {
    allContentfulHealth: { nodes: products },
  } = data

  return (
    <Wrapper>
      <div className="health-background">
        <Layout>
          <section className="posts">
            <div className="posts-center-grid">
              <div className="product-grid-strains">
                {products.map(product => {
                  return (
                    <article key={product.id}>
                      <Link className="link" to={`/health/${product.slug}`}>
                        <div className="d">
                          <figure className="post-card-figure">
                            <Image fluid={product.image.fluid} alt={product.title}></Image>
                            <span class="post-card-badge">{product.category}</span>
                          </figure>
                          <div className="info">
                            <h3 className="title">{product.title}</h3>
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
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
.health-background {
  background: #f1f5fe;
}
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
    background-color: #3d796d !important;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
    border-radius: 4px;
    height: fit-content;
}

  .info {
    text-align: left;
    padding-bottom: 0.5rem !important;
    border: none !important;
    align-self: center;
    padding: 10px;
  }
  .posts-title-products {
    text-transform: uppercase;
    color: black;
    margin-bottom: 1rem;
    font-weight: 500;
    letter-spacing: var(--spacing);
    font-size: 18px !important;
  }
  .img {
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
  .author-text {
    margin-bottom: 0;
    margin-right: auto;
    margin-left: 0;
    font-weight: bold;
  }
  .author-text2 {
    margin-bottom: 0;
  }
  .title {
    line-height: 24px;
    font-weight: 500;
    text-transform: initial;
    font-size: 1rem !important;
    color: #102a42;
    margin-bottom: 0rem !important;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.8;
    font-size: 14px;
    text-transform: none;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
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

  .rating {
    margin-bottom: 0.5rem;
  }
  .product-rating {
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
    border: 2px solid transparent;
    cursor: pointer;
  }
  .product-grid-strains {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 1.5rem;
    height: fit-content;
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
    display: grid;
    grid-template-columns: 1fr;
    height: 330px;
    padding: 10px;
  }
  .article-info {
    align-items: center;
    display: flex;
  }
  .posts-center-grid {
    display: grid;
    grid-template-columns: 1fr 250px;
    column-gap: 2rem;
    padding-top: 5rem !important;
  }
.readmore {
  width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
p.readmore {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0;
  color: #3d796d;
}
.title-news {
    font-size: .9rem;
    color: #102a42;
}

.news-grid-section {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    max-width: var(--max-width);
    margin: 0 auto;
    column-gap: 1rem;
}

@media screen and (max-width: 768px) {
  .news-grid-section {
  grid-template-columns: 1fr !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
.news-grid-section2 {
    display: grid;
    grid-template-columns: 1fr !important;
    max-width: var(--max-width);
    margin: 0 auto;
    column-gap: 1rem; 
    padding-top: 6rem;
    width: 92vw;
}
}
.news-grid-section2 {
  display: grid;
  grid-template-columns: 775px 375px;
  max-width: var(--max-width);
  margin: 0 auto;
  column-gap: 1rem; 
  padding-top: 6rem;
}
@media screen and (max-width: 768px) {
    .news-grid-section2 {
        grid-template-columns: 1fr;
    }
    }
    @media screen and (max-width: 768px) {
        .product-grid-strains {
            grid-template-columns: 1fr;
        }
      }
      @media screen and (max-width: 768px) {
      .posts-center-grid {
        grid-template-columns: 1fr;
      }
      }
      @media screen and (max-width: 768px) {
      .d {   
      grid-template-columns: 1fr;
      width: 100%;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      .product-grid-strains {
        grid-template-columns: 1fr 1fr !important;
    }
    .posts-center-grid {
      grid-template-columns: 1fr !important;
  }
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
          fluid {
          ...GatsbyContentfulFluid
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