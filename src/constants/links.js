import React from "react"
import { Link } from "gatsby"

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
        <Link to="/dispensaries" className="page-link">
          Maps
        </Link>
      </li>
      <li>
        <Link to="/blog" className="page-link">
          Learn
        </Link>
      </li>
      <li>
        <Link to="/business" className="page-link">
          Business
        </Link>
      </li>
      <li>
        <Link to="/about" className="page-link">
          About
        </Link>
      </li>
    </ul>
  )
}

export default Links
