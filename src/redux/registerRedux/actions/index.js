import * as ActionTypes from '../ActionTypes';

export function setToken(token){
    return {
        type:ActionTypes.SET_TOKEN,
        token
    }
}

export function REMOVE_TOKEN(){
    return {
        type:ActionTypes.REMOVE_TOKEN
    }
}