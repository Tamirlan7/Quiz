import { IQuestion } from "../../types/types";
import { questionReducerActionType, questionsActionsTypes } from "./actions/actionTypes";

interface QuestionsState {
    questions: IQuestion[];
    currentQuestion: number;
    correctAnswers: number;
    success: boolean;
    wrong: boolean;
};

const defaultState: QuestionsState = {
    questions: [],
    currentQuestion: 0,
    correctAnswers: 0,
    success: false,
    wrong: false
};

type Action = questionReducerActionType

export default function questionsReducer (state = defaultState, action: Action) : QuestionsState {
    switch(action.type) {
        case questionsActionsTypes.SET_QUESTIONS:
            return {...state, questions: [...action.payload]};
        case questionsActionsTypes.NEXT_QUESTION:
            return {...state, currentQuestion: state.currentQuestion + 1}
        case questionsActionsTypes.INCREMENT_CORRECT_ANSWERS:
            return {...state, correctAnswers: state.correctAnswers + 1}
        case questionsActionsTypes.START_OVER:
            return {...state, currentQuestion: 0, correctAnswers: 0}
        default:
            return state;
    };
};
