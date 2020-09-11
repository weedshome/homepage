import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import { graphql } from "gatsby"
import Image from 'gatsby-image';

class StrainSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        };
        return (
            <Wrapper>
                <div className="image-slider">
                    <h2 class="slider-title"> Strain Image Gallery </h2>
                    <Slider {...settings}>
                        <div className="inside-image">
                            <h3>1</h3>
                        </div>
                        <div className="inside-image">
                            <h3>2</h3>
                        </div>
                        <div className="inside-image">
                            <h3>3</h3>
                        </div>
                        <div className="inside-image">
                            <h3>4</h3>
                        </div>
                        <div className="inside-image">
                            <h3>5</h3>
                        </div>
                        <div className="inside-image">
                            <h3>6</h3>
                        </div>
                        <div className="inside-image">
                            <h3>7</h3>
                        </div>
                        <div className="inside-image">
                            <h3>8</h3>
                        </div>
                    </Slider>
                </div>
            </Wrapper>
        );
    }
}

const StyledImage = styled(Image)`
border-radius: 1rem;
max-width: 80rem;
margin: 0 auto;
margin-bottom: 2rem;
`;
const query = graphql`
query GetSingleStrain($slug: String){
    strain: contentfulStrains(slug: {eq: $slug}) {
      title
      price
      rating
      image {
        fixed(width: 400 height: 200) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

const Wrapper = styled.section`
        .image-slider {
            width: 1150px !important;
            background: white;
        }
        .inside-image {
            height: 150px;
            padding: 3px;
            background: #6e9654;
        }
        .inside-image {
            width: 98% !important;
        }
        .slick-prev {
            left: -35px !important;
        }
        .slick-prev.slick-disabled:before {
            color: #6e9654 !important;
            opacity: inherit !important;
            font-size: 25px;
        }
        .slick-next:before {
            color: #6e9654 !important;
            opacity: inherit !important;
            font-size: 25px;
        }
        .slick-prev:before {
            color: #6e9654 !important;
            opacity: inherit !important;
            font-size: 25px;
        }
        .slider-title {
            font-size: 20px;
            padding-top: 1rem;
        }
        .slick-dots li.slick-active button:before {
            opacity: .75;
            color: #6e9654;
            font-size: 10px;
        }
        .slick-dots li button:before {
            font-size: 10px;
        }
        `

export default StrainSlider
