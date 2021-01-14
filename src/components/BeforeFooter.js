import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const BeforeFooter = () => {
  return <Wrapper><div className="grid-container">

    <div className="grid-1">
      <h3 className="footer-headline">About</h3>
      <ul className="social-list">
        <li className="list-inline-item"><Link className="link" to="/sitemap/">
          <p class="footer-tx">About Us</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/sitemap/">
          <p class="footer-tx">Site Map</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/faq/">
          <p class="footer-tx">FAQs</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/sitemap/">
          <p class="footer-tx">Advertise</p>
        </Link></li>
      </ul>
    </div>

    <div className="grid-2">
      <h3 className="footer-headline">Reviews</h3>
      <ul className="social-list">
        <li className="list-inline-item"><Link className="link" to="/strains/">
          <p class="footer-tx">All Strains</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/strains/">
          <p class="footer-tx">All Seeds</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/strains/">
          <p class="footer-tx">Indoor Growing</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/strains/">
          <p class="footer-tx">Outdoor Growing</p>
        </Link></li>
      </ul>
    </div>

    <div className="grid-3">
      <h3 className="footer-headline">Blog</h3>
      <ul className="social-list">
        <li className="list-inline-item"><Link className="link" to="/news/">
          <p class="footer-tx">News</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/lifestyle/">
          <p class="footer-tx">Lifestyle</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/health/">
          <p class="footer-tx">Health</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/how-to/">
          <p class="footer-tx">How To</p>
        </Link></li>
      </ul>
    </div>

    <div className="grid-4">
      <h3 className="footer-headline">Info</h3>
      <ul className="social-list">
        <li className="list-inline-item"><Link className="link" to="/about/">
          <p class="footer-tx">Contact</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/impressum/">
          <p class="footer-tx">Impressum</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/terms/">
          <p class="footer-tx">Terms</p>
        </Link></li>
        <li className="list-inline-item"><Link className="link" to="/privacy/">
          <p class="footer-tx">Privacy</p>
        </Link></li>
      </ul>
    </div>
  </div>
  </Wrapper>
}

const Wrapper = styled.div`
padding-bottom: 4rem;
padding-top: 4rem;
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

.footer-headline {
  color: #ffffff;
    border-bottom: 1px solid rgb(110 150 85);
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 5px;
    margin-bottom: 18px;
    padding-bottom: 10px;
    text-transform: uppercase;
}

ul.social-list {
      margin - left: 0;
}

.list-inline-item {
      list - style: none;
  padding-top: 5px;
}

.footer-big-text {
      font - weight: 600 !important;
  letter-spacing: var(--spacing);
  font-size: 15px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  color: #ffffff;
}

a.footer-tx {
      font - size: 16px;
  line-height: 22px;
  display: block;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  color: #ffffff;
  text-transform: none;
  border-radius: var(--radius);
  margin-bottom: 1rem;
}
footer-tx {
      display: block;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  color: #ffffff;
  line-height: 1.8;
  font-size: 12px;
  text-transform: none;
  border-radius: var(--radius);
  margin-bottom: 1rem;
}

p.footer-tx {
    font-size: 13px;
    line-height: 22px;
    display: block;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    margin-bottom: .7rem !important;
    color: white !important;
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
      border - radius: 50%;
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
  text-transform: none;
  border-radius: var(--radius);
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .grid - container {
      max - width: var(--max-width);
    width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
}

@media screen and (max-width: 767px) {
      padding - top: 3rem;
    padding-bottom: 18rem;
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

