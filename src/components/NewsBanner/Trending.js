import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import Title from './Title'
const query = graphql`
{
    allContentfulNews(filter: {}, limit: 2) {
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
  const { allContentfulNews: { nodes: products }, } = data
  return (
    <Wrapper>
      <Title title="Latest News" />
      {products.map(product => {
        return (
          <article key={product.id}>
            <Link className="link" to={`/news/${product.slug}`}>
              <div className="d">
                <figure className="post-card-figure">
                  <Image fluid={product.image.fluid} alt={product.title}></Image>
                  <span class="post-card-badge">{product.category}</span>
                </figure>
                <div className="info">
                  <h3 className="trending-sidebar-title">{product.title}</h3>
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
    background-color: #6e9654;
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
  margin-right: auto;
  margin-left: 0;
}
`
export default Trending
