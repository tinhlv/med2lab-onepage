import React from 'react'
import { Image } from 'react-bootstrap'
import logo01 from '../../assets/images/solutions/pic_solution_01.png';
import logo02 from '../../assets/images/solutions/pic_solution_02.png';

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
        <Slider className="solutionsList" {...settings}>
            <div className="solutionsList__item hover-grayscale">
                <a href='https://www.ucr.med2lab.com' target="_blank" title='UCR - An Interactive Curriculum For Universal Clinical Reasoning'>
                    <Image className="img-baner-right" src={logo01} fluid alt="ucr" />
                </a>
            </div>
            <div className="solutionsList__item hover-grayscale">
                <a href='https://www.kachi.med2lab.com' target="_blank" title='kachi.med2lab.com'>
                    <Image className="img-baner-right" src={logo02} fluid alt="kachi" />
                </a>
            </div>
        </Slider>
    );
};

const OurSolutionsSection = () => (
    <section className='solutions_section'>
        <div className='container'>
            <h2 className='heading_section'>Our Solutions</h2>
            <Responsive />
        </div>
    </section>
)
export default OurSolutionsSection