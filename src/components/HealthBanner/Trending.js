import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import Title from './Title'
const query = graphql`
{
    allContentfulHealth(filter: {}, limit: 2) {
      nodes {
        id
        title
        slug
        date
        author
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
const Trending = () => {
  const data = useStaticQuery(query)
  const { allContentfulHealth: { nodes: products }, } = data
  return (
    <Wrapper>
      <Title title="Latest from Health" />
      {products.map(product => {
        return (
          <article key={product.id}>
            <Link className="link" to={`/health/${product.slug}`}>
              <div className="d">
                <Image fluid={product.image.fluid} alt={product.title}></Image>
                <div className="info">
                  <h3>{product.title}</h3>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  .trending-sidebar-title {
    font-size: 0.75rem !important;
    line-height: 16px;
    color: #102a42;
  }
  .post-card-figure {
    position: relative;
    display: block;
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
      background-color: #102a42 !important;
      box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
      border-radius: 4px;
      font-family: 'Montserrat', sans-serif;
  }
    text-align: center;
    h3 {
      font-size: 0.9rem !important;
      font-weight: 400;
      margin-bottom: 0.5rem;
      text-transform: initial;
      font-family: 'Montserrat', sans-serif;
      line-height: 24px;
    }
    p {
      color: var(--clr-grey-5);
      line-height: 1.8;
      font-size: 12px;
      font-family: 'Montserrat',sans-serif;
      text-transform: none;
    }
    .img {
      border-radius: 50%;
    }
   .info {
      text-align: left;
      padding: 10px;
      padding-bottom: 0.5rem !important;
      border: none !important;
   }
   .article-info {
    align-items: center;
    display: flex;
   }
   .d {
      display: block !important;
      border-right: 0px !important;
      margin-bottom: 1rem;
      box-shadow: rgba(1,1,1,0.05) 1px 1px 5px 0px;
  }
  .author-text {
    margin-bottom: 0;
    margin-right: auto;
    margin-left: 0;
    font-weight: bold;
  }
  .author-text2 {
    margin-bottom: 0;
    text-align: right;
  }
`
export default Trending
