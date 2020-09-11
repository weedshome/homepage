import React, { useState } from 'react';
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import styled from '@emotion/styled'
import SocialLinks from '../constants/socialLinks'
import logo from '../assets/logo.png'



export default () => {

    const [menuState, setMenuOpen] = useState({ menuOpen: false });

    const closeMenu = () => {
        setMenuOpen({ menuOpen: false })
    }

    return (
        <>
            <TopNav className="sticky-top">
                <SideMenu>
                    <Menu isOpen={menuState.menuOpen}>
                        <h3 className="menu-header">Featured Categories</h3>
                        <Link className="menu-item8" to="/" onClick={() => closeMenu()}>
                            Home
                </Link>
                        <Link className="menu-item1" to="/strains" onClick={() => closeMenu()}>
                            Strains
                </Link>
                        <h3 className="menu-header">Blog Links</h3>
                        <Link className="menu-item3" to="/news" onClick={() => closeMenu()}>
                            News
                </Link>

                        <Link className="menu-item4" to="/lifestyle" onClick={() => closeMenu()}>
                            Lifestyle
                </Link>

                        <Link className="menu-item5" to="/health" onClick={() => closeMenu()}>
                            Health
                </Link>

                        <Link className="menu-item6" to="/how-to" onClick={() => closeMenu()}>
                            How-To
                </Link>
                        <Link className="menu-item7" to="/growing" onClick={() => closeMenu()}>
                            Growing
                </Link>
                        <h3 className="menu-header">Website Links</h3>
                        <Link className="menu-item" to="/business" onClick={() => closeMenu()}>
                            Business
                </Link>
                        <Link className="menu-item" to="/about" onClick={() => closeMenu()}>
                            About Us
                </Link>
                        <Link className="menu-item" to="/contact" onClick={() => closeMenu()}>
                            Contact
                </Link>
                        <Link className="menu-item" to="/impressum" onClick={() => closeMenu()}>
                            Impressum
                </Link>
                        <Link className="menu-item" to="/advertise" onClick={() => closeMenu()}>
                            Advertise
                </Link>
                        <Link className="menu-item" to="/terms" onClick={() => closeMenu()}>
                            Terms
                </Link>
                        <Link className="menu-item" to="/privacy" onClick={() => closeMenu()}>
                            Privacy
                </Link>
                        <h3 className="menu-header">Social Links</h3>
                        <SocialLinks styleClass="banner-icons" />
                    </Menu>
                </SideMenu>

            </TopNav>
        </>

    )
}

const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fafafa;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1101;
  top: 0;
  width: 100vw;
`
const Logo = styled.div`
  padding: 1em 1em 0 1em;
`

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin-top: 1em;
  a {
    color: #888;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    font-size: 1em;
    &:hover {
      color: #333;
    }
  }
  @media(max-width: 721px) {
    display: none;
  }
`

const SideMenu = styled.div`
    /* Individual item */
    .bm-item {
      display: inline-block;
      /* Our sidebar item styling */
      text-decoration: none;
      margin-bottom: 10px;
      color: #d1d1d1;
      transition: color 0.2s;
    }
    /* Change color on hover */
    .bm-item:hover {
      color: white;
    }
    /* The rest copied directly from react-burger-menu docs */
    /* Position and sizing of burger button */
    .bm-burger-button {
      position: fixed;
      width: 26px;
      height: 20px;
      right: 36px;
      top: 14px;
    }
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #373a47;
    }
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }
    /* General sidebar styles */
    .bm-menu {
      background: #373a47;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }
    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
    }
    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .banner-icons {
        display: flex;
        justify-content: left;
    }
    .menu-item {
        font-family: poppins;
        font-size: 12px;
        letter-spacing: var(--spacing);
    }
    .menu-item1 {
        font-family: poppins;
        font-size: 12px;
        letter-spacing: var(--spacing);
       }
    .menu-item2 {
     padding-top: 1rem;
     font-family: poppins;
     font-size: 12px;
     letter-spacing: var(--spacing);
    }
    .menu-item3 {
    font-family: poppins;
    font-size: 12px;
    letter-spacing: var(--spacing);
    }
    .menu-item4 {
        font-family: poppins;
        font-size: 12px;
        letter-spacing: var(--spacing);
    }
    .menu-item5 {
        font-family: poppins;
        font-size: 12px;
        letter-spacing: var(--spacing);
    }
    .menu-item6 {
        font-family: poppins;
        font-size: 12px;
        letter-spacing: var(--spacing);
    }
    .menu-item7 {
        font-family: poppins;
        font-size: 12px;
        letter-spacing: var(--spacing);
    }
    .menu-item8 {
        font-family: poppins;
        font-size: 12px;
        letter-spacing: var(--spacing);
    }
    .menu-header {
        font-weight: 600 !important;
        letter-spacing: var(--spacing);
        font-size: 17px !important;
        font-family: Poppins !important;
        padding-bottom: 0.2rem !important;
        padding-top: 0.8rem !important;
        color: #6f9654;
    }
`

