import React from 'react'
import styled from 'styled-components'
import Trending from './Trending'

const NewsBanner = () => {
  return (
    <Wrapper>
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
`

export default NewsBanner
