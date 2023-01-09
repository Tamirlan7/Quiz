import { IQuestion } from "../../../types/types"

export enum questionsActionsTypes {
    SET_QUESTIONS = 'SET_QUESTIONS',
    SET_QUESTIONS_WATCHER = 'SET_QUESTIONS_WATCHER',
    NEXT_QUESTION = 'NEXT_QUESTION',
    INCREMENT_CORRECT_ANSWERS = 'INCREMENT_CORRECT_ANSWERS',
    START_OVER = 'START_OVER',
};

interface StartOver {
    type: questionsActionsTypes.START_OVER
}

interface SetQuestionsAction {
    type: questionsActionsTypes.SET_QUESTIONS
    payload: IQuestion[];
};

interface nextQuestionAction {
    type: questionsActionsTypes.NEXT_QUESTION;
};

interface incrementCorrectAnswersAction {
    type: questionsActionsTypes.INCREMENT_CORRECT_ANSWERS
};

export type questionReducerActionType = SetQuestionsAction | nextQuestionAction | incrementCorrectAnswersAction |
StartOver