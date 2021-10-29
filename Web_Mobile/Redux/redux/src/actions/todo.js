export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const incrementCounter = payload => ({
    type: ADD_TODO,
    value: payload
})

export const decrementCounter = () => ({
    type: REMOVE_TODO
})