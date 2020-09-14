import React from 'react'
import logo from '../assets/logo.png'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
import Hamburger from './Hamburger'

const Navbar = ({ }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="mdx logo" />
      </div>
      <Links styleClass="nav-links" />
      <SocialLinks styleClass="nav-icons"></SocialLinks>
      <Hamburger pageWrapId={"page-wrap"} outerContainerId={"App"} />
    </div>
  </nav>
}

export default Navbar
