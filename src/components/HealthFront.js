import React from 'react'
import HealthFirst from './HealthFirst'
import styled from "styled-components"




const HealthFront = ({ }) => {
    return (
        <Wrapper>
            <header className="news-front">
                <section>
                    <HealthFirst />
                </section>
            </header >
        </Wrapper>
    )
}

const Wrapper = styled.header`
  .news-front {
    background: #f3f7fd;
    position: relative;
    z-index: -1;
    padding-top: 7rem;
  }
`


export default HealthFront