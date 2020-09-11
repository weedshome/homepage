/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import BeforeFooter from './BeforeFooter'
import CookieConsent from 'react-cookie-consent';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <BeforeFooter />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        style={{ background: "#102a42" }}
        buttonStyle={{ background: "#6e9654", color: "13px", color: "#ffffff" }}
        cookieName="gatsby-gdpr-google-analytics">
        We use cookies to enable essential features of our site. Learn more in our <a href="/cookie-policy">Cookie Policy</a> and <a href="/cookie-policy">Privacy Policy.</a>    </CookieConsent>
      <Footer />
    </>
  )
}

export default Layout
