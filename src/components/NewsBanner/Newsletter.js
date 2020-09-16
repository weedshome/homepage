import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components'
import Title from './Title'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import SocialLinks from '../../constants/socialLinks'

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

const Newsletter = () => {
    const data = useStaticQuery(query)
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <Wrapper>
            <Title title="Newsletter" />
            <section data-aos="flip-left">
                <div class="grid-container-newsletter">
                    <div class="newsletter">
                        <div class="newsletter-inside">
                            <section className="newsletter-page">
                                <div className="page-center">
                                    <Image fixed={data.person.childImageSharp.fixed} className="img" />
                                    <h2 className="newsletter-title">Get all the latest stories to your inbox</h2>
                                    <p className="newsletter-terms">I've read and agree to Weed's Home written I've read and agree to Weed's Home written.I've read and agree to Weed's Home written.</p>
                                    <form className="contact-form" name="test-contact" method="post" netlify-honeypot="bot-field" data-netlify="true" action="/success">
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="testing-contact" />
                                        <input type="text" name="name" placeholder="Your name" className="form-control" />
                                        <input type="email" name="email" placeholder="Your email" className="form-control" />
                                        <button type="submit" className="btn form-control submit-btn"> subscribe</button>
                                    </form>
                                    <p className="newsletter-terms">I've read and agree to Weed's Home written <a href="/">Privacy Policy</a> and <a href="/">Terms Conditions.</a></p>
                                    <SocialLinks styleClass="banner-icons" />
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.grid-container-newsletter {
    display: grid;
    grid-template-areas: "newsletter";
    place-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-right: auto;
    margin-left: auto;
}
.newsletter {
    display: grid;
    grid-template-columns: ;
    grid-template-rows: ;
    grid-template-areas: "newsletter-inside";
    grid-area: newsletter;
  }
  
  .newsletter-inside { grid-area: newsletter-inside; }
  
  .newsletter-terms {
    padding: 20px;
  }
  
  .newsletter-title {
    margin-bottom: 2.75rem !important;
  }
  .page-center {
    width: fit-content;
  }
  h2.newsletter-title {
    font-size: 1rem;
    margin-bottom: 0rem !important;
}
h4.newsletter-terms {
    font-size: 12px !important;
    font-weight: 500 !important;
}
form.contact-form {
}
.img {
    border-radius: 50%;
  }
  .img.gatsby-image-wrapper {
    border-radius: 50%;
}
.img.gatsby-image-wrapper {
    margin-bottom: 1rem !important;
}
h2.newsletter-title {
    color: white;
}
form.contact-form {
    width: 220px;
    margin: 0 auto;
}
.form-control {
    font-size: 0.7rem;
}
`

export default Newsletter