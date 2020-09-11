import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import './Herofront.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const query = graphql`
  {
    description: file(relativePath: {eq: "automation.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    descriptions: file(relativePath: {eq: "list-building-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      descriptionss: file(relativePath: {eq: "marketing-concept.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

const BusinessSecond = ({ }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  const { description, descriptions, descriptionss } = useStaticQuery(query)
  return (
    <section data-aos="fade-right">
      <div className="second-pad">
        <div className="hero-info-2">
          <div className="above-heading">DESCRIPTION</div>
          <h2 className="h2-heading">Marketing Automation Will Bring More Qualified Leads</h2>
        </div>

        <div class="grid-container-hero">
          <div className="b-1">
            <div className="b-text-1">
              <div className="hero-image-x">
                <Image fluid={description.childImageSharp.fluid} />
              </div>
              <h4 className="card-title">Lists Builder</h4>
              <p className="card-text">It's very easy to start creating email lists for your marketing actions. Just create your Tivo.</p>
            </div>
          </div>
          <div className="b-2">
            <div className="b-text-2">
              <div className="hero-image-x">
                <Image fluid={descriptions.childImageSharp.fluid} />
              </div>
              <h4 className="card-title">Campaign Tracker</h4>
              <p className="card-text">Campaigns is a feature we've developed since the beginning because it's at the core of Tivo's.</p>
            </div>
          </div>
          <div className="b-3">
            <div className="b-text-3">
              <div className="hero-image-x">
                <Image fluid={descriptionss.childImageSharp.fluid} />
              </div>
              <h4 className="card-title">Analytics Tool</h4>
              <p className="card-text">Tivo collects customer data in order to help you analyse different situations and take required.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}


export default BusinessSecond