import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionFromServerWatcher } from "../../store/reducers/questions";
import './Questions.css';

export default function Questions () {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.products.products);

    useEffect(() => {dispatch(setQuestionFromServerWatcher()); console.log(questions)}, []);

    return (
        <div className="questions">
            
        </div>
    )
}