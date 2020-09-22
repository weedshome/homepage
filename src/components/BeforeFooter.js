import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const query = graphql`
  {
    person: file(relativePath: {eq: "wh-banner.jpg"}) {
      childImageSharp {
        fixed (width:100, height:100){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const BeforeFooter = () => {
  const data = useStaticQuery(query)
  return <Wrapper><div className="grid-container">

    <div className="grid-1">
      <h4 className="footer-big-text">Links</h4>
      <div className="underline-footer"></div>
      <ul className="social-list">
        <li className="list-inline-item"><a href="" className="footer-tx">FAQs</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Blog</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Support</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Develop</a></li>
      </ul>
    </div>

    <div className="grid-2">
      <h4 className="footer-big-text">Cannabis</h4>
      <div className="underline-footer"></div>
      <ul className="social-list">
        <li className="list-inline-item"><a href="/strains/" className="footer-tx">Strains</a></li>
        <li className="list-inline-item"><a href="/growing/" className="footer-tx">Growing</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Security</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Personal</a></li>
      </ul>
    </div>

    <div className="grid-3">
      <h4 className="footer-big-text">Blog</h4>
      <div className="underline-footer"></div>
      <ul className="social-list">
        <li className="list-inline-item"><a href="/news/" className="footer-tx">News</a></li>
        <li className="list-inline-item"><a href="/lifestyle/" className="footer-tx">Lifestyle</a></li>
        <li className="list-inline-item"><a href="/health/" className="footer-tx">Health</a></li>
        <li className="list-inline-item"><a href="/how-to/" className="footer-tx">How-to</a></li>
      </ul>
    </div>

    <div className="grid-4">
      <h4 className="footer-big-text">About</h4>
      <div className="underline-footer"></div>
      <ul className="social-list">
        <li className="list-inline-item"><a href="/about/" className="footer-tx">About Us</a></li>
        <li className="list-inline-item"><a href="/impressum/" className="footer-tx">Impressum</a></li>
        <li className="list-inline-item"><a href="/terms/" className="footer-tx">Terms</a></li>
        <li className="list-inline-item"><a href="/privacy/" className="footer-tx">Privacy</a></li>
      </ul>
    </div>
  </div>
  </Wrapper>
}

const Wrapper = styled.div`
background: #102a42;
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "grid-1 grid-2 grid-3 grid-4";
  height: 14rem;
  place-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
}

ul.social-list {
  margin-left: 0;
}

.list-inline-item {
  list-style: none;
  padding-top: 5px;
}

.footer-big-text {
  font-weight: 600 !important;
  letter-spacing: var(--spacing);
  font-size: 15px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  border: none;
  display: flex;
  align-items: center;
  color: #ffffff;
}

a.footer-tx {
  display: block;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  color: #ffffff;
  line-height: 1.8;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  text-transform: none;
  border-radius: var(--radius);
}

a.footer-tx:hover {
  color: #6e9654;
}

hr {
  width: 100%;
}

.underline-footer {
    width: 3rem;
    height: 3px;
    background: hsl(95, 28%, 46%);
    margin-top: -5px;
    margin-bottom: 10px;
}

.footer-logo {
  border-radius: 50%;
  width: 60px !important;
  height: 60px !important;
}

.footer-text {
  padding: 5px;
  display: block;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  color: hsl(209deg 61% 16%);
  line-height: 1.6;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  text-transform: none;
  border-radius: var(--radius);
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .grid-container {
    max-width: var(--max-width);
    width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
}

@media screen and (max-width: 767px) {
  padding-top: 3rem;
    padding-bottom: 8rem;
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 30px 10px;
    grid-template-areas: "grid-1 grid-2";
    height: 14rem;
    place-items: left;
    max-width: var(--max-width);
    margin: 0 auto;
  }
}
`

export default BeforeFooter

