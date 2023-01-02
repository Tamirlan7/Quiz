const defaultState = {
    questions: [],
    currentQuestion: 0,
};

const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_QUESTIONS_WATCHER = 'SET_QUESTIONS_WATCHER';

const NEXT_QUESTION = 'NEXT_QUESTION';

const INCREASE_SLIDER = 'INCREASE_SLIDER';

export default function questionsReducer (state = defaultState, action) {
    switch(action.type) {
        case INCREASE_SLIDER:
            return {...state, slider: state.slider + action.payload};
        case SET_QUESTIONS:
            return {...state, questions: [...action.payload]};
        case NEXT_QUESTION:
            return {...state, currentQuestion: state.currentQuestion + 1}
        default:
            return state;
    };
};

export const setQuestionsFromServer = payload => ({type: SET_QUESTIONS, payload});
export const setQuestionFromServerWatcher = () => ({type: SET_QUESTIONS_WATCHER});

export const nextQuestionAction = payload => ({type: NEXT_QUESTION, payload});

export const increaseSliderAction = payload => ({type: INCREASE_SLIDER, payload});