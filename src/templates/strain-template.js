import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from 'styled-components'
import ProductBanner from "../components/ProductBanner"
import { IoMdArrowRoundBack } from 'react-icons/io'
import ReactStars from "react-stars";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import 'react-circular-progressbar/dist/styles.css';
import { GiSeedling } from 'react-icons/gi'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from 'gatsby-image'
import { ImSleepy, ImHappy, ImIcoMoon, ImSpinner10 } from "react-icons/im"


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
            affiliatelink,
            image: { fixed },
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
            <BackgroundBg>
                <Wrapper>
                    <article>
                        <div className="product-grid">
                            <div className="search-text" style={{ textAlign: "left" }}>
                                <Link to="/strains" className="links"> back to all strains <div className="search-icon"><IoMdArrowRoundBack /></div></Link>
                            </div>
                            <div class="grid-container3">
                                <div class="strain-image">
                                    <div class="strain-image">
                                        <Image fixed={fixed} alt={title} />
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
                                        <a href={affiliatelink}><button className="button-first">Get it now <GiSeedling /></button></a>
                                    </div>
                                </div>
                                <div class="strain-info-close">
                                    <div className="info-strains">
                                        <tr>
                                            <th>Strain Info</th>
                                        </tr>
                                        <table>
                                            <tr>
                                                <td><ImHappy /> THC:</td>
                                                <td>25%</td>
                                            </tr>
                                            <tr>
                                                <td> <ImSleepy /> CBD:</td>
                                                <td>2%</td>
                                            </tr>
                                            <tr>
                                                <td> <ImIcoMoon /> Genetics:</td>
                                                <td>Sativa</td>
                                            </tr>
                                            <tr>
                                                <td><ImSpinner10 /> Varities:</td>
                                                <td>Sweet & Fruity</td>
                                            </tr>
                                        </table>                                    </div>


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
            </BackgroundBg>
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
    affiliatelink,
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

const BackgroundBg = styled.section`
background: #f1f5fe;
`
const Wrapper = styled.section`
  width: 85vw;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: 5.5rem;
  a.links {
    color: #3d796d;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}

  .strain-info-close {
    padding: 45px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
 th {
    color: #3d796d;
    font-size: 15px;
    text-transform: uppercase;
    margin-bottom: inherit;
 }

 td {
    font-size: 14px;
    color: #3d796d;
    padding-top: 7px;
    margin-bottom: 0rem;
    letter-spacing: var(--spacing);
 }

.strain-info-close {
    background: #ffffff;
    width: 400px;
    height: 200px;
}


  .button-first {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #3d796d;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 15px;
    padding: 12px 16px;
    margin-right: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .grid-container {
        display: block !important;
    }
}
  @media screen and (max-width: 768px) {
    .product-grid-strains {
        padding: 1rem !important;
    }
    .grid-container {
        display: block !important;
    }
    .strain-info-close {
        width: auto !important;
    }
    .gatsby-image-wrapper {
        width: 100% !important;
    }
    .product-grid-strains {
        background: white;
        padding: 1rem;
    }
    .grid-container3 {
        display: block !important;
    }
    .posts-center {
        grid-template-columns: 1fr !important;
    }
    .strain-text {
        text-align-last: center;
    padding-top: 2.5rem;
    }
  }
  .post-info {
    text-align: center;
    span {
        margin-bottom: 0.5rem;
        width: fit-content;
        bottom: 16px;
        right: 12px;
        display: block;
        padding: 4px;
        text-transform: uppercase;
        text-align: center;
        font-size: .6rem !important;
        font-weight: 500 !important;
        white-space: nowrap;
        color: #ffffff;
        background-color: #3d796d;
        box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
        border-radius: 4px;
        margin: 0 auto;
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
    font-size: 15px;
    padding-top: 4px;
    padding-left: 1rem;
}

path.CircularProgressbar-trail {
    stroke: rgb(16 42 66) !important;
}
text.CircularProgressbar-text {
    fill: rgb(16, 42, 66) !important;
}
.heading-info {
    color: #3d796d;
    font-size: 15px;
    text-transform: uppercase;
    padding-bottom: 10px;
    margin-bottom: inherit;
}
.strain-text {
    justify-self: left;
    padding-left: 2rem;
    padding-right: 2rem;
}
.react-sweet-progress-line {
    background-color: #3d796d !important;
}
.strain-info-graphs {
    width: 100%;
    padding: 45px;
    padding-top: 30px;
    padding-bottom: 30px;
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
    stroke: #3d796d;
    stroke-linecap: round !important;
    transition: stroke-dashoffset 0.5s ease 0s;
    font-size: 14px;
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
    background: #ffffff;
  }

  p.strain-info-text {
    font-size: 14px;
    color: #3d796d;
    padding-top: 7px;
    margin-bottom: 0rem;
    letter-spacing: var(--spacing);
}
h2.title-strain {
    color: rgb(16 42 66);
    font-size: 1.15rem !important;
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
        padding-top: 0.15rem;
        padding-right: 0.5rem;
}

.grid-container3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "strain-image strain-text strain-info .";
    width: 100%;
    background-color: #ffffff;
    place-items: center;
    max-width: var(--max-width);
    margin: 0 auto;

}
table svg {
    top: .09rem;
    position: relative;
}
.product-grid-strains {
    background: white;
    padding: 4rem;
}
.posts-center {
    margin-top: 1rem;
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr 250px;
    column-gap: 1rem;
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


export default StrainTemplate



