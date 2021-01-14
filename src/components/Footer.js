import React from 'react'
import { Link } from "gatsby"
import Contact from './Contact'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links-grid">
          <Contact />
          <div className="footer-links">
            <ul className="footer-ul">
              <h2 className="footer-title">Get in touch</h2>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/business" className="footer-link">
                  Contact
        </Link>
              </li>
              <li>
                <Link to="/business" className="footer-link">
                  Business
        </Link>
              </li>
              <li>
                <Link to="/impressum" className="footer-link">
                  Impressum
        </Link>
              </li>
            </ul>
            <ul className="footer-ul">
              <h2 className="footer-title">Learn more</h2>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
        </Link>
              </li>
              <li>
                <Link to="/strains" className="footer-link">
                  Strains
        </Link>
              </li>
              <li>
                <Link to="/dispensaries" className="footer-link">
                  Maps
        </Link>
              </li>
            </ul>
            <ul className="footer-ul">
              <h2 className="footer-title">More links</h2>
              <li>
                <Link to="/terms" className="footer-link">
                  Terms
        </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy
        </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-desc">
        <p className="footer-desc1">WEED'S HOME IS A CERTIFIED B CORP</p>
        <p className="copyright">© 2020 Weed's Home. All rights reserved. PrivacyTerms of UseCA Supply Chains Act</p>
        <p className="footer-info">*All farmers who supply milk for Tillamook products pledge to not use artificial growth hormones. The FDA has stated that no significant difference has been shown between milk derived from rBST treated and non-rBST treated cows.</p>
      </div>
    </footer>
  )
}

export default Footer
