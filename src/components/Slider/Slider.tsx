import React from "react";
import './Slider.css';

interface SliderProps extends React.PropsWithChildren {
    sliderRef: any
}

const Slider: React.FC<SliderProps> = ({sliderRef}) => {

    return (
        <span className="slider">
            <span ref={sliderRef} className="inner__slider">

            </span>
        </span>
    );
};

export default Slider;