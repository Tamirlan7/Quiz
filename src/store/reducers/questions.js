const defaultState = {
    questions: []
};

const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_QUESTIONS_WATCHER = 'SET_QUESTIONS_WATCHER';

export default function questionsReducer (state = defaultState, action) {
    switch(action.type) {
        case SET_QUESTIONS:
            return {...state, questions: [...action.payload]}
        default:
            return state;
    };
};

export const setQuestionsFromServer = payload => ({type: SET_QUESTIONS, payload});
export const setQuestionFromServerWatcher = () => ({type: SET_QUESTIONS_WATCHER});