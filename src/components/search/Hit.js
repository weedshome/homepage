import React from 'react'
import { Link } from "gatsby"
import { AiOutlineInfoCircle } from 'react-icons/ai'
import ReactStars from "react-stars";
import 'instantsearch.css/themes/algolia.css';
import styled from 'styled-components'


export default ({ hit }) => (
    <Wrapper>
        <div className="hit-p">
            <div className="info">
                <span class="post-card-badge">{hit.category}</span>
                <div className="rating">
                    <div className="rating-stars">
                        <ReactStars
                            count={5}
                            edit={false}
                            value={hit.rating}
                            size={18}
                            color2={"#102a42"}
                        />
                    </div>
                    <span className="product-rating">({hit.rating}/5)</span>
                </div>
                <h3>{hit.title}</h3>
                <div className="underline"></div>
                <Link className="link" to={`/strains/${hit.slug}`}>more details <AiOutlineInfoCircle /></Link>
            </div>
        </div>
    </Wrapper>
)

const Wrapper = styled.div`
.info {
 background: #ffffff;
 border-bottom: none !important;
}
.hit-p {
    box-shadow: rgba(1,1,1,0.05) 1px 1px 5px 0px;
}
span.post-card-badge {
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
    background-color: #102a42 !important;
    box-shadow: 0 0 2px 0 rgba(0,0,0,.75);
    border-radius: 4px;
    font-family: 'Montserrat',sans-serif;
  }

  @media screen and (max-width: 767px) {
    li.ais-Hits-item {
        margin-right: .65rem !important;    
    }
    .grid-filter {
        grid-template-columns: 1fr !important;
    }
  }
  
`