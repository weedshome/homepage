import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import './Business.css';
import { FaStop } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/tabs.css'
import { FaList, FaMailBulk, FaRegChartBar } from 'react-icons/fa'

const query = graphql`
  {
    featuresThird: file(relativePath: {eq: "solution.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuresThirdTwo: file(relativePath: {eq: "header-image-business.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BusinessThird = ({ }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  const { featuresThird, featuresThirdTwo } = useStaticQuery(query)
  return (
    <section data-aos="fade-left">
      <div className="section-third">
        <div className="hero-info-2">
          <div className="above-heading">DESCRIPTION</div>
          <h2 className="h2-heading">Marketing Automation</h2>
          <p className="third-para">Take your business strategy to the next level and automatize your marketing tasks to save time for product development. Tivo can provide results in less than 2 weeks</p>
        </div>
        <Tabs>
          <TabList>
            <Tab><FaList className="icon-tabs"></FaList>List Builder</Tab>
            <Tab><FaMailBulk className="icon-tabs"></FaMailBulk>Campaigns</Tab>
            <Tab><FaRegChartBar className="icon-tabs"></FaRegChartBar>Analytics</Tab>
          </TabList>

          <TabPanel>
            <div class="grid-container-third">
              <div class="third-image">
                <div class="image-third">
                  <Image fluid={featuresThird.childImageSharp.fluid} />
                </div>
              </div>
              <div class="third-text">
                <div class="third-text-box">
                  <h3>Cannabis Marketing Automation</h3>
                  <p>Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
                  <ul>
                    <li className="third-space"><FaStop className="third-icon" />Understand customers and meet their requirements</li>
                    <li className="third-space"><FaStop className="third-icon" />Targeted client base with Tivo's efficient technology</li>
                  </ul>
                  <button className="third-button">Learn More</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="grid-container-third">
              <div class="third-image">
                <div class="image-third">
                  <Image fluid={featuresThirdTwo.childImageSharp.fluid} />
                </div>
              </div>
              <div class="third-text">
                <div class="third-text-box">
                  <h3>Marketing Campaigns</h3>
                  <p>Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
                  <ul>
                    <li className="third-space"><FaStop className="third-icon" />Understand customers and meet their requirements</li>
                    <li className="third-space"><FaStop className="third-icon" />Targeted client base with Tivo's efficient technology</li>
                  </ul>
                  <button className="third-button">Learn More</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="grid-container-third">
              <div class="third-image">
                <div class="image-third">
                  <Image fluid={featuresThird.childImageSharp.fluid} />
                </div>
              </div>
              <div class="third-text">
                <div class="third-text-box">
                  <h3>Marketing Analytics</h3>
                  <p>Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
                  <ul>
                    <li className="third-space"><FaStop className="third-icon" />Understand customers and meet their requirements</li>
                    <li className="third-space"><FaStop className="third-icon" />Targeted client base with Tivo's efficient technology</li>
                  </ul>
                  <button className="third-button">Learn More</button>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>

    </section>
  )
}


export default BusinessThird