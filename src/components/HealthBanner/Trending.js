import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"


const query = graphql`
{
    allContentfulHealth(filter: {}, limit: 2) {
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
const Trending = () => {
  const data = useStaticQuery(query)
  const { allContentfulHealth: { nodes: products }, } = data
  return (
    <Wrapper>
      {products.map(product => {
        return (
          <article key={product.id}>
            <Link className="link" to={`/health/${product.slug}`}>
              <div className="d">
                <figure className="post-card-figure">
                  <Image fluid={product.image.fluid} alt={product.title}></Image>
                  <span class="post-card-badge3">{product.category}</span>
                </figure>
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
  
  .post-card-badge3 {
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
      background-color: #3d796d !important;
      box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
      border-radius: 4px;
  }
    text-align: center;
    h3 {
      font-weight: 400;
    margin-bottom: 0.5rem;
    text-transform: initial;
    font-size: 0.75rem !important;
    line-height: 16px;
    color: #102a42;
    }
    p {
      color: hsl(168deg 33% 36%);
      line-height: 1.8;
      font-size: 12px;
      text-transform: none;
    }
 
   .info {
      text-align: left;
      padding: 10px;
      padding-bottom: 0rem !important;
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
      height: 100% !important;
      background: #ffffff;
      padding: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,.16);
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
