import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import CookieConsent from 'react-cookie-consent';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics">
        This website stores cookies on your computer. These cookies are used to collect information about how you interact with this website and allow us to remember you.
        <br />
        We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors on this website.
</CookieConsent>
    </>
  )
}

export default Layout
