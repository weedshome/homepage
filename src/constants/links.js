import React from "react"
import { Link } from "gatsby"
import { TiArrowSortedDown } from 'react-icons/ti'


const Links = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <div className="list-item">
        <Link to="/" className="page-link">
          Home
        </Link>
      </div>
      <div className="list-item">
        <Link to="/strains" className="page-link">
          Strains
        </Link>
      </div>
      <div class="dropdown">
        <button class="dropbtn" className="page-link">Blog<TiArrowSortedDown /></button>
        <div class="dropdown-content">
          <div className="list-item">
            <Link to="/news" className="page-link">
              News
        </Link>
          </div>
          <div className="list-item">
            <Link to="/lifestyle" className="page-link">
              Lifestyle
              </Link>
          </div>
          <div className="list-item">
            <Link to="/health" className="page-link">
              Health
              </Link>
          </div>
          <div className="list-item">
            <Link to="/how-to" className="page-link">
              How-To
        </Link>
          </div>
          <div className="list-item">
            <Link to="/growing" className="page-link">
              Growing
              </Link>
          </div>
        </div>
      </div>
      <Link to="/business" className="page-link">
        Business
        </Link>
      <Link to="/about" className="page-link">
        About
        </Link>
      <Link to="/contact" className="page-link">
        Contact
        </Link>
    </ul>
  )
}

export default Links
