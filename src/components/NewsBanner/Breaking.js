import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
const query = graphql`
{
    allContentfulNews(filter: {tags: {eq: "Breaking"}, node_locale: {eq: "en-US"}}, limit: 1) {
      nodes {
        id
        title
        slug
        date
        author
        category
        image {
          fixed(width: 390, height: 214) {
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
const Breaking = () => {
  const data = useStaticQuery(query)
  const { allContentfulNews: { nodes: products }, } = data
  return (
    <Wrapper>
      <h3 className="posts-title-products">Breaking News</h3>
      <div className="world-news">
        {products.map(product => {
          return (
            <article key={product.id}>
              <Link className="link" to={`/news/${product.slug}`}>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
.post-card-figure {
  position: relative;
  display: grid;
  width: 100%;
  height: auto;
  margin: 0;
  background-color: #f6f7f8;
}

.post-card-badge {
  position: absolute;
    bottom: 16px;
    right: 12px;
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
.world-news {
max-width: var(--max-width);
margin: 0 auto;
margin-top: 1rem;
margin-bottom: 1rem;
display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    -webkit-column-gap: 1rem;
    column-gap: 1rem;
    text-align: center;
}
  h3 {
    font-weight: 400 !important;
    text-transform: initial;
    font-family: optima;
    font-size: 1.3rem !important;
    color: #102a42;
  }
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
 .info {
    text-align: left;
    padding-bottom: 0.5rem !important;
    border-bottom: solid 2px !important;
 }
 .article-info {
  align-items: center;
  display: flex;
 }
 .d {
    border-right: 0px !important;
    display: grid;
    grid-template-columns: 1fr 1fr !important;
}
.author-text {
  margin-right: auto;
  margin-left: 0;
}
.posts-title-products {
    color: #102a42;
    font-weight: 500 !important;
    letter-spacing: var(--spacing);
    font-size: 18px !important;
    font-family: optima;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }

    @media screen and (max-width: 768px) {
    h3.posts-title-products {
        margin-left: 0 !important;
    }
  }
  @media screen and (max-width: 768px) {
    .d {
        grid-template-columns: 1fr !important;
    }

`
export default Breaking
