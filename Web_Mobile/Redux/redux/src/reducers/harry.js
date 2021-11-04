/* eslint-disable import/no-anonymous-default-export */
import { CALL_HARRY } from "../actions/harry"

import { uuid } from 'uuidv4';

const initialState = {
    value: [{}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CALL_HARRY:
            return {
                ...state,
                value: []
            }
            default:
                return state
        }
    }