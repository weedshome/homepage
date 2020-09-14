import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/logo.png'
import SocialLinks from '../constants/socialLinks'
import Hamburger from './Hamburger'

const Navbar = ({ }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="mdx logo" />
        </Link>
      </div>
      <SocialLinks styleClass="nav-icons"></SocialLinks>
      <Hamburger pageWrapId={"page-wrap"} outerContainerId={"App"} />
    </div>
  </nav>
}

export default Navbar
