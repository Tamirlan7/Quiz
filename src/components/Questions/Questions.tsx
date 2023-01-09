import React, { useEffect } from "react";
import { useAction, useTypedSelector } from "../../hooks/useRedux";
import Question from "../Question/Question";
import Result from "../Result/Result";
import './Questions.css';

const Questions: React.FC = () => {
    const {setQuestionFromServerWatcher} = useAction();
    const questions = useTypedSelector(state => state.questions.questions);
    const currentQuestion = useTypedSelector(state => state.questions.currentQuestion);
    

    useEffect(() => {
        setQuestionFromServerWatcher();
    }, []);

    return (
        <div className="questions">
            {questions[currentQuestion]
            ? <Question question={questions[currentQuestion]}/>
            : <Result />
            }
        </div>
    );
};

export default Questions;