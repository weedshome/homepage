import React, { useEffect } from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdUpdate } from 'react-icons/md'


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
        fixed(width: 280, height: 170) {
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
const Trending = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const data = useStaticQuery(query)
    const { allContentfulGrowing: { nodes: products }, } = data
    return (
        <section className="posts" data-aos="fade-left">
            <Wrapper>
                {products.map(product => {
                    return (
                        <article key={product.id}>
                            <Link className="link" to={`/growing/${product.slug}`}>
                                <div className="d">
                                    <Image fixed={product.image.fixed} alt={product.title}></Image>
                                    <div className="info">
                                        <h3>{product.title}</h3>
                                        <p className="readmore">{product.info.info}</p>
                                        <div className="article-info">
                                            <p className="author-text">{product.author}</p>
                                            <p className="author-text2"><MdUpdate />{product.date}</p>
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
display: grid;
justify-content: center;
align-content: center;
gap: 20px;
grid-auto-flow: column;
max-width: var(--max-width);
margin: 0 auto;
margin-right: auto;
margin-left: auto;
  h3 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: initial;
    font-family: poppins;
    line-height: 24px;
    font-size: 0.9rem;
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
 }
 .article-info {
  align-items: center;
  display: flex;
 }
 .d {
    box-shadow: rgba(1, 1, 1, 0.05) 1px 1px 5px 0px;
    border-radius: 1rem;
    border-bottom: solid 4px !important;
    background-color: #f8f8f8;
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
.gatsby-image-wrapper {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}
.readmore {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
`
export default Trending
