import React, { useEffect } from 'react';
import './Business.css';
import styled from "styled-components"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../components/ContactForm'


const BusinessSix = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <Wrapper>
            <section data-aos="fade-right">
                <div className="section-third">
                    <div className="section-width">
                        <div className="hero-info-2">
                            <h2 className="h2-heading">Contact Us</h2>
                        </div>
                        <section id="contactUs" className="main special">
                            <div className="major">
                                <ContactForm></ContactForm>
                            </div>
                        </section>
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
padding-bottom: 6rem;
button {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #3d796d;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 15px;
    padding: 12px 16px;
    margin-top: 1rem;
}
input#fromEmail {
    border: solid 2px #102a42;
    padding: 10px;
}
input#subject {
    border: solid 2px #102a42;
    padding: 10px;
}
input#website {
    border: solid 2px #102a42;
    padding: 10px;
}
textarea#body {
    border: solid 2px #102a42;
}
form {
    margin: 0 auto;
    display: block;
}
input#name {
    width: 100%;
    min-height: 2.8rem;
    padding: 0 4.6rem 0 1.5rem;
    border: 0;
    color: #3f7e72;
    text-align: left;
    font-weight: 400;
    letter-spacing: var(--spacing);
    font-size: .8rem;
    transition: var(--transition);
    cursor: pointer;
    border-radius: var(--radius);
}
input#website {
    width: 100%;
    min-height: 2.8rem;
    padding: 0 4.6rem 0 1.5rem;
    border: 0;
    color: #3f7e72;
    text-align: left;
    font-weight: 400;
    letter-spacing: var(--spacing);
    font-size: .8rem;
    transition: var(--transition);
    cursor: pointer;
    border-radius: var(--radius);
}
input#subject {
    width: 100%;
    min-height: 2.8rem;
    padding: 0 4.6rem 0 1.5rem;
    border: 0;
    color: #3f7e72;
    text-align: left;
    font-weight: 400;
    letter-spacing: var(--spacing);
    font-size: .8rem;
    transition: var(--transition);
    cursor: pointer;
    border-radius: var(--radius);
}

label {
    letter-spacing: var(--spacing);
    color: hsl(209deg 61% 16%);
    line-height: 1.8;
    font-size: 12px;
    text-transform: none;
    border-radius: var(--radius);
    padding-top: 2rem;
}
.buttons-header {
                        box - sizing: border-box;
    margin: 0;
    min-width: 0;
    margin-top: 32px;
    display: flex;
  }
  .button-first {
                        border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #3d796d;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 15px;
    padding: 12px 16px;
    margin-right: 24px;
  }
@media screen and (min-width: 768px) and (max-width: 1023px) {
                        padding - bottom: 0rem;
.section-width {
                        width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 4rem;
}

.third-text-box {
                        padding - top: 2rem;
}
.third-image {
                        width: 300px;
}
.button-first {
                        border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background-color: #3d796d;
    box-shadow: 0 3px 8px rgba(0,0,0,0.09);
    border-color: transparent;
    color: #FFFFFF;
    font-size: 11px;
    padding: 12px 16px;
  }
  }


  @media screen and (max-width: 767px) {
    .section - width {
                        width: 85vw;
        max-width: var(--max-width);
        margin: 0 auto;
    }

    .third-text-box {
                        padding - top: 2rem;
    }
    h2.h2-heading {
                        font - size: 1.5rem;
    }
    .section-third {
                        padding - bottom: 12rem;
    }
    .button-first {
                        border: 2px solid;
        display: inline-block;
        border-radius: 8px;
        letter-spacing: 0.02em;
        cursor: pointer;
        font-weight: 500;
        line-height: 1;
        background-color: #3d796d;
        box-shadow: 0 3px 8px rgba(0,0,0,0.09);
        border-color: transparent;
        color: #FFFFFF;
        font-size: 11px;
        padding: 12px 16px;
        margin: 0 auto;
      }
    }
`

export default BusinessSix