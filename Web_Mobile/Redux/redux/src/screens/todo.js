import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react"
import { uuid } from 'uuidv4';

import allTheActions from '../actions'


const Todo = props => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo.value)
    const [inputValue, setInputValue] = useState('')
    const [toDo, setToDo] = useState('')
    const [valueChange, setValueChange] = useState('')
    const [modeEdit, setModeEdit] = useState(false)

    useEffect(() => {
        console.log('inputValue', inputValue)
    })

    useEffect(() => {
        console.log(todo)
    }, [todo])
    return (
        <div>
            <input value={toDo} onChange={event => setToDo(event.target.value)}/>
            <button onClick={() => dispatch(allTheActions.todo.incrementTODO({id: uuid(), value: toDo}))}>Ajout</button>
            { todo.map(x => {
                return(
                    <div>
                        <h2 key={x.id}>{x.value}</h2>
                        <button onClick={() => dispatch(allTheActions.todo.decrementTODO(x.id))}>Supprimer</button>
                        <button onClick={() => setModeEdit(!modeEdit)}>Edit</button>
                        { modeEdit === true ?
                        <div> 
                            <input value={valueChange} onChange={event => setValueChange(event.target.value)}/>
                            <button onClick={() => dispatch(allTheActions.todo.updateToDoList({id: x.id, value: valueChange}))}>Modifier</button>
                        </div> :
                        null}
                    </div>
                )
            })}
        </div>
    );
};

export default Todo;