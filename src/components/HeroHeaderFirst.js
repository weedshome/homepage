import React, { useEffect } from 'react';
import { Link } from 'gatsby'
import './Business.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components"
import EmailBg from '../assets/background-home.svg'
import MobileBg from '../assets/mobileBg2.svg'


const HeroHeaderFirst = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <Wrapper data-aos="fade-up">
      <section>
        <div className="home-width">
          <div class="grid-container-business">
            <div class="k-1">
              <div class="k-title">
                <h2 className="business-title">Learn more about the plant</h2>
              </div>
              <p className="business-text">Use Weed's Home to automate your marketing actions in order to reach a much larger audience.</p>
              <div className="buttons-header">
                <Link className="link" to="/business/">
                  <p class="button-first">Get started here</p>
                </Link>
                <Link className="link" to="/strains/">
                  <p class="button-second">Search Strains</p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
scroll-snap-align: center;
height: 100vh;
min-height: 36rem;
background:
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) /2 )
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
@media screen and (min-width: 1024px) {
.grid-container-business {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    grid-template-areas: "k-1 k-2";
    place-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
  .k-1 {
    padding-bottom: 3.5rem;
   }
   .business-title {
    font-size: 3rem;
    line-height: 3.4rem;
    margin-bottom: 1rem;
    color: #102a42;
  }

  .buttons-header {
    box-sizing: border-box;
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
  .button-second {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background: #FFFFFF;
    border-color: #3d796d;
    color: #3d796d;
    font-size: 15px;
    padding: 12px 16px;
    margin-right: 24px;
    background-color: transparent;
  }
  p.business-text {
    margin: 0 auto;
    padding: 5px;
    display: block;
    letter-spacing: var(--spacing);
    color: hsl(209deg 61% 16%);
    line-height: 1.8;
    text-transform: none;
    border-radius: var(--radius);
  }
}


@media screen and (min-width: 768px) and (max-width: 1023px) {
  .grid-container-business {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    grid-template-areas: "k-1 k-2";
    place-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    padding-top: 6rem;
    padding-bottom: 3rem;
    width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .k-1 {
    padding-bottom: 20px;
}
.business-title {
    font-size: 1.5rem;
    line-height: 2.4rem;
    margin-bottom: 0.5rem;
    color: #102a42;
  }
   p.business-text {
    margin: 0 auto;
    padding: 5px;
    display: block;
    letter-spacing: var(--spacing);
    color: hsl(209deg 61% 16%);
    line-height: 1.8;
    font-size: 12px !important;
    text-transform: none;
    border-radius: var(--radius);
  }
  .business-hero-image {
    width: 300px;
  }

  .business-image-container {
    margin-top: 1rem;
    margin-left: 1.5rem;
  }
  .buttons-header {
    box-sizing: border-box;
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
    font-size: 13px;
    padding: 12px 16px;
    margin-right: 24px;
  }
  .button-second {
    border: 2px solid;
    display: inline-block;
    border-radius: 8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    background: #FFFFFF;
    border-color: #3d796d;
    color: #3d796d;
    font-size: 13px;
    padding: 12px 16px;
    margin-right: 24px;
    background-color: transparent;
  }
}


@media screen and (max-width: 767px) {
  scroll-snap-align: center;
  height: 100vh;
  min-height: 36rem;
  background:
      url(${MobileBg}) no-repeat center;
      background-size: cover;
      width: 100%;
      padding: 5rem calc((100vw - 1300px) /2 )
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    .grid-container-business {
      width: 100% !important;
      display: grid !important;
      grid-template-columns:  1fr !important;
      grid-template-rows: 1fr !important;
      gap: 1px 1px !important;
      grid-template-areas: "k-1" !important;
      padding: 2rem;
      padding-bottom: 3rem;
      padding-top: 0rem;
    }
    .business-hero-image {
      width: 300px;
      margin: 0 auto
    }
    .business-title {
      line-height: 2.4rem;
      margin-bottom: 1rem;
      color: #102a42;
      text-align: left;
    }
    p.business-text {
      margin: 0 auto;
      padding: 5px;
      display: block;
      letter-spacing: var(--spacing);
      color: hsl(209deg 61% 16%);
      line-height: 1.8;
      text-transform: none;
      border-radius: var(--radius);
      text-align: left;
    }
    .buttons-header {
      box-sizing: border-box;
      justify-content: center;
      min-width: 0;
      margin-top: 32px;
      margin-bottom: 32px;
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
      font-size: 11px;
      padding: 12px 16px;
      margin-right: 24px;
    }
    .button-second {
      border: 2px solid;
      display: inline-block;
      border-radius: 8px;
      letter-spacing: 0.02em;
      cursor: pointer;
      font-weight: 500;
      line-height: 1;
      background: #FFFFFF;
      border-color: #3d796d;
      color: #3d796d;
      font-size: 11px;
      padding: 12px 16px;
      margin-right: 24px;
      background-color: transparent;
    }
  }
`


export default HeroHeaderFirst