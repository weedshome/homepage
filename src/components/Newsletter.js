import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from "styled-components"

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
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
                <div className="newsletter-container">
                    <h2 className="newsletter-title">Subscribe to our newsletter</h2>
                    <p className="newsletter-info">Sign up for our newsletter to receive the new releases directly to your inbox.</p>
                    <div>
                        <form onSubmit={this._handleSubmit}>
                            <input
                                type="text"
                                onChange={this._handleChange}
                                placeholder="name"
                                name="name"
                            />
                            <input
                                type="email"
                                onChange={this._handleChange}
                                placeholder="email"
                                name="email"
                            />
                            <br />
                            <input type="submit" className="newsletter-btn" />
                        </form>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
background: #f1f5fe;
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
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    -webkit-letter-spacing: 0.02em;
    -moz-letter-spacing: 0.02em;
    -ms-letter-spacing: 0.02em;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #102a42;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 15px;
    padding: 12px 16px;
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
    border: 1px solid #102a42;
    border-radius: 5px;
    color: white !important;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-weight: 400;
}

@media screen and (max-width: 767px) {
input.newsletter-btn {
    margin-top: 2rem;
}
h2 {
font-size: 1.5rem;
}
}
`