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
    allContentfulGrowing(filter: {}, limit: 4) {
      nodes {
        id
        price
        title
        slug
        date
        author
        image {
        fixed(width: 280, height: 130) {
          ...GatsbyContentfulFixed
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
const TrendingThree = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  const data = useStaticQuery(query)
  const { allContentfulGrowing: { nodes: growing }, } = data
  return (
    <section className="posts" data-aos="fade-left">
      <div className="more-links">
        <h2 className="news-title">Latest from Growing</h2>
        <Link className="link-more" to={`/growing/`}>View all <FaLongArrowAltRight /></Link>
      </div>
      <Wrapper>
        {growing.map(growing => {
          return (
            <article key={growing.id}>
              <Link className="link" to={`/growing/${growing.slug}`}>
                <div className="d">
                  <div className="grid">
                    <Image fixed={growing.image.fixed} alt={growing.title}></Image>
                    <div className="info">
                      <h3>{growing.title}</h3>
                      <p className="readmore">{growing.info.info}</p>
                      <div className="article-info">
                        <p className="author-text">{growing.author}</p>
                        <p className="author-text2"><MdUpdate />{growing.date}</p>
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
  h3 {
    font-weight: 600;
    text-transform: initial;
    font-family: poppins;
    line-height: 20px;
    font-size: 0.9rem;
    color: #102a42;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.8;
    font-size: 12px;
    font-family: poppins;
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
 }
 .article-info {
  align-items: center;
  display: flex;
 }
 .d {
    box-shadow: rgba(1, 1, 1, 0.05) 1px 1px 5px 0px;
    border-right: solid 4px #102a42 !important;
    background-color: #f3f7fd;
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
.grid {
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
  .grid {
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
export default TrendingThree
