import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import Title from './Title'

const query = graphql`
{
    allContentfulGrowing(filter: {}, limit: 3) {
      nodes {
        id
        price
        title
        slug
        date
        author
        image {
          fluid {
          ...GatsbyContentfulFluid
          }
        }
        rating
        info {
          info
        }
      }
    }
  }
`
const Trending = () => {
  const data = useStaticQuery(query)
  const { allContentfulGrowing: { nodes: products }, } = data
  return (
    <Wrapper>
      <Title title="Trending Growing" />
      {products.map(product => {
        return (
          <article key={product.id}>
            <Link className="link" to={`/growing/${product.slug}`}>
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
    border-bottom: solid 2px !important;
 }
 .article-info {
  align-items: center;
  display: flex;
 }
 .d {
    display: block !important;
    border-right: 0px !important;
}
.author-text {
  margin-bottom: 0.5rem !important;
  margin-right: auto;
  margin-left: 0;
}
.author-text2 {
  margin-bottom: 0.5rem !important;
}
`
export default Trending
