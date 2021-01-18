import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from "styled-components"

export default class NewsletterSidebar extends React.Component {
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
      </Wrapper >
    )
  }
}

const Wrapper = styled.div`
form {
  display: grid;
}
background: #ffffff;
.newsletter-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding-bottom: 2rem;
    text-align: center;
    padding-top: 2rem;
}
.newsletter-btn {
  margin: 20px;
  margin-top: 0px;
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
}
input[type="text"] {
    margin: 20px;
    margin-bottom: 0px;
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
    margin-top: 0px;
    margin-bottom: 0px !important;
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

h2 {
  font-size: 1.2rem;
}

@media screen and (max-width: 767px) {
input.newsletter-btn {
    margin-top: 2rem;
}
h2 {
font-size: 1rem;
}
}
`