import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/wh-logo-main.png'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="weeds home" />
        </Link>
        <button className="toggle-btn" onClick={toggle}>
          <FaBars />
        </button>
      </div>
      <Links styleClass="nav-links" />
      <SocialLinks styleClass="nav-icons"></SocialLinks>
    </div>
  </nav>
}

export default Navbar
