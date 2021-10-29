import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react"
import { uuid } from 'uuidv4';

import allTheActions from '../actions'


const Todo = props => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo)
    const [todoList, setTodoList] = useState([{id: 1, label: 'coco'}, {id: 2, label: 'cuicui'}])
    const [inputValue, setInputValue] = useState('')
    const addTodoList = () => {
        setTodoList([...todoList, { label:inputValue, id: uuid()}])
        setInputValue('')
    }

    const removeFromList = (id) => {
        const newTodoList = todoList.filter(item => item.id !== id)
        setTodoList(newTodoList)
    }

    useEffect(() => {
        console.log('inputValue', inputValue)
    })

        
    return (
        <div>
            <input></input>
            <input
                value={inputValue}
                onChange={event => {
                setInputValue(event.target.value)
            }} ></input>
                        <button onClick={addTodoList}>Add</button>

    {todoList.map(todo => {
        return(
            <div>
            <p>{todo.label}</p>
            <button onClick={() => removeFromList(todo.id)}> supprimer</button>
            </div>
        )
    })}

    {todoList.map(todo => <p>{todo}</p>
    )}
            <p>{todo.value}</p>
            <button onClick={() => dispatch(allTheActions.todo.incrementCounter(2))}>+</button>
            <button onClick={() => dispatch(allTheActions.todo.decrementCounter(1))}>-</button>
        </div>
    );
};

export default Todo;