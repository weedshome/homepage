import React, { useEffect } from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import { MdUpdate } from 'react-icons/md'
import { FaLongArrowAltRight } from 'react-icons/fa'
import ReactStars from "react-stars";


const query = graphql`
{
    allContentfulStrains(filter: {}, limit: 10) {
      nodes {
        id
        price
        title
        slug
        rating
        category
        image {
        fixed(width: 120, height: 120) {
          ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
const TrendingStrains = () => {
    const data = useStaticQuery(query)
    const { allContentfulStrains: { nodes: products }, } = data
    return (
        <section className="posts">
            <Wrapper>
                <div className="hero-info-3">
                    <h2 className="news-title">Browse Cannabis Strains</h2>
                    <Link className="link-more" to={`/news/`}>View all <FaLongArrowAltRight /></Link>
                </div>
                <div className="grid-trending-strains">
                    {products.map(product => {
                        return (
                            <article key={product.id}>
                                <Link className="link" to={`/news/${product.slug}`}>
                                    <div className="d">
                                        <div className="grid-news">
                                            <Image fixed={product.image.fixed} alt={product.title}></Image>
                                            <div className="info">
                                                <span class="post-card-badge">{product.category}</span>
                                                <h3>{product.title}</h3>
                                                <div className="rating-stars">
                                                    <ReactStars
                                                        count={5}
                                                        edit={false}
                                                        value={product.rating}
                                                        size={16}
                                                        color2={"#102a42"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        )
                    })}
                </div>
                <div className="buttons-header">
                    <button class="button-first">View all strains</button>
                </div>
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.div`
.hero-info-3 {
    align-items: center;
    display: flex;
    padding-top: 1rem;
}
.link-more {
    color: #6e9654;
    font-weight: 500 !important;
    letter-spacing: var(--spacing);
    font-size: 15px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    border: none;
    display: flex;
    align-items: center;
    background-color: white;
    padding-bottom: 4rem !important;
}
.news-title {
        color: #373a47;
    font-weight: 500 !important;
    letter-spacing: var(--spacing);
    font-size: 15px !important;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    border: none;
    display: flex;
    align-items: center;
    background-color: white;
    margin-right: auto;
    margin-left: 0;
}
.grid-trending-strains {
display: grid;
place-content: center;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-gap: 4rem;
}
.gatsby-image-wrapper {
    border-radius: 50%;
    display: block !important;
    margin: 0 auto !important;
    left: 40px;
    bottom: 40px;
}
h3 {
    font-weight: 600;
    text-transform: initial;
    font-family: 'Montserrat',sans-serif;
    line-height: 20px;
    font-size: 0.9rem;
    color: #102a42;
    margin-bottom: 0;
}
h2 {
    padding-bottom: 3rem !important;
}
.info {
    border-bottom: none;
    margin-bottom: 0;
    margin-top: -40px !important;
}
.d {
  background: #f1f5fe;
  padding: 10px;
}
.buttons-header {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: flex;
  }
.button-first {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #102a42;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 15px;
    padding: 12px 16px;
  }
  .buttons-header {
    margin: 0 auto;
    justify-content: center;
    padding-top: 3rem;
}
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
    background-color: #6e9654;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
    border-radius: 4px;
    font-family: 'Montserrat',sans-serif;
    margin-bottom: .5rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .grid-trending-strains {
        display: grid;
        place-content: center;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 3rem;
        }
  }
  @media screen and (max-width: 767px)  {
    .grid-trending-strains {
        display: grid;
        place-content: center;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        }
  }
`
export default TrendingStrains
