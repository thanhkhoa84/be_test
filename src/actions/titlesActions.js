import * as types from './actionTypes';
import * as api from '../api'

export const fetchAllTitlesSuccess = (titles) => ({
    type: types.FETCH_ALL_TITLES_SUCCESS,
    titles
});

export const fetchTitles = () => (dispatch) => {
    return api.getJobTitles()
        .then(resp => {
            dispatch(fetchAllTitlesSuccess(resp));
        })
        .catch(err => {
            console.log(err)
        })
}