import React, { useEffect } from 'react';
import './Herofront.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components"



const HealthFirst = ({ }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <Wrapper>
            <section data-aos="fade-right">
                <div className="second-pad">
                    <div className="hero-info-2">
                        <div className="above-heading">Cannabis Health</div>
                        <h2 className="h2-heading">Everything related to cannabis and health</h2>
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


export default HealthFirst