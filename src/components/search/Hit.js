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
                <div className="rating">
                    <span class="post-card-badge">{hit.category}</span>
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
}
.hit-p {
    box-shadow: rgba(1,1,1,0.05) 1px 1px 5px 0px;
}
`