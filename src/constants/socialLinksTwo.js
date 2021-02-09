import React from "react"
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from "react-icons/fa"
const SocialLinksTwo = ({ styleClass }) => {
    return (
        <ul className="nav-icons">
            <li>
                <a href="https://www.facebook.com/WeedsHome/">
                    <FaFacebookSquare className="social-icon1 facebook-icon"></FaFacebookSquare>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/weedshomeofficial/">
                    <FaInstagramSquare className="social-icon1 dribble-icon"></FaInstagramSquare>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/home_weed">
                    <FaTwitterSquare className="social-icon1 twitter-icon"></FaTwitterSquare>
                </a>
            </li>
        </ul>
    )
}
export default SocialLinksTwo
