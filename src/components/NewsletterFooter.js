import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from "styled-components"
import SocialLinksTwo from '../constants/socialLinksTwo'
import { GoChevronRight } from 'react-icons/go'

export default class NewsletterFooter extends React.Component {
    state = {
        email: null,
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
            <Wrapper>
                <div className="subscribe-newsletter">
                    <h3 className="newsletter-footer">JOIN THE MAILING LIST        </h3>
                    <form onSubmit={this._handleSubmit}>
                        <input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="Enter your Email"
                            name="email"
                        />
                        <br />
                        <input className="btn-footer" type="submit" className="newsletter-btn" />
                    </form>
                    <SocialLinksTwo />
                </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
.newsletter-info {
    margin-bottom: 0px !important;
    color: hsl(209deg 61% 16%);
    font-size: 12px;
    letter-spacing: var(--spacing);
}
.newsletter-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding-bottom: 4rem;
    text-align: center;
    padding-top: 4rem;
}
.newsletter-btn {
    display: inline-block;
    border-radius: 8px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #ffffff;
    border-color: transparent;
    border: solid;
    color: #3d796d;
    font-size: 17px;
    padding: 11.6px 16px;
}
input[type="text"] {
    margin: 20px;
    appearance: none;
    padding: 0.8rem 1.7rem;
    position: relative;
    background-color: #ffffff;
    border: 1px solid #102a42;
    border-radius: 5px;
    color: white !important;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-weight: 400;
}
input[type="email"] {
    appearance: none;
    padding: 0.8rem 1.7rem;
    position: relative;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    color: white !important;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-weight: 400;
    width: 300px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}

@media screen and (max-width: 767px) {
    .newsletter-btn {
        display: inline-block !important;
        border-radius: 8px !important;
        border-top-left-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
        letter-spacing: 0.02em !important;
        cursor: pointer !important;
        font-weight: 500 !important;
        line-height: 1 !important;
        background-color: #ffffff !important;
        border-color: transparent !important;
        border: solid !important;
        color: #3d796d !important;
        font-size: 17px !important;
        padding: 11.6px 16px !important;
    }
h2 {
font-size: 1.5rem;
}
}
`