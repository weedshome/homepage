import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Typewriter from 'typewriter-effect'
import Glitch from './glitch'

class HeroPersonal extends React.Component {

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

        const Section = styled.section`
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }

        `

        const Overlay = styled.div`
        display: grid;
        justify-content: center;
        align-content: center;
        gap: 20px;
        grid-auto-flow: column;
        max-width: var(--max-width);
        margin: 0 auto;
        margin-right: auto;
        margin-left: auto;
        `

        const Heading = styled.div`
            .glitch {
                font-family: Teko;
                text-transform: uppercase;
                font-size: 150px;
                line-height: 140px;
                font-weight: 600;
                color: black;
                margin-bottom: 0;
                @media (max-width: 767px) {
                    font-size: 40px;
                    line-height: 50px;
                }
            }
        `

        const SubHeading = styled.h2`
            font-size: 18px;
            font-weight: 300;
            color: #6f9654;
            text-transform: uppercase;
            letter-spacing: 4px;
        `
        const Type = styled.div`
            font-size: 50px;
            line-height: 50px;
            color: black;
            text-transform: uppercase;
            margin-left: 6px;
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 23px;
                line-height: 20px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
            span {
                font-family: Teko;
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


        const HeadingBox = styled.div`
            height: 500px;
            width: 1170px;
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
                background: linear-gradient(120deg, #04e5e5, #6f9459, #6f9654, #6f9614, #5073b8, #1098ad, #07b39b, #6fba82);
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

        const Resume = styled.a`
            color: black;
            text-decoration: none;
            border-bottom: 2px solid;
            font-weight: 300;
            transition: .5s;
            margin-top: 40px;
            &:hover {
                color: black;
                text-decoration: none;
                border-color: #04e5e5;
            }
        `

        return (
            <Section id="home">
                <Overlay style={{ height: `${this.state.width > 500 ? this.state.height : 350}px` }}>
                    <HeadingBox className="parallax-hero-item animate">
                        <SubHeading className="parallax-hero-item">
                            Welcome on
                        </SubHeading>
                        <Heading className="parallax-hero-item">
                            <Glitch text="Weed's Home" />
                        </Heading>
                        <Type className="parallax-hero-item">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Growing Reviews',
                                        'Seed Reviews',
                                        'Strain Reviews',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Type>
                        <Resume href="./">
                            Download Resume
                        </Resume>
                    </HeadingBox>
                </Overlay>
            </Section>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
      query {
        image: file(relativePath: {eq: "background-wh5.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }      
      `}
        render={({ image }) => <HeroPersonal image={image} {...props} />}
    />
)