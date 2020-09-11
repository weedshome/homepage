import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from 'styled-components'
import ProductBanner from "../components/ProductBanner"
import { IoMdArrowRoundBack } from 'react-icons/io'
import ReactStars from "react-stars";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GiSeedling } from 'react-icons/gi'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const StrainTemplate = ({
    data: {
        strain: {
            price,
            rating,
            title,
            category,
            sativa,
            indica,
            hybrid,
            body,
            info: { info },
        },
    },
}) => {
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url
                return <img alt={alt} src={url} />
            },
        },
    }

    return (
        <Layout>
            <Wrapper>
                <article>
                    <div className="product-grid">
                        <div className="search-text" style={{ textAlign: "left" }}>
                            <Link to="/strains" className="links"> back to all strains <div className="search-icon"><IoMdArrowRoundBack /></div></Link>
                        </div>
                        <div class="grid-container3">
                            <div class="strain-image">
                                <div class="strain-image">
                                </div>
                            </div>
                            <div class="strain-text">
                                <div class="strain-title">
                                    <h2 className="title-strain">{title}</h2>
                                </div>
                                <div class="strain-review">
                                    <div className="rating">
                                        <div className="rating-stars">
                                            <ReactStars
                                                count={5}
                                                edit={false}
                                                value={rating}
                                                size={20}
                                                color2={"#7EA748"}
                                                color1={"#102a42"}
                                            />
                                        </div>
                                        <span className="product-rating">Total: 1 Average: {rating}/5</span>
                                    </div>
                                </div>
                                <div class="strain-button">
                                    <button className="info-btn">get it now <GiSeedling /></button>
                                    <button className="info-btn2">get it now <GiSeedling /></button>
                                </div>
                            </div>
                            <div class="strain-info-first">
                                <div class="strain-info-first-graph">
                                    <CircularProgressbar value={sativa} text={`${sativa}%`}
                                        styles={buildStyles({
                                            strokeLinecap: 'butt',
                                            textSize: '28px',
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgb(126, 167, 72), ${sativa / 100})`,
                                            textColor: 'white',
                                            trailColor: 'white',
                                            backgroundColor: 'rgb(126, 167, 72)',
                                        })}
                                    />
                                    <p className="strain-info-text-2">Sativa</p>
                                </div>
                                <div class="strain-info-first-graph">
                                    <CircularProgressbar value={indica} text={`${indica}%`}
                                        styles={buildStyles({
                                            strokeLinecap: 'butt',
                                            textSize: '28px',
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgb(126, 167, 72), ${indica / 100})`,
                                            textColor: 'white',
                                            trailColor: 'white',
                                            backgroundColor: 'rgb(126, 167, 72)',
                                        })}
                                    />
                                    <p className="strain-info-text-2">Indica</p>
                                </div>
                                <div class="strain-info-first-graph">
                                    <CircularProgressbar value={hybrid} text={`${hybrid}%`}
                                        styles={buildStyles({
                                            strokeLinecap: 'butt',
                                            textSize: '28px',
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgb(126, 167, 72), ${hybrid / 100})`,
                                            textColor: 'white',
                                            trailColor: 'white',
                                            backgroundColor: 'rgb(126, 167, 72)',
                                        })}
                                    />                                    <p className="strain-info-text-2">Hybrid</p>
                                </div>
                                <div class="strain-info-4">
                                </div>
                            </div>
                        </div>
                        <div class="grid-container">
                            <div class="strain-info-graphs">
                                <div class="strain-info-1">
                                    <h3 className="heading-info">Feelings</h3>
                                    <p className="strain-info-text">Happy</p>
                                    <Progress percent={price} />
                                </div>
                                <div class="strain-info-2">
                                    <p className="strain-info-text">Euphoric</p>
                                    <Progress percent={price} />
                                </div>
                                <div class="strain-info-3">
                                    <p className="strain-info-text">Stress</p>
                                    <Progress percent={price} />
                                </div>
                                <div class="strain-info-4">
                                </div>
                            </div>
                            <div class="strain-info-graphs">
                                <div class="strain-info-1">
                                    <h3 className="heading-info">Helps with</h3>
                                    <p className="strain-info-text">Anxiety</p>
                                    <Progress percent={price} />
                                </div>
                                <div class="strain-info-2">
                                    <p className="strain-info-text">Dry mouth</p>
                                    <Progress percent={price} />
                                </div>
                                <div class="strain-info-3">
                                    <p className="strain-info-text">Dry eyes</p>
                                    <Progress percent={price} />
                                </div>
                                <div class="strain-info-4">
                                </div>
                            </div>
                            <div class="strain-info">
                                <div class="strain-info-1">
                                    <h3 className="heading-info">Negatives</h3>
                                    <p className="strain-info-text">Relaxed</p>
                                    <Progress percent={price} />
                                </div>
                                <div class="strain-info-2">
                                    <p className="strain-info-text">Uplifted</p>
                                    <Progress percent={price} />
                                </div>
                                <div class="strain-info-3">
                                    <p className="strain-info-text">Depression</p>
                                    <Progress percent={price} />
                                </div>
                                <div class="strain-info-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <section className="posts">
                        <div className="posts-center">
                            <div className="product-grid-strains">
                                <article>
                                    <div className="post-info">
                                        <span>{category}</span>
                                        <h2>Our {title} Review</h2>
                                        <p>{info}</p>
                                        <div className="underline"></div>
                                    </div>
                                    {documentToReactComponents(body.json, options)}
                                </article>
                            </div>
                            <article>
                                <ProductBanner />
                            </article>
                        </div>
                    </section>
                </article>
            </Wrapper>
        </Layout >
    )
}

export const query = graphql`
query GetSingleStrain($slug: String) {
  strain: contentfulStrains(slug: {eq: $slug}) {
    title
    price
    rating
    sativa
    indica
    hybrid
    image {
      fixed(width: 400, height: 200) {
        ...GatsbyContentfulFixed
      }
    }
    info {
      info
    }
    body {
      json
    }
    category
  }
}
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  padding-top: 15px;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
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
    font-family: teko;
}
span.product-rating {
    color: rgb(16 42 66);
    font-family: teko;
    font-size: 20px;
    padding-top: 2px;
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
    font-family: teko;
}
.strain-info-first {
    width: 100%;
    padding: 25px;
    padding-left: 0px;
    padding-right: 35px;
    font-family: teko;
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
    color: white;
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
    font-family: teko;
    padding-top: 7px;
    margin-bottom: 0rem;
    letter-spacing: var(--spacing);
}
p.strain-info-text-2 {
    text-align: center;
    color: white;
    font-family: teko;
    font-size: 20px;
    margin-bottom: 0rem;
    margin-top: 0.5rem;
    letter-spacing: var(--spacing);
}

  button.info-btn {
    font-family: teko;
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
    font-family: teko;
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
    background: white;
    padding: 45px;
}
.posts-center {
    margin-top: 1rem;
}
.search-text {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-family: teko;
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


export default StrainTemplate



