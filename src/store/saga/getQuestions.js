import { put, takeEvery } from "redux-saga/effects";
import Server from "../../API/server";
import { setQuestionsFromServer, SET_QUESTIONS_WATCHER } from "../reducers/questions";

function* getQuestions () {
    yield put(setQuestionsFromServer(Server.getQuestions()));
};

export default function* getQuestionsWatcher () {
    yield takeEvery(SET_QUESTIONS_WATCHER, getQuestions);
};