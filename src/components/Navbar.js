import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
import Hamburger from './Hamburger'

const Navbar = ({ toggle }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="mdx logo" />
        </Link>
      </div>
      <Links styleClass="nav-links" />
      <SocialLinks styleClass="nav-icons"></SocialLinks>
      <Hamburger pageWrapId={"page-wrap"} outerContainerId={"App"} />
    </div>
  </nav>
}

export default Navbar
