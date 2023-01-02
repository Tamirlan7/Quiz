import { useSelector } from 'react-redux';
import './Result.css';
import Button from '../../UI/Button/Button';

export default function Result () {

    const correctAnswers = useSelector(state => state.questions.correctAnswers);
    const questionsLength = useSelector(state => state.questions.questions.length)


    const startOver = () => {
        window.location.reload();
    }

    return (
        <div className='result'>
            <h3> {correctAnswers}/{questionsLength} Правильных ответов </h3>
            <Button onClick={() => startOver()}>Начать заново</Button>
        </div>
    )
}