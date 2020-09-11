import React from 'react'
import SocialLinks from '../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'


const query = graphql`
  {
    person: file(relativePath: {eq: "wh-banner.jpg"}) {
      childImageSharp {
        fixed (width:100, height:100){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const BeforeFooter = () => {
    const data = useStaticQuery(query)
    return <div className="grid-container">
        <div className="grid-1">
            <h4 className="footer-big-text">Highlights</h4>
            <div className="underline-footer"></div>
            <ul className="social-list">
                <Image fixed={data.person.childImageSharp.fixed} className="img footer-logo" />
                <p class="footer-text">Discover the latest cannabis news, lifestyle tips, education and more around cannabis.</p>
            </ul>
        </div>

        <div className="grid-2">
            <h4 className="footer-big-text">Resources</h4>
            <div className="underline-footer"></div>
            <ul className="social-list">
                <li className="list-inline-item"><a href="" className="footer-tx">FAQs</a></li>
                <li className="list-inline-item"><a href="" className="footer-tx">Blog</a></li>
                <li className="list-inline-item"><a href="" className="footer-tx">Support</a></li>
                <li className="list-inline-item"><a href="" className="footer-tx">Developers APIs</a></li>
            </ul>
        </div>

        <div className="grid-3">
            <h4 className="footer-big-text">Legal</h4>
            <div className="underline-footer"></div>
            <ul className="social-list">
                <li className="list-inline-item"><a href="" className="footer-tx">Privacy</a></li>
                <li className="list-inline-item"><a href="" className="footer-tx">Terms of Services</a></li>
                <li className="list-inline-item"><a href="" className="footer-tx">Security</a></li>
                <li className="list-inline-item"><a href="" className="footer-tx">My Personal Info</a></li>
            </ul>
        </div>

        <div className="grid-4">
            <h4 className="footer-big-text">Stay Connnected</h4>
            <div className="underline-footer"></div>
            <ul className="social-list">
                <li className="list-inline-item"><a href="" className="footer-tx">Our Story</a></li>
                <li className="list-inline-item"><a href="" className="footer-tx">Pricing</a></li>
                <li className="list-inline-item"><a href="" className="footer-tx">Contact</a></li>
                <li className="list-inline-item"><a href="" className="footer-tx">Jobs</a></li>
            </ul>
        </div>
    </div>
}

export default BeforeFooter

