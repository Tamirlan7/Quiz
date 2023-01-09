import React from "react";
import './Quiz.css';
import Questions from '../../components/Questions/Questions';

const Quiz: React.FC = () => {

    return (
        <div className="quiz">
            <Questions />
        </div>
    );
};

export default Quiz;