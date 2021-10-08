import { useEffect, useState } from "react"
import { uuid } from 'uuidv4';


const Todos = () => {
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

            {/* {todoList.map(todo => <p>{todo}</p>
            )} */}
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