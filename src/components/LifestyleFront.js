import React from 'react'
import LifestyleFirst from './LifestyleFirst'
import styled from "styled-components"



const LifestyleFront = ({ }) => {
    return (
        <Wrapper>
            <header className="lifestyle-front">
                <section>
                    <LifestyleFirst />
                </section>
            </header >
        </Wrapper>
    )
}

const Wrapper = styled.header`
  .lifestyle-front {
    background: #f3f7fd;
    position: relative;
    z-index: -1;
    padding-top: 7rem;
  }
`


export default LifestyleFront