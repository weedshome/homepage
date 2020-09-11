import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Background from './Background'
import styled, { keyframes } from "styled-components"

class HeroFront extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      width: 0
    }
  }

  updateDimensions = () => {
    if (this.state.height !== window.innerHeight) {
      this.setState({ height: window.innerHeight })
    }
    if (this.state.width !== window.innerWidth) {
      this.setState({ width: window.innerWidth })
    }
  }


  componentDidMount() {
    this.setState({ height: window.innerHeight, width: window.innerWidth })
    window.addEventListener('resize', this.updateDimensions)
    if (window.pageYOffset < window.innerHeight) {
      document.body.addEventListener('mousemove', (e) => {
        var X = (e.clientX * -.05 / 8);
        var Y = (e.clientY * -.05 / 8);
        var element = document.getElementsByClassName("parallax-hero-item");
        var i;
        for (i = 0; i < element.length; i++) {
          element[i].style.transform = `translate(${X}px, ${Y}px)`
        }
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {

    const Wrapper = styled.section`
  article {
    width: 85vw;
    max-width: 800px;
    color: var(--clr-white);
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1.25;
      margin: 2rem 0 3rem 0;
      letter-spacing: 3px;
    }
    h3 {
      font-weight: 400;
      font-family: "Caveat", cursive;
    }
    a {
      background: transparent;
      border: 2px solid var(--clr-white);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      color: var(--clr-white);
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      background: var(--clr-white);
      color: var(--clr-black);
    }
    @media (min-width: 800px) {
      /* padding: 0 1rem; */
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }
      h1 {
        letter-spacing: 5px;
      }
    }
  }
  .next-btn,
  .prev-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    background: transparent;
    color: var(--clr-white);
    border: transparent;
    cursor: pointer;
    transition: var(--transition);
    @media (min-width: 800px) {
      & {
        font-size: 4.5rem;
      }
    }
  }
  .next-btn:hover,
  .prev-btn:hover {
    color: var(--clr-primary-5);
  }
  .prev-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }
  @media (min-width: 1000px) {
    .prev-btn {
      left: 3rem;
    }
    .next-btn {
      right: 3rem;
    }
  }
  .dots {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    span {
      display: block;
      cursor: pointer;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 50%;
      background: var(--clr-white);
      margin: 0 1rem;
      border: 2px solid var(--clr-white);
      @media (min-width: 800px) {
        & {
          height: 1rem;
          width: 1rem;
        }
      }
    }
    span.active {
      background-color: transparent;
    }
  }
`
    const HeadingBox = styled.div`
            height: 500px;
            width: 900px;
            margin: auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 5px;
                background: linear-gradient(120deg, #04e5e5, #6fba82, #6fba82, #6fba82, #5073b8, #1098ad, #07b39b, #6fba82);
                background-size: 300% 300%;
                clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);
            }
            &.animate:after {
                animation: ${gradientAnimation} 2s ease-in-out infinite;
            }
            @media (max-width: 767px) {
                height: 350px;
            }
        `
    const gradientAnimation = keyframes`
        0% {
          background-position: 15% 0%;
        }
        50% {
          background-position: 85% 100%;
        }
        100% {
          background-position: 15% 0%;
        }
      `

    return (
      <header className="hero-front">
        <Wrapper>
          <Background>
            <HeadingBox className="parallax-hero-item animate">
              <article>
                <h3>Home is where the Weed is</h3>
                <h1>let your home be unique and stylish</h1>
                <Link to="/shop">Shop</Link>
              </article>
            </HeadingBox>
          </Background>
        </Wrapper>
      </header >

    )
  }

}
export default HeroFront