import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

export const setSearchField = (text) => {
    console.log(text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}