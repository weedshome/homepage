import React from 'react'
import styled from 'styled-components'
import Trending from './Trending'
import NewsletterSidebar from '../NewsBanner/Newsletter'

const ProductBanner = () => {
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
  @media (max-width: 767px) {
    grid-template-columns: none !important;
  }
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 200px);
      column-gap: 3rem;
    }
  }
`

export default ProductBanner
