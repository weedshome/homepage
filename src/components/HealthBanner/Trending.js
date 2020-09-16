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
  h3 {
    font-size: 0.9rem !important;
    font-weight: 400;
    margin-bottom: 0.5rem;
    text-transform: initial;
    font-family: optima;
    line-height: 24px;
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
 }
 .article-info {
  align-items: center;
  display: flex;
 }
 .d {
    display: block !important;
    border-right: 0px !important;
    border: none !important;
}
.author-text {
  margin-right: auto;
  margin-left: 0;
}
`
export default Trending
