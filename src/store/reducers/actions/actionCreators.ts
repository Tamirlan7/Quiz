import { IQuestion } from "../../../types/types";
import { questionReducerActionType, questionsActionsTypes } from "./actionTypes";

export const setQuestionsFromServer = (payload: IQuestion[]): questionReducerActionType => ({type: questionsActionsTypes.SET_QUESTIONS, payload});
export const setQuestionFromServerWatcher = () => ({type: questionsActionsTypes.SET_QUESTIONS_WATCHER});
export const nextQuestionAction = (): questionReducerActionType => ({type: questionsActionsTypes.NEXT_QUESTION});
export const incrementCorrectAnswersAction = (): questionReducerActionType => ({type: questionsActionsTypes.INCREMENT_CORRECT_ANSWERS});
export const startOver = (): questionReducerActionType => ({type: questionsActionsTypes.START_OVER})