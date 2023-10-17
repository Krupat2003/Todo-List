import * as actionTypes from '../actions/type';

export const tabReducer = (state = actionTypes.ALL_TODOS, action) => {
    switch (action.type){
        case actionTypes.TOGGEL_TAB:
            return action.selected
        default:
            return state;
    }
}