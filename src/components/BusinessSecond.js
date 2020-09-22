import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components"

const query = graphql`
  {
    description: file(relativePath: {eq: "automation2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    descriptions: file(relativePath: {eq: "list-building-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      descriptionss: file(relativePath: {eq: "marketing-concept-2.png" }) {
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
    <Wrapper>
      <section data-aos="fade-right">
        <div className="second-pad">
          <div className="hero-info-2">
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 85vw;
max-width: var(--max-width);
margin: 0 auto;
padding-top: 6rem;
.grid-container-hero {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px 20px;
  grid-template-areas: "b-1 b-2 b-3";
  place-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
}
.b-1 {
  display: grid;
  grid-template-columns: ;
  grid-template-rows: ;
  gap: 1px 1px;
  grid-template-areas: "b-text-1";
  grid-area: b-1;
  background: white;
  border-radius: 10px;
}

.b-text-1 { grid-area: b-text-1; }

.b-2 {
  display: grid;
  grid-template-columns: ;
  grid-template-rows: ;
  grid-template-areas: "b-text-2";
  grid-area: b-2;
  background: white;
  border-radius: 10px;
}

.b-text-2 { grid-area: b-text-2; }

.b-3 {
  display: grid;
  grid-template-columns: ;
  grid-template-rows: ;
  grid-template-areas: "b-text-3";
  grid-area: b-3;
  background: white;
  border-radius: 10px;
}

.b-text-3 { grid-area: b-text-3; }

.b-text-1 {
  grid-area: b-text-1;
  margin: 0 auto;
  text-align: center;
}

.b-text-2 {
  grid-area: b-text-1;
  margin: 0 auto;
  text-align: center;
}

.b-text-3 {
  grid-area: b-text-1;
  margin: 0 auto;
  text-align: center;
}
.hero-image-x {
  width: 12.5rem;
  float: center;
  margin: 0 auto;
  margin-bottom: 2rem;
}
.card-title {
  text-transform: uppercase;
  font-weight: 500;
  color: #102a42;
  padding: 0 0.6rem;
  display: inline-block;
}
.card-text {
  color: hsl(209deg 61% 16%);
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: var(--spacing);
    padding: 20px;
}
.h2-heading {
  margin: 0 auto;
  width: 50%;
  padding-bottom: 3rem;
}

@media screen and (max-width: 767px) {
  .grid-container-hero {
    display: block;
    padding: 20px;
}
.b-1 {
  margin-bottom: 1rem;
}
.b-2 {
  margin-bottom: 1rem;
}
.b-3 {
  margin-bottom: 1rem;
}
h2.h2-heading {
  font-size: 20px;
  width: 100% !important;
}
}
`


export default BusinessSecond