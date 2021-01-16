import React from 'react'
import { Link } from "gatsby"
import { AiOutlineInfoCircle } from 'react-icons/ai'
import ReactStars from "react-stars";
import 'instantsearch.css/themes/algolia.css';
import styled from 'styled-components'


export default ({ hit }) => (
    <Wrapper>
        <Link className="link" to={`/strains/${hit.slug}`}>
            <div className="hit-p">
                <div className="imgDiv">
                    <img src={hit.image} alt={hit.alt} className="hit-imageSize"></img>
                </div>
                <div className="info">
                    <h3 className="cardTitle">{hit.title}</h3>
                    <div className="underline"></div>
                    <div className="rating">
                        <div className="rating-stars">
                            <ReactStars
                                count={5}
                                edit={false}
                                value={hit.rating}
                                size={18}
                                color2={"#3d796d"}
                            />
                        </div>
                        <span className="product-rating">({hit.rating}/5)</span>
                    </div>
                    <div>
                        <p>{hit.info}</p>
                    </div>
                    <span class="post-card-badge">{hit.category}</span>
                </div>
            </div>
        </Link>
    </Wrapper >
)

const Wrapper = styled.div`
.cardTitle {
    font-size: 1.25rem !important;
}
.imgDiv {
    height: 100%;
}
.hit-imageSize {
    width: 300px;
    height: inherit;
}
.info {
 border-bottom: none !important;
 margin: 1rem 1rem 1rem 1rem;
 padding-left: 0px !important;
 padding-right: 0px !important;

}
.hit-p {
    box-shadow: rgba(1,1,1,0.05) 1px 1px 5px 0px;
    display: grid;
    grid-template-columns: 300px 1fr;
    background-color: #ffffff;
    padding: 10px;
}
span.post-card-badge {
    margin-bottom: 0.5rem;
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
    background-color: #3d796d;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
    border-radius: 4px;
  }

  @media screen and (max-width: 767px) {
    li.ais-Hits-item {
        margin-right: 0rem !important;    
    }
    .hit-p {
        display: block;
    }
    span.post-card-badge {
        margin: 0 auto;
    }
    .rating-stars {
        margin: 0 auto;
    }
    a.link {
        place-content: center;
        padding-bottom: .5rem !important;
    }
    .grid-filter {
        grid-template-columns: 1fr !important;
    }
  }

  img {
      width: 200px;
      height: 130px;
  }
`