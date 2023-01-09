import './Result.css';
import Button from '../../UI/Button/Button';
import { useAction, useTypedSelector } from '../../hooks/useRedux';

const Result: React.FC = () => {

    const correctAnswers = useTypedSelector(state => state.questions.correctAnswers);
    const questionsLength = useTypedSelector(state => state.questions.questions.length)
    const {startOver} = useAction();

    const startOverFn = () => {
        return startOver();
    };

    return (
        <div className='result'>
            <h3> {correctAnswers}/{questionsLength} Правильных ответов </h3>
            <Button onClick={() => startOverFn()}>Начать заново</Button>
        </div>
    );
};

export default Result;