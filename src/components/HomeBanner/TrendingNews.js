import React, { useEffect } from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdUpdate } from 'react-icons/md'
import { FaLongArrowAltRight } from 'react-icons/fa'


const query = graphql`
{
    allContentfulNews(filter: {}, limit: 4) {
      nodes {
        id
        title
        slug
        date
        author
        category
        image {
        fixed(width: 290, height: 130) {
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
const TrendingNews = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  const data = useStaticQuery(query)
  const { allContentfulNews: { nodes: products }, } = data
  return (
    <section className="posts" data-aos="fade-left">
      <div className="more-links">
        <h2 className="news-title">Latest from News</h2>
        <Link className="link-more" to={`/news/`}>View all <FaLongArrowAltRight /></Link>
      </div>
      <Wrapper>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Link className="link" to={`/news/${product.slug}`}>
                <div className="d">
                  <div className="grid-news">
                    <figure className="post-card-figure">
                      <Image fixed={product.image.fixed} alt={product.title}></Image>
                      <span class="post-card-badge">{product.category}</span>
                    </figure>
                    <div className="info">
                      <h3>{product.title}</h3>
                      <p className="readmore">{product.excerpt.excerpt}</p>
                      <div className="article-info">
                        <p className="author-text">{product.author}</p>
                        <p className="author-text2"><MdUpdate />{product.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )
        })}
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
gap: 20px;
grid-auto-flow: column;
max-width: var(--max-width);
display: grid;
grid-template-rows: 1fr 1fr;
column-gap: 20px;
@media screen and (max-width: 768px) {
      grid-auto-flow: row !important;
}
.post-card-figure {
  position: relative;
  display: block;
  width: 100%;
  height: 130px;
  margin: 0;
  background-color: #f6f7f8;
}

.post-card-badge {
  position: absolute;
    top: 16px;
    left: 12px;
    display: block;
    padding: 4px;
    text-transform: uppercase;
    text-align: center;
    font-size: .675rem !important;
    font-weight: 500 !important;
    white-space: nowrap;
    color: #ffffff;
    background-color: #6e9654;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
}
  h3 {
    font-weight: 600;
    text-transform: initial;
    font-family: 'Montserrat', sans-serif;
    line-height: 20px;
    font-size: 0.9rem;
    color: #102a42;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.8;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    text-transform: none;
  }
  .img {
    border-radius: 50%;
  }
 .info {
    text-align: left;
    padding-bottom: 0.5rem !important;
    border: none !important;
    padding: 10px;
    padding-bottom: 0px !important;
    background: #ffffff;
 }
 .article-info {
  align-items: center;
  display: flex;
 }
 .d {
    box-shadow: rgba(1, 1, 1, 0.05) 1px 1px 5px 0px;
    background-color: #ffffff;
}
.author-text {
  margin-bottom: 0.5rem !important;
  margin-right: auto;
  margin-left: 0;
  font-weight: bold;
}
.author-text2 {
  margin-bottom: 0.5rem !important;
  display: flex;
  align-items: center;
}
p.author-text2 svg {
    margin-right: 5px;
}
.readmore {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.5rem;
}
.grid-news {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.h2-heading-2 {
    width: 50%;
    text-align: left;
    padding-bottom: 0.5rem;
    color: #102a42;
}
.hero-info-2-two {
    padding-bottom: 20px;
    max-width: var(--max-width);
}
    
    @media screen and (max-width: 768px) {
    .grid-news {
      display: grid !important;
      grid-template-columns: 1fr !important;
    }
    }
    
    @media screen and (max-width: 768px) {
    .gatsby-image-wrapper {
      width: 100% !important;
    }
    }
`
export default TrendingNews
