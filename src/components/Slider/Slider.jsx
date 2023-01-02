import React, { useEffect, useRef }from "react";
import { useSelector } from "react-redux";
import './Slider.css';

export default function Slider ({sliderRef}) {
    
    // const questionsLength = useSelector(state => state.questions.questions.length);

    // const increaseSlider = () => {
    //     sliderRef.current.style.width = `${sliderRef.current.offsetWidth + 
    //         (Number(sliderRef.current.parentElement.parentElement.offsetWidth) / questionsLength)}px`;
    // };

    return (
        <span className="slider">
            <span ref={sliderRef} className="inner__slider">

            </span>
        </span>
    )
}