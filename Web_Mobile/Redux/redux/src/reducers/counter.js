/* eslint-disable import/no-anonymous-default-export */
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/counter";

const initialState = {
    value: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                value: state.value + action.value 
            }
       
   
        case DECREMENT_COUNTER:
            return {
                ...state, 
                value: state.value - 1
            }
            default:
                return state
        }
}