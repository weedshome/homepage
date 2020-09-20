import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/weeds-home-logo.png'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
import Hamburger from './Hamburger'

const Navbar = ({ }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="weeds home" />
        </Link>
      </div>
      <Links styleClass="nav-links" />
      <SocialLinks styleClass="nav-icons"></SocialLinks>
      <div className="hamburger-section">
        <Hamburger pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </div>
    </div>
  </nav>
}

export default Navbar
