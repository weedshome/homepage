import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return <footer className="footer">

    <div>
      <SocialLinks styleClass="footer-icons" />
      <p className="footer-copyright">
        &copy;{new Date().getFullYear()} Weed's Home. All rights reserved
      </p>
    </div>
  </footer>
}

export default Footer
