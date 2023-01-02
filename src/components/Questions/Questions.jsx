import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionFromServerWatcher } from "../../store/reducers/questions";
import Question from "../Question/Question";
import Result from "../Result/Result";
import './Questions.css';

export default function Questions () {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.questions);
    const currentQuestion = useSelector(state => state.questions.currentQuestion);
    

    useEffect(() => {
        dispatch(setQuestionFromServerWatcher());
    }, []);

    return (
        <div className="questions">
            {questions[currentQuestion]
            ? <Question question={questions[currentQuestion]}/>
            : <Result />
            }
        </div>
    )
}