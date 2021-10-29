/* eslint-disable import/no-anonymous-default-export */
import { ADD_TODO, REMOVE_TODO } from "../actions/todo";
import { useEffect, useState } from "react";
import { uuid } from 'uuidv4';

const initialState = {
    value: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                value: state.value + action.value 
            }
       
   
        case REMOVE_TODO:
            return {
                ...state, 
            }
            default:
                return state
        }
}