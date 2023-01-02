import React from "react";
import { useDispatch } from "react-redux";
import { nextQuestionAction } from "../../store/reducers/questions";
import './Question.css';
import Button from '../../UI/Button/Button';
import Slider from '../Slider/Slider';

function Option ({option}) {
    const dispatch = useDispatch()

    const nextQuestion = () => {
        dispatch(nextQuestionAction());
    }

    return (
        <Button className="option" onClick={() => nextQuestion()}>
            {option}
        </Button>
    )
}

export default function Question ({question}) {
    
    return (
        <div className="question__block">
            <Slider />
            <div className="question__inner__block">
                <h2 className="question">{question.question}</h2>
                <div className="options">
                    {question.options.map(option => <Option key={option} option={option}/>)}
                </div>
            </div>
        </div>
    )
}