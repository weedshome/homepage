import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components"



const LifestyleFirst = ({ }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <Wrapper>
            <section data-aos="fade-right">
                <div className="second-pad">
                    <div className="hero-info-2">
                        <div className="above-heading">Cannabis Lifestyle</div>
                        <h2 className="h2-heading">Searching for reliable cannabis growing gear?</h2>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  .second-pad {
    padding-bottom: 4rem;
  }
`


export default LifestyleFirst