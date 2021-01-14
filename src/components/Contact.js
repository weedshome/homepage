import React from 'react'
import SocialLinksTwo from '../constants/socialLinksTwo'
import { GoChevronRight } from 'react-icons/go'

const contact = () => {
    return (
        <div className="subscribe-newsletter">
            <h3 className="newsletter-footer">JOIN THE MAILING LIST        </h3>
            <form method="post" action="#">
                <label>
                    <input type="email" name="email" id="email" placeholder="Subscribe to the Newsletter" />
                </label>
                <button className="btn-footer" aria-label="submit" type="submit"><GoChevronRight className="icon-footer" /></button>
            </form>
            <SocialLinksTwo />
        </div>
    )
}

export default contact