import React from "react"
import { FaStar } from "react-icons/fa"

const StarRating = () => {
    return (<div className="rating">
        <div className="labb">
            {[...Array(5)].map((star) => {
                return <label>
                    <FaStar color="#6f9654" size="18" />
                </label>

            })}
        </div>
        <div className="bobb">
            <p className="bobb-text"><a href="www.google.com">631 Reviews</a></p>
        </div>
    </div>
    );
};

export default StarRating