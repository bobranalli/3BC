import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../styles/Boxes.css';


//REPO for animations: https://github.com/michalsnik/aos#animations

export default function Contact() {
    useEffect(() => {
        //set the time in miliseconds and all animations will take that amount of time to complete
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <div>Maybe a Contact Page</div>
    )
}