import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoActions from "../../reducers/todoReducer/actions";

export const useTodoActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(todoActions, dispatch);
};