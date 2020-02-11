import { combineReducers } from 'redux';
import { IAction } from '../../@types/generalTypes';

/**
 * A SIMPLE EXAMPLE OF REDUCER
 */
function todos(state = {}, action: IAction) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export default combineReducers({
    todos,
});
