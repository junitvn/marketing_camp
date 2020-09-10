import {combineReducers} from 'redux';
import * as ActionTypes from '../ActionTypes';

const initialToken = ''
const reducer = (state = initialToken, action) =>{
    switch (action.type) {
        case ActionTypes.SET_TOKEN:
            return action.token;
        case ActionTypes.REMOVE_TOKEN:
            return initialToken;
        default:
            return state;
    }
} 

export default reducers = combineReducers({reducer});