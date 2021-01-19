import React, { useEffect } from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import { FaLongArrowAltRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';


const query = graphql`
{
    allContentfulHealth(filter: {node_locale: {eq: "en-US"}}, limit: 4) {
      nodes {
        id
        title
        slug
        category
        image {
        fluid {
          ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
const TrendingBlog = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const data = useStaticQuery(query)
    const { allContentfulHealth: { nodes: products }, } = data
    return (
        <Wrapper>
            <div className="trending-blog-background">
                <section className="posts" data-aos="fade-left">
                    <div className="hero-info-3">
                        <h2 className="news-title">Latest Blog Posts</h2>
                        <Link className="link-more" to={`/blog/`}>View all <FaLongArrowAltRight /></Link>
                    </div>
                    <div className="grid-trending-strains">
                        {products.map(product => {
                            return (
                                <article key={product.id}>
                                    <Link className="link" to={`/health/${product.slug}`}>
                                        <div className="d">
                                            <div className="grid-news">
                                                <Image fluid={product.image.fluid} alt={product.title}></Image>
                                                <div className="info">
                                                    <span class="post-card-badge">{product.category}</span>
                                                    <h3>{product.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.trending-blog-background {
    background: #f1f5fe;
}
.gatsby-image-wrapper {
    height: 150px;
}
.hero-info-3 {
    align-items: center;
    display: flex;
    padding-top: 3rem;
}
.link-more {
    color: #3d796d;
    font-weight: 500 !important;
    letter-spacing: var(--spacing);
    font-size: 15px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    background-color: #373a4700;
    padding-bottom: 4rem !important;
}
.news-title {
        color: #373a47;
    font-weight: 500 !important;
    letter-spacing: var(--spacing);
    font-size: 15px !important;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    background-color: #373a4700;
    margin-right: auto;
    margin-left: 0;
}
.grid-trending-strains {
display: grid;
place-content: center;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 2rem;
}
h3 {
    font-weight: 500;
    text-transform: initial;
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
    height: 90px;
}
.d {
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0,0,0,.16);
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
    background-color: #3f7e72 !important;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
    border-radius: 4px;
    margin-bottom: .5rem;
    margin-top: .5rem;
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
        grid-template-columns: 1fr;
        grid-gap: 2rem;
        }
  }
`
export default TrendingBlog
