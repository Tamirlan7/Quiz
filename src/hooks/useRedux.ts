import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux"
import { rootReducer } from "../store/store";
import { bindActionCreators } from "redux";
import * as ActionCreators from '../store/reducers/actions/actionCreators';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; 
type RootState = ReturnType<typeof rootReducer>;

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch); 
};