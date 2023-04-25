import React, { useState, useEffect } from 'react';
import '../slideshow/slideshow.css';
import hand from '../slideshow/images/slide1.png';
import orb from '../slideshow/images/slide2.png';
import mount from '../slideshow/images/slide3.png';
import dm from '../slideshow/images/dm.png';
import ebc from '../slideshow/images/ebc.png';
import jj from '../slideshow/images/jj.png';
import mp from '../slideshow/images/mp.png';
import toca from '../slideshow/images/toca.png';

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
    const [showDropdownA, setShowDropdownA] = useState(false);
    const [showDropdownB, setShowDropdownB] = useState(false);
    const [showDropdownC, setShowDropdownC] = useState(false);
    const [showDropdownD, setShowDropdownD] = useState(false);
    const [showDropdownE, setShowDropdownE] = useState(false);

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

    const handleLogoClick = (logo) => {
        if (logo === 'A') {
            setShowDropdownA(!showDropdownA);
            setShowDropdownB(false);
            setShowDropdownC(false);
            setShowDropdownD(false);
            setShowDropdownE(false);
        } else if (logo === 'B') {
            setShowDropdownB(!showDropdownB);
            setShowDropdownA(false);
            setShowDropdownC(false);
            setShowDropdownD(false);
            setShowDropdownE(false);
        } else if (logo === 'C') {
            setShowDropdownC(!showDropdownC);
            setShowDropdownA(false);
            setShowDropdownB(false);
            setShowDropdownD(false);
            setShowDropdownE(false);
        } else if (logo === 'D') {
            setShowDropdownD(!showDropdownD);
            setShowDropdownC(false);
            setShowDropdownB(false);
            setShowDropdownE(false);
            setShowDropdownA(false);
        } else if (logo === 'E') {
            setShowDropdownE(!showDropdownE);
            setShowDropdownA(false);
            setShowDropdownC(false);
            setShowDropdownD(false);
            setShowDropdownB(false);
        }
    };

    // close the dropdown menu if the click event target is not the dropdown or any of its children
    const handleClickOutsideDropdown = (event) => {
        if (
            !event.target.closest('.dropdown') &&
            !event.target.closest('.pp-image-container')
        ) {
            setShowDropdownA(false);
            setShowDropdownB(false);
            setShowDropdownC(false);
            setShowDropdownD(false);
            setShowDropdownE(false);
        }
    };

    // add the event listener when the component mounts
    useEffect(() => {
        document.addEventListener('click', handleClickOutsideDropdown);
        // remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutsideDropdown);
        };
    }, []);

    return (
        <div>
            <div className="slideshow-title">Past Projects</div>

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

            <div className='slideshow-title'>Businesses We've Helped</div>

            <div className='logo-container-big'>

                <div className="logo-wrapper">
                    <div className="pp-image-container" onClick={() => handleLogoClick('A')}>
                        <img className='pp-image' src={mp} alt="logos from previous projects"></img>
                        {showDropdownA ? <div className="minus-icon">-</div> : <div className="plus-icon">+</div>}
                    </div>
                    {showDropdownA && (
                        <div className="dropdown">
                            <p>Mack Prototype - We conducted a voice of customer, competitive landscape, and website design which resulted in an upward tick in sales and inbound leads</p>
                        </div>
                    )}
                </div>

                <div className="logo-wrapper">
                    <div className="pp-image-container" onClick={() => handleLogoClick('B')}>

                        <img className='pp-image' src={dm} alt="logos from previous projects"></img>
                        {showDropdownB ? <div className="minus-icon">-</div> : <div className="plus-icon">+</div>}
                    </div>
                    {showDropdownB && (
                        <div className="dropdown">
                            <p>Derby Management - We performed analysis with their HubSpot data. We investigated and improved their blog performance to generate more leads, and cleaned up their CRM for a more organized and efficient view of their clients.</p>
                        </div>
                    )}
                </div>

                <div className="logo-wrapper">
                    <div className="pp-image-container" onClick={() => handleLogoClick('C')}>
                        <img className='pp-image' src={toca} alt="logos from previous projects"></img>
                        {showDropdownC ? <div className="minus-icon">-</div> : <div className="plus-icon">+</div>}
                    </div>
                    {showDropdownC && (
                        <div className="dropdown">
                            <p>TOCA Football - We helped TOCA Football improve their social media presence by designing a promotional campaign. The initiative led to a drastic increase in positive reviews (a combined Yelp and Google score increase of 62.8%). </p>
                        </div>
                    )}
                </div>

                <div className="logo-wrapper">
                    <div className="pp-image-container" onClick={() => handleLogoClick('D')}>

                        <img className='pp-image' src={ebc} alt="logos from previous projects"></img>
                        {showDropdownD ? <div className="minus-icon">-</div> : <div className="plus-icon">+</div>}
                    </div>
                    {showDropdownD && (
                        <div className="dropdown">
                            <p>Evans Brothers Consulting - We helped EBC with various UX changes to make the website more user friendly. We added multiple new pages and new features throughout the website.</p>
                        </div>
                    )}
                </div>

                <div className="logo-wrapper">
                    <div className="pp-image-container" onClick={() => handleLogoClick('E')}>

                        <img className='pp-image' src={jj} alt="logos from previous projects"></img>
                        {showDropdownE ? <div className="minus-icon">-</div> : <div className="plus-icon">+</div>}
                    </div>
                    {showDropdownE && (
                        <div className="dropdown">
                            <p>Jamaica Jeff's - We created social media profiles from scratch (including photography and branding), while the owner prepared for the grand opening. Our profiles had 600+ followers and 200+ positive reviews within the first year. </p>
                        </div>
                    )}
                </div>

            </div>





        </div>
    );
}
