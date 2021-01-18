import React from 'react'
import Links from '../constants/links'
import { IoMdClose } from 'react-icons/io'
import EmailBg from '../assets/mobileBg.png'
import styled from 'styled-components'

const Sidebar = ({ isOpen, toggle }) => {
  return <Wrapper><aside className={`sidebar sidebarBG ${isOpen ? 'showSidebar' : ''}`}>
    <button className="close-btn" onClick={toggle}>
      <IoMdClose />
    </button>
    <div className="sidebar-container">
      <Links styleClass="sidebar-links" />
    </div>
  </aside>
  </Wrapper>
}

const Wrapper = styled.div`
@media screen and (max-width: 767px) {
.sidebarBG {
scroll-snap-align: center;
height: 100vh;
min-height: 36rem;
background:
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    width: 100%;
    color: #fff;
    display: flex;
}
}
`

export default Sidebar