import React from 'react'
import logo from '../assets/nav-logo.svg'
import { FaBars } from 'react-icons/fa'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'

const Navbar = ({ toggle }) => {

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons"></SocialLinks>
      </div>
    </nav>
  )
}

export default Navbar
