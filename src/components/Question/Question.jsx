import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextQuestionAction } from "../../store/reducers/questions";
import './Question.css';
import Button from '../../UI/Button/Button';
import Slider from '../Slider/Slider';

function Option ({option, increaseSlider}) {
    const dispatch = useDispatch();

    const nextQuestion = () => {
        dispatch(nextQuestionAction());
        increaseSlider();
    };


    return (
        <Button className="option" onClick={() => nextQuestion()}>
            {option}
        </Button>
    )
}

export default function Question ({question}) {
    const sliderRef = useRef(null);
    const questionsLength = useSelector(state => state.questions.questions.length);

    const increaseSlider = () => {
        sliderRef.current.style.width = `${sliderRef.current.offsetWidth + 
            (Number(sliderRef.current.parentElement.parentElement.offsetWidth) / questionsLength)}px`;
    };

    return (
        <div className="question__block">
            <Slider sliderRef={sliderRef}/>
            <div className="question__inner__block">
                <h2 className="question">{question.question}</h2>
                <div className="options">
                    {question.options.map(option => <Option increaseSlider={increaseSlider} key={option} option={option}/>)}
                </div>
            </div>
        </div>
    )
}