import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCorrectAnswersAction, nextQuestionAction } from "../../store/reducers/questions";
import './Question.css';
import Button from '../../UI/Button/Button';
import Slider from '../Slider/Slider';

function Option ({option, increaseSlider, question}) {
    const dispatch = useDispatch();

    const nextQuestion = event => {
        dispatch(nextQuestionAction());
        increaseSlider();
        if(String(question.options[question.answer]) === String(event.target.innerHTML)) {
            dispatch(incrementCorrectAnswersAction());
        };
    };


    return (
        <Button className="option" onClick={e => nextQuestion(e)}>
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
                    {question.options.map(option => <Option question={question} increaseSlider={increaseSlider} key={option} option={option}/>)}
                </div>
            </div>
        </div>
    )
}