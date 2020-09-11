import React from 'react'
import { Link } from "gatsby"
import { AiOutlineInfoCircle } from 'react-icons/ai'
import ReactStars from "react-stars";
import 'instantsearch.css/themes/algolia.css';


export default ({ hit }) => (
    <div className="d">
        <div className="info">
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
)