import React, { useState } from 'react';
import '../slideshow/slideshow.css';
import hand from '../slideshow/images/slide1.png';
import orb from '../slideshow/images/slide2.png';
import mount from '../slideshow/images/slide3.png';
import pp from '../slideshow/images/past-logos.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
    const slides = [
        { id: 1, photo: hand, text: 'Undergrad Network: Developed this website from scratch, including a fully functional networking platform' },
        { id: 2, photo: orb, text: 'Derby Management: Performed blog analytics to increase inbound leads, and worked within their HubSpot CRM to generate insightful performance analytics' },
        { id: 3, photo: mount, text: 'Evans Brothers Consulting: Primarily did UI/UX work to improve the look and feel of the website' },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleAfterChange = (index) => {
        setCurrentSlide(index);
    };

    const Slide = ({ id, photo }) => {
        return (
            <div key={id}>
                <img src={photo} alt="" className="slider-img" />
            </div>
        );
    };

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        afterChange: handleAfterChange,
        fade: true // add the fade effect
    };

    return (
        <div>
            <div className="slideshow-title">Past Projects</div>
            {/* <ImageSlider slides={SliderData} /> */}

            <div className="slider-wrapper">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <Slide key={slide.id} id={slide.id} photo={slide.photo} />
                    ))}
                </Slider>
                <div className="caption">{slides[currentSlide].text}</div>
                <div className="bubbles-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`bubble ${index === currentSlide ? 'filled' : ''}`}
                        ></div>
                    ))}
                </div>
            </div>

            <div className='slideshow-title'>Brands We've Worked With</div>
            <img className='pp-image' src={pp} alt="logos from previous projects"></img>

        </div>
    );
}
