import React from "react"
import { Link } from "gatsby"
import { TiArrowSortedDown } from 'react-icons/ti'


const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/strains" className="page-link">
          Strains
        </Link>
      </li>
      <li>
        <div class="dropdown">
          <button class="dropbtn" className="page-link">Blog<TiArrowSortedDown /></button>
          <div class="dropdown-content">
            <li>
              <Link to="/news" className="page-link">
                News
        </Link>
            </li>
            <li>
              <Link to="/lifestyle" className="page-link">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link to="/health" className="page-link">
                Health
              </Link>
            </li>
            <li>
              <Link to="/how-to" className="page-link">
                How-To
        </Link>
            </li>
            <li>
              <Link to="/growing" className="page-link">
                Growing
              </Link>
            </li>
          </div>
        </div>
      </li>
      <li>
        <Link to="/business" className="page-link">
          Business
        </Link>
      </li>
      <li>
        <Link to="/contact" className="page-link">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Links
