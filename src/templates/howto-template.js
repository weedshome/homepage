import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from 'styled-components'
import { IoMdArrowRoundBack } from 'react-icons/io'
import "react-sweet-progress/lib/style.css";
import 'react-circular-progressbar/dist/styles.css';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { getFluidGatsbyImage } from '../components/getFluidGatsbyImage'
import Img from 'gatsby-image'

import Image from 'gatsby-image'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowtoBanner from "../components/HowtoBanner"


const HowtoTemplate = ({
  data: {
    howto: {
      title,
      id,
      date,
      category,
      excerpt: { excerpt },
      body,
      image: { fluid },
      author,
    },
  },
}) => {
  const options = {

    renderNode: {
      // eslint-disable-next-line react/display-name
      'embedded-asset-block': node => {
        const { file, title } = node.data.target.fields
        const image = {
          file: file['en-US'],
        }
        const fluidProps = getFluidGatsbyImage(image, { maxWidth: 720 })
        return <Img className="mb-4" fluid={fluidProps} alt={title['en-US']} />
      },
    },
  }
  return (
    <Layout>
      <div className="health-layout-background">
        <Wrapper>
          <div className="search-text" style={{ textAlign: "left" }}>
            <Link to="/howto" className="links"> back to all lifestyle <div className="search-icon"><IoMdArrowRoundBack /></div></Link>
          </div>
          <article>
            <section className="posts">
              <div className="posts-center-growing">
                <div className="product-grid-strains">
                  <article>
                    <div className="post-info">
                      <span>{category}</span>
                      <h2>{title}</h2>
                      <p>{excerpt}</p>
                      <div className="underline"></div>
                    </div>
                    <Image fluid={fluid} alt={title} />
                    {documentToReactComponents(
                      body.json,
                      options
                    )}
                  </article>
                </div>
                <article>
                  <HowtoBanner />
                </article>
              </div>
            </section>
          </article>
        </Wrapper>
      </div>
    </Layout >
  )
}

export const query = graphql`
query GetSingleHowto($slug: String) {
  howto: contentfulHowto(slug: {eq: $slug}) {
        id
        title
        slug
        category
        image {
            fluid {
            ...GatsbyContentfulFluid
          }
        }
        date
        author
        body {
            json
        }
        excerpt {
            excerpt
        }
      }
  }
`

const Wrapper = styled.section`

  width: 85vw;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: 15px;
  .post-info {
    text-align: left;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 4rem;
    }
  }
  .strain-image {
    height: 200px;
}
.strain-info-first-graph {
    padding: 10px;
}

  .strain-info {
    width: 100%;
    padding: 45px;
    padding-top: 30px;
    padding-bottom: 30px;
}
span.product-rating {
    color: rgb(16 42 66);
    font-size: 20px;
    padding-top: 2px;
}
.article-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
 }
p.strain-info-text-2 {
    color: rgb(16, 42, 66)!important;
}
path.CircularProgressbar-trail {
    stroke: rgb(16 42 66) !important;
}
text.CircularProgressbar-text {
    fill: rgb(16, 42, 66) !important;
}
.heading-info {
    color: white;
    font-size: 20px;
    margin-bottom: inherit;
}
.strain-text {
    justify-self: left;
}
.react-sweet-progress-line {
    background-color: #102a42 !important;
}
.strain-info-graphs {
    width: 100%;
    padding: 45px;
    padding-top: 30px;
    padding-bottom: 30px;
}

.posts-center-growing {
    display: grid !important;
    grid-template-columns: 1fr 250px !important;
    column-gap: 1rem;
    padding-top: 3rem;
  }
  @media screen and (max-width: 768px) {
    .posts-center-growing {
    grid-template-columns: 1fr !important;
    column-gap: 1rem;
    padding-top: 3rem;
    }
  }
.strain-info-first {
    width: 100%;
    padding: 25px;
    padding-left: 0px;
    padding-right: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
}
.CircularProgressbar .CircularProgressbar-path {
    stroke: #7da748;
    stroke-linecap: round !important;
    transition: stroke-dashoffset 0.5s ease 0s;
}
}
.react-sweet-progress-symbol {
    color: #102a42;
}
.react-sweet-progress-line-inner.react-sweet-progress-line-inner-status-active {
    background-color: rgb(126, 167, 72) !important;
}
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    grid-template-areas: "strain-image strain-text strain-info .";
    height: 100%;
    width: 100%;
  }

  p.strain-info-text {
    color: white;
    padding-top: 7px;
    margin-bottom: 0rem;
    letter-spacing: var(--spacing);
}
p.strain-info-text-2 {
    text-align: center;
    color: white;
    font-size: 20px;
    margin-bottom: 0rem;
    margin-top: 0.5rem;
    letter-spacing: var(--spacing);
}

  button.info-btn {
    padding-top: 4.5px;
    font-size: 20px;
    height: 35px;
    width: 150px;
    background: #7EA748;
    border: none;
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
}
button.info-btn2 {
    padding-top: 4.5px;
    font-size: 20px;
    margin-left: 10px;
    height: 35px;
    width: 150px;
    background: rgb(16 42 66);
    border: none;
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
}
h2.title-strain {
    color: rgb(16 42 66);
}
.strain-review {
    margin-bottom: 1rem;
}
  .product-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    column-gap: 1.5rem;
  }
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    column-gap: 1.5rem;
  }
    .search-icon {
        float: left;
}

.grid-container3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    grid-template-areas: "strain-image strain-text strain-info .";
    height: 200px;
    width: 100%;
    background-color: #ffffff;
    place-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 1rem;
}
.product-grid-strains {
  padding: 4rem;
  margin: 0 auto;
    background: white;
}
@media (max-width: 767px) {
  margin-bottom: 0rem;
  .product-grid-strains {
  padding: 1rem !important;
  }
}
.posts-center {
    margin-top: 1rem;
}
.search-text {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-5);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
    margin-left: 0.25rem;
    margin-bottom: 0.35rem;
    font-size: 1.1rem;
}

.search-text:hover {
    border-color: #0a0c10;
    color: #0a0c10;
  }
  
  .strain-image {
    display: grid;
    grid-template-columns: ;
    grid-template-rows: ;
    gap: 1px 1px;
    grid-template-areas: "strain-image";
    grid-area: strain-image;
  }
  
  .strain-image { grid-area: strain-image; }
  
  .strain-text {
    display: grid;
    grid-template-columns: ;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1px 1px;
    grid-template-areas: "strain-title" "strain-review" "strain-button";
    grid-area: strain-text;
  }
  
  .strain-title { 
      grid-area: strain-title; 
    
    }
  
  .strain-review { grid-area: strain-review; }
  
  .strain-button { grid-area: strain-button; }
  
  .strain-info {
    display: grid;
    grid-template-columns: ;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 1px 1px;
    grid-template-areas: "strain-info-1" "strain-info-2" "strain-info-3" "strain-info-4";
    grid-area: strain-info;
  }
  
  .strain-info-1 { grid-area: strain-info-1; }
  
  .strain-info-2 { grid-area: strain-info-2; }
  
  .strain-info-3 { grid-area: strain-info-3; }
  
  .strain-info-4 { grid-area: strain-info-4; }

`

export default HowtoTemplate