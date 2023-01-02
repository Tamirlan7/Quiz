import React, { useEffect, useRef }from "react";
import { useSelector } from "react-redux";
import './Slider.css';

export default function Slider ({sliderRef}) {

    return (
        <span className="slider">
            <span ref={sliderRef} className="inner__slider">

            </span>
        </span>
    )
}