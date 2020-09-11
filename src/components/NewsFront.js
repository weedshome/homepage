import React from 'react'
import './Herofront.css'
import NewsFirst from './NewsFirst'
import styled from "styled-components"



const NewsFront = ({ }) => {
    return (
        <Wrapper>
            <header className="lifestyle-front">
                <section>
                    <NewsFirst />
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


export default NewsFront