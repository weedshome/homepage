import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

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

const About = () => {
    const data = useStaticQuery(query)
    return (
        <Wrapper>
            <Title title="How To's" />
            <Image fixed={data.person.childImageSharp.fixed} className="img" />
            <p>Discover the latest how to trends.</p>
            <SocialLinks styleClass="banner-icons" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
  .img.gatsby-image-wrapper {
    border-radius: 50%;
}
`
export default About
