import { all } from 'redux-saga/effects';
import getQuestionsWatcher from './getQuestions';

export default function* rootWatcher () {
    yield all([
        getQuestionsWatcher()
    ])
}