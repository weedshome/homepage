import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import { FaLongArrowAltRight } from "react-icons/fa"
import HeroBlog from "../../components/blog/HeroBlog"


const Blog = ({ data }) => {
  const {
    allContentfulLifestyle: { nodes: products },
    allContentfulHealth: { nodes: healths },
    allContentfulHowto: { nodes: howtos },
  } = data

  return (
    <Wrapper>
      <div className="blog-background">
        <Layout>
          <HeroBlog />
          <section className="posts">
           <div data-mantis-zone="captain-jack"></div>
            <div className="posts-center-grid">
              <div className="hero-info-3">
                <h2 className="news-title">Latest from Lifestyle</h2>
                <Link className="link-more" to={`/blog/lifestyle`}>View all <FaLongArrowAltRight /></Link>
              </div>
              <div className="product-grid-strains">
                {products.map(product => {
                  return (
                    <article key={product.id}>
                      <Link className="link" to={`/lifestyle/${product.slug}`}>
                        <div className="d">
                          <Image fluid={product.image.fluid} alt={product.title}></Image>
                          <div className="info">
                            <span class="post-card-badge">{product.category}</span>
                            <h3 className="title">{product.title}</h3>
                          </div>
                        </div>
                      </Link>
                    </article>
                  )
                })}
              </div>
              <div className="hero-info-3">
                <h2 className="news-title">Latest from Health</h2>
                <Link className="link-more" to={`/blog/health`}>View all <FaLongArrowAltRight /></Link>
              </div>
              <div className="product-grid-strains2">
                {healths.map(health => {
                  return (
                    <article key={health.id}>
                      <Link className="link" to={`/health/${health.slug}`}>
                        <div className="d">
                          <Image fluid={health.image.fluid} alt={health.title}></Image>
                          <div className="info">
                            <span class="post-card-badge">{health.category}</span>
                            <h3 className="title">{health.title}</h3>
                          </div>
                        </div>
                      </Link>
                    </article>
                  )
                })}
              </div>
              <div className="hero-info-3">
                <h2 className="news-title">Latest from How-to</h2>
                <Link className="link-more" to={`/blog/howto`}>View all <FaLongArrowAltRight /></Link>
              </div>
              <div className="product-grid-strains3">
                {howtos.map(howto => {
                  return (
                    <article key={howto.id}>
                      <Link className="link" to={`/howto/${howto.slug}`}>
                        <div className="d">
                          <Image fluid={howto.image.fluid} alt={howto.title}></Image>
                          <div className="info">
                            <span class="post-card-badge">{howto.category}</span>
                            <h3 className="title">{howto.title}</h3>
                          </div>
                        </div>
                      </Link>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
.blog-background {
  background: #f1f5fe;
}
.hero-info-3 {
  align-items: center;
  display: flex;
  padding-top: 3rem;
}
.gatsby-image-wrapper {
    height: 150px;
}

.post-card-badge {
  width: fit-content;
  position: relative;
  margin-bottom: 0.5rem;
    display: block;
    padding: 4px;
    text-transform: uppercase;
    text-align: center;
    font-size: .575rem !important;
    font-weight: 500 !important;
    white-space: nowrap;
    color: #ffffff;
    background-color: #3d796d;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
    border-radius: 4px;
    height: fit-content;
}

  .info {
    text-align: left;
    padding-bottom: 0.5rem !important;
    border: none !important;
    padding: 10px;
    align-self: center;
    height: 110px;
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
  .title {
    font-weight: 500;
    text-transform: initial;
    line-height: 20px;
    font-size: 0.9rem;
    color: #102a42;
    margin-bottom: 0;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 0.5rem;
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
    grid-template-columns: 50% 1fr 1fr;
    column-gap: 2rem;
  }
  .product-grid-strains2 {
    display: grid;
    grid-template-columns: 1fr 1fr 50%;
    column-gap: 2rem;
  }
  .product-grid-strains3 {
    display: grid;
    grid-template-columns: 50% 1fr 1fr;
    column-gap: 2rem;
  }
  .product-grid-strains4 {
    display: grid;
    grid-template-columns: 1fr 1fr 50%;
    column-gap: 2rem;
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
    box-shadow: 0 4px 8px rgba(0,0,0,.16);
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 1rem;
    width: 100%;
    padding: 10px;
  }
  .posts-center-grid {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1rem;
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

  .gatsby-image-wrapper {
  height: auto;
  width: auto;
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
  video.HeroHeaderBlog__VideoBg-kmfhAh.ijgFXm {
    display: none;
}
    .news-grid-section2 {
        grid-template-columns: 1fr;
    }
    video.HeroHeaderBlog__VideoBg-HSHuj.kcqOR {
      display: none;
    }
    }
    @media screen and (max-width: 768px) {
        .product-grid-strains {
            grid-template-columns: 1fr;
        }
        .product-grid-strains2 {
          grid-template-columns: 1fr;
      }
      .product-grid-strains3 {
        grid-template-columns: 1fr;
    }
    .product-grid-strains4 {
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
    .product-grid-strains2 {
      grid-template-columns: 1fr 1fr !important;
  }
  .product-grid-strains3 {
    grid-template-columns: 1fr 1fr !important;
}
.product-grid-strains4 {
  grid-template-columns: 1fr 1fr !important;
}
    .posts-center-grid {
      grid-template-columns: 1fr !important;
  }
    }

`

export const query = graphql`
  {
    allContentfulLifestyle(filter: {node_locale: {eq: "en-US"}}, limit: 3) {
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
      }
    }
    allContentfulHealth(filter: {node_locale: {eq: "en-US"}}, limit: 3) {
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
      }
    }
    allContentfulGrowing(filter: {node_locale: {eq: "en-US"}}, limit: 3) {
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
      }
    }
    allContentfulNews(filter: {node_locale: {eq: "en-US"}}, limit: 3) {
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
      }
    }
    allContentfulHowto(filter: {node_locale: {eq: "en-US"}}, limit: 3) {
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
      }
    }
  }
`

export default Blog
