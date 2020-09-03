import * as ActionTypes from '../ActionTypes';

export function setToken(name){
    return {
        type: ActionTypes.SET_TOKEN,
        payload:{name}
    }
}

export function removeToken(){
    return {
        type:ActionTypes.REMOVE_TOKEN
    }
}