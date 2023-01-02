import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionFromServerWatcher } from "../../store/reducers/questions";
import Question from "../Question/Question";
import './Questions.css';

export default function Questions () {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.questions);
    const currentQuestion = useSelector(state => state.questions.currentQuestion);


    useEffect(() => {
        dispatch(setQuestionFromServerWatcher());
        console.log(currentQuestion)
    }, []);

    return (
        <div className="questions">
            {questions[currentQuestion]
            ? <Question question={questions[currentQuestion]}/>
            : <div> Вопросы закончились </div>
            }
        </div>
    )
}