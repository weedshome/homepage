import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
const query = graphql`
{
    allContentfulNews(filter: {tags: {eq: "Canada"}, node_locale: {eq: "en-US"}}, limit: 3) {
      nodes {
        id
        title
        slug
        date
        author
        category
        image {
          fixed(width: 100, height: 130) {
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
const TrendingCanada = () => {
  const data = useStaticQuery(query)
  const { allContentfulNews: { nodes: products }, } = data
  return (
    <Wrapper>
      <h3 className="posts-title-products">Canada</h3>
      <div className="world-news">
        {products.map(product => {
          return (
            <article key={product.id}>
              <Link className="link" to={`/news/${product.slug}`}>
                <div className="d">
                  <Image fixed={product.image.fixed} alt={product.title}></Image>
                  <div className="info">
                    <h3>{product.title}</h3>
                    <span class="post-card-badge">{product.category}</span>
                    <p className="readmore">{product.excerpt.excerpt}</p>
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
.post-card-badge {
  width: fit-content;
    bottom: 16px;
    right: 12px;
    display: block;
    padding-top: 4px;
    text-transform: uppercase;
    text-align: center;
    font-size: .575rem !important;
    font-weight: 500 !important;
    white-space: nowrap;
    color: #ffffff;
    background-color: #6e9654;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
}
.world-news {
max-width: var(--max-width);
margin: 0 auto;
margin-top: 1rem;
margin-bottom: 3rem;
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
    font-family: 'Montserrat', sans-serif;
    line-height: 16px !important;
    font-size: 0.8rem !important;
    color: #102a42;
  }
  p {
    color: var(--clr-grey-5);
    margin-bottom: 0px !important;
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
    grid-template-columns: 100px 1fr !important;
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
    font-family: 'Montserrat', sans-serif;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    .world-news {
      grid-template-columns: 1fr;
      padding: 0px;
    }
}
@media screen and (max-width: 768px) {
  .d {
  grid-template-columns: 80px 1fr !important;
}
@media screen and (max-width: 768px) {
  .gatsby-image-wrapper {
      width: 80px !important;
  }
}
@media screen and (max-width: 768px) {
h3.posts-title-products {
  margin: unset;
  padding-left: 10px;
}
}
@media screen and (max-width: 768px) {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 85vw;
  }
`
export default TrendingCanada
