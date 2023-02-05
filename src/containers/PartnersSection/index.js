import React from 'react'
import { Image } from 'react-bootstrap'
import logo01 from '../../assets/images/partners/pic_logo_01.png';
import logo02 from '../../assets/images/partners/pic_logo_02.png';
import logo03 from '../../assets/images/partners/pic_logo_03.png';

//slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
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
        <Slider className="partnersList" {...settings}>
            <div className="partnersList__item hover-grayscale">
                <a href='' title=''>
                    <Image className="img-baner-right" src={logo01} fluid alt="logo" />
                </a>
            </div>
            <div className="partnersList__item hover-grayscale">
                <a href='' title=''>
                    <Image className="img-baner-right" src={logo02} fluid alt="logo" />
                </a>
            </div>
            <div className="partnersList__item hover-grayscale">
                <a href='' title=''>
                    <Image className="img-baner-right" src={logo03} fluid alt="logo" />
                </a>
            </div>
        </Slider>
    );
};

const PartnersSection = () => (
    <div className='partners_section'>
        <div className='container'>
            <h2 className='heading_section'>Our partners</h2>
            <Responsive />
        </div>
    </div>
)
export default PartnersSection