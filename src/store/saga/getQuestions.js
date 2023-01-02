import { call, put, takeEvery } from "redux-saga/effects";
import Server from "../../API/server";
import { setQuestionsFromServer, SET_QUESTIONS_WATCHER } from "../reducers/questions";

function* getQuestions () {
    // yield put(setQuestionsFromServer());
    const questions = yield call(() => new Promise(res => res(Server.getQuestions())));
    yield put(setQuestionsFromServer(questions));
};

export default function* getQuestionsWatcher () {
    yield takeEvery(SET_QUESTIONS_WATCHER, getQuestions);
};