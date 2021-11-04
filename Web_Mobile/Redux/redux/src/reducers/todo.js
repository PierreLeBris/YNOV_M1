/* eslint-disable import/no-anonymous-default-export */
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/todo";
//import { useEffect, useState } from "react";
import { uuid } from 'uuidv4';

const initialState = {
    value: [{}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                value: [...state.value,{id: uuid(), label: action.value} ]
            }

        case REMOVE_TODO:
            return {
                ...state, 
                value: state.value.filter(x => x.id !== action.value)
            }

        case UPDATE_TODO:
            return {
                ...state, 
                value: state.value.filter(x => x.value !== action.value)
            }
            default:
                return state
        }
}