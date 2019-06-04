import * as types from '../actions/actionTypes';

const titleReducers = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_ALL_TITLES_SUCCESS:
            return action.titles;

        default: return state;
    }
}


export default titleReducers;