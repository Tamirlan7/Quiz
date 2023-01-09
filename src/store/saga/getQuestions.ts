import { call, put, takeEvery } from "redux-saga/effects";
import Server from "../../API/server";
import { IQuestion } from "../../types/types";
import { setQuestionsFromServer } from "../reducers/actions/actionCreators";
import { questionsActionsTypes } from "../reducers/actions/actionTypes";

function* getQuestions () {
    const questions: IQuestion[] = yield call(() => new Promise(res => res(Server.getQuestions())));
    yield put(setQuestionsFromServer(questions));
};

export default function* getQuestionsWatcher () {
    yield takeEvery(questionsActionsTypes.SET_QUESTIONS_WATCHER, getQuestions);
};