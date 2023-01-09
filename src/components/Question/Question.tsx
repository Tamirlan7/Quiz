import React, { useRef } from "react";
import './Question.css';
import Button from '../../UI/Button/Button';
import Slider from '../Slider/Slider';
import { IQuestion } from "../../types/types";
import { useAction, useTypedSelector } from "../../hooks/useRedux";

interface OptionProps extends React.PropsWithChildren {
    option: string;
    increaseSlider: () => void
    question: IQuestion;
}

const Option: React.FC<OptionProps> = ({option, increaseSlider, question}) => {
    const {incrementCorrectAnswersAction, nextQuestionAction} = useAction();
    // const success = useTypedSelector(state => state.questions.success);
    // const wrong = useTypedSelector(state => state.questions.wrong);


    const nextQuestion = (event: any) : void => {
        nextQuestionAction();
        increaseSlider();
        if(String(question.options[question.answer]) === String(event.target.innerHTML)) {
            incrementCorrectAnswersAction();
        };
    };


    return (
        <Button className="option" onClick={e => nextQuestion(e)}>
            {option}
        </Button>
    )
}

interface QuestionProps extends React.PropsWithChildren {
    question: IQuestion
}

const Question: React.FC<QuestionProps> = ({question}) => {
    const sliderRef = useRef<HTMLElement>(null);
    const questionsLength = useTypedSelector(state => state.questions.questions.length);

    const increaseSlider = () : void => {
            if(sliderRef.current && sliderRef.current.parentElement && sliderRef.current.parentElement.parentElement) {
                sliderRef.current.style.width = `${sliderRef.current.offsetWidth + 
                    (Number(sliderRef.current.parentElement.parentElement.offsetWidth) / questionsLength)}px`;
            }
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
    );
};

export default Question;