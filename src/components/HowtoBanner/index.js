import React from 'react'
import styled from 'styled-components'
import Trending from './Trending'
import NewsletterSidebar from '../NewsBanner/Newsletter'

const HowtoBanner = () => {
  return (
    <Wrapper>
      <NewsletterSidebar />
      <Trending />
    </Wrapper>
  )
}



const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 250px !important;
  justify-content: center;
  row-gap: 1rem;
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 200px);
      column-gap: 3rem;
    }
  }
  @media (max-width: 767px) {
    grid-template-columns: auto !important;
    padding-top: 2rem;
  }
`

export default HowtoBanner
