import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
const query = graphql`
{
    allContentfulNews(filter: {tags: {eq: "Europe"}, node_locale: {eq: "en-US"}}, limit: 3) {
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
const TrendingEurope = () => {
  const data = useStaticQuery(query)
  const { allContentfulNews: { nodes: products }, } = data
  return (
    <Wrapper>
      <h3 className="posts-title-products">Europe</h3>
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
    padding: 4px;
    text-transform: uppercase;
    text-align: center;
    font-size: .575rem !important;
    font-weight: 500 !important;
    white-space: nowrap;
    color: #ffffff;
    background-color: #102a42 !important;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
    border-radius: 4px;
}
.world-news {
max-width: var(--max-width);
margin: 0 auto;
margin-top: 1rem;
margin-bottom: 1rem;
display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    column-gap: 1rem;
    text-align: center;
}
  h3 {
    font-weight: 400 !important;
    text-transform: initial;
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
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    display: none !important;
`
export default TrendingEurope
