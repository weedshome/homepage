import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
const query = graphql`
{
    allContentfulNews(filter: {tags: {eq: "Europe"}, node_locale: {eq: "en-US"}}, limit: 2) {
      nodes {
        id
        title
        slug
        date
        author
        excerpt {
          excerpt
        }
      }
    }
  }
`
const BreakingSide = () => {
    const data = useStaticQuery(query)
    const { allContentfulNews: { nodes: products }, } = data
    return (
        <Wrapper>
            <h3 className="posts-title-products">Latest</h3>
            <div className="world-news">
                {products.map(product => {
                    return (
                        <article key={product.id}>
                            <Link className="link" to={`/news/${product.slug}`}>
                                <div className="d">
                                    <div className="info">
                                        <h3>{product.title}</h3>
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
@media screen and (max-width: 768px) {
    .world-news {
        grid-template-columns: 1fr !important;
        padding: 10px;
    }
  }
  h3 {
    font-weight: 400 !important;
    text-transform: initial;
    font-family: poppins;
    line-height: 16px !important;
    font-size: 0.8rem !important;
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
    grid-template-columns: 1fr !important;
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
    font-family: Poppins;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    .posts-title-products {
        margin: unset;
        padding-left: 10px;
    }
  }
  p.readmore {
    margin: 2px;
    width: 330px;
}
`
export default BreakingSide
