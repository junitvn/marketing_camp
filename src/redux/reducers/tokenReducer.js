import * as _ from 'lodash';
import * as ActionTypes from '../ActionTypes';

const initialState = {name:''}
const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TOKEN:
            return {name: action.payload.name}
        case ActionTypes.REMOVE_TOKEN:
            return initialState;
        default:
            return state;
    }
}

export default tokenReducer;