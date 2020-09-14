import React from "react"
import { Link } from "gatsby"
import { TiArrowSortedDown } from 'react-icons/ti'


const Links = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <Link to="/" className="page-link">
        Home
        </Link>
      <Link to="/strains" className="page-link">
        Strains
        </Link>
      <div class="dropdown">
        <button class="dropbtn" className="page-link">Blog<TiArrowSortedDown /></button>
        <div class="dropdown-content">
          <Link to="/news" className="page-link">
            News
        </Link>
          <Link to="/lifestyle" className="page-link">
            Lifestyle
              </Link>
          <Link to="/health" className="page-link">
            Health
              </Link>
          <Link to="/how-to" className="page-link">
            How-To
        </Link>
          <Link to="/growing" className="page-link">
            Growing
              </Link>
        </div>
      </div>
      <Link to="/business" className="page-link">
        Business
        </Link>
      <Link to="/contact" className="page-link">
        Contact
        </Link>
    </ul>
  )
}

export default Links
