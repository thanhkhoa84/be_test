import * as types from './actionTypes';
import * as api from '../api';
import { beginApiCall, apiCallError } from "./apiStatusActions";

export const fetchAllTitlesSuccess = (titles) => ({
    type: types.FETCH_ALL_TITLES_SUCCESS,
    titles
});

export const fetchTitles = () => (dispatch) => {
    dispatch(beginApiCall());
    return api.getJobTitles()
        .then(resp => {
            dispatch(fetchAllTitlesSuccess(resp));
        })
        .catch(err => {
            dispatch(apiCallError(err));
            console.log(err)
        })
}