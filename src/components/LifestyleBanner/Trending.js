import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import Title from './Title'
const query = graphql`
{
    allContentfulLifestyle(filter: {}, limit: 2) {
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
    const { allContentfulLifestyle: { nodes: products }, } = data
    return (
        <Wrapper>
            <Title title="Trending Lifestyle" />
            {products.map(product => {
                return (
                    <article key={product.id}>
                        <Link className="link" to={`/lifestyle/${product.slug}`}>
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
    font-family: poppins;
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
    padding-bottom: 1rem;
    display: block !important;
    border-right: 0px !important;
    border-bottom: 3px solid #6f9654;
}
.author-text {
  margin-right: auto;
  margin-left: 0;
}
`
export default Trending
