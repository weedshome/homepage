import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import './Business.css';
import { FaStop } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components"
import yourSVG from '../assets/weedshome-maps.svg'



const BusinessFourth = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <Wrapper>
            <section data-aos="zoom-in">

                <div className="section-fourth">

                    <div class="grid-container-fourth">
                        <div class="v-text">
                            <div class="inside-text">
                                <h3>Now Is The Time To Upgrade Your Marketing Solution</h3>
                                <p className="text-fourth-biz">Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal.</p>
                                <ul>
                                    <li className="third-space"><FaStop className="third-icon" />Understand customers and meet their requirements</li>
                                    <li className="third-space"><FaStop className="third-icon" />Targeted client base with Tivo's efficient technology</li>
                                </ul>
                            </div>
                        </div>
                        <div class="v-image">
                            <div class="inside-image">
                                <img src={yourSVG} />                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
@media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
    .grid-container-fourth {
        display: grid;
        grid-template-columns: 1f;
        grid-template-rows: 1fr;
        gap: 1px 1px;
        grid-template-areas: "third-text";
        place-items: center;
        max-width: var(--max-width);
        margin: 0 auto;  
    }
    .inside-image {
    width: 300px !important;
    }
}
    @media screen and (max-width: 767px) {
        .v-image {
            display: none;
        }
        width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
    .inside-image {
        width: auto;
        margin-top: 3rem;
        }
    }
    img {
        height: 400px;
    }
`

export default BusinessFourth