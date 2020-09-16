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
      <h4 className="footer-big-text">Resources</h4>
      <div className="underline-footer"></div>
      <ul className="social-list">
        <li className="list-inline-item"><a href="" className="footer-tx">FAQs</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Blog</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Support</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Developers APIs</a></li>
      </ul>
    </div>

    <div className="grid-2">
      <h4 className="footer-big-text">Legal</h4>
      <div className="underline-footer"></div>
      <ul className="social-list">
        <li className="list-inline-item"><a href="" className="footer-tx">Privacy</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Terms of Services</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Security</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">My Personal Info</a></li>
      </ul>
    </div>

    <div className="grid-3">
      <h4 className="footer-big-text">Legal</h4>
      <div className="underline-footer"></div>
      <ul className="social-list">
        <li className="list-inline-item"><a href="" className="footer-tx">Privacy</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Terms of Services</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Security</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">My Personal Info</a></li>
      </ul>
    </div>

    <div className="grid-4">
      <h4 className="footer-big-text">Stay Connnected</h4>
      <div className="underline-footer"></div>
      <ul className="social-list">
        <li className="list-inline-item"><a href="" className="footer-tx">Our Story</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Pricing</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Contact</a></li>
        <li className="list-inline-item"><a href="" className="footer-tx">Jobs</a></li>
      </ul>
    </div>
  </div>
  </Wrapper>
}

const Wrapper = styled.div`

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "grid-1 grid-2 grid-3 grid-4";
  height: 20rem;
  place-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
.grid-container {
  display: table-row !important;
}
}

.grid-1 { grid-area: grid-1; }

@media screen and (max-width: 768px) {
.grid-1 { 
  grid-area: grid-1;
  text-align: center; 
}
}

.grid-2 { grid-area: grid-2; }

@media screen and (max-width: 768px) {
.grid-2 { 
  grid-area: grid-1;
  text-align: center; 
}
}

.grid-3 { grid-area: grid-3; }

@media screen and (max-width: 768px) {
.grid-3 { 
  grid-area: grid-1;
  text-align: center; 
}
}

.grid-4 { grid-area: grid-4; }

@media screen and (max-width: 768px) {
.grid-4 { 
  grid-area: grid-1;
  text-align: center; 
}
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
}

@media screen and (max-width: 768px) {
.footer-big-text {
  display: block;
  padding-top: 2rem;
}
}

@media screen and (max-width: 768px) {
.img.footer-logo.gatsby-image-wrapper {
  margin-top: 1rem;
}
}

@media screen and (max-width: 768px) {
p.footer-text {
  padding: 2rem;
  padding-bottom: 0rem;
  padding-top: 1rem;
}
}

a.footer-tx {
  display: block;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  color: hsl(209deg 61% 16%);
  line-height: 1.8;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  text-transform: none;
  border-radius: var(--radius);
}

a.footer-tx:hover {
  background: black;
  border-radius: 5px;
  color: #6e9654;
}

hr {
  width: 100%;
}

.underline-footer {
    width: 3rem;
    height: 3px;
    background: var(--clr-black);
    margin-top: -5px;
    margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
.underline-footer {
  margin: 0 auto;
}
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
`

export default BeforeFooter

