import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import allTheActions from '../actions'


const Counter = props => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
        
    return (
        <div>
            <p>{counter.value}</p>
            <button onClick={() => dispatch(allTheActions.counter.incrementCounter(2))}>+</button>
            <button onClick={() => dispatch(allTheActions.counter.decrementCounter(1))}>-</button>
        </div>
    );
};

export default Counter;