import { useState, useEffect } from "react"


const Todos = () => {
    const[todoList, setTodoList] = useState(['todo 1', 'todo 2'])
    const[inputValue, setInputValue] = useState('')

    const addTodoList = () => {
        setTodoList([...todoList, inputValue])
    }

    useEffect (() => {
        console.log('inputValue', inputValue)
    })
    return (
        <div>
            <input 
                value={inputValue}
                onChange={event => {
                setInputValue(event.target.input)
            }}></input>
            {todoList.map(todo => {
                return(
                    <p>{todo}</p>
                )
            })}

            <button onClick={addTodoList}>ADD</button>
        </div>
    )
}

export default Todos

/*import { useEffect, useState } from "react"


const Todos = () => {
    const [todoList, setTodoList] = useState(['todo  1', 'todo 2'])
    const [inputValue, setInputValue] = useState('')


    const addTodoList = (props) => {
        setTodoList([...todoList, inputValue])
        setInputValue('')
    }

    useEffect(() => {
        console.log('inputValue', inputValue)
    })
        return (
        <div>
            <input
                value={inputValue}
                onChange={event => {
                setInputValue(event.target.value)
            }} ></input>
            
            <button onClick={addTodoList}>Add</button>

            {todoList.map(todo => {
                return(
                    <p>{todo}</p>
                )
            })}

            { {todoList.map(todo => <p>{todo}</p>
            )} }
            </div>
            )
        }
        
        export default Todos */