import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {addTodo} from '../features/todo/todosSlice'

const AddTodo = () => {
    const [input , setInput] = useState('')

    const dispatch = useDispatch();

    const handleChange = (e) =>{
        setInput(e.target.value)
    }
    const addTodoHandler = (e) =>{
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input 
        type="text"
        placeholder="Enter Todos..."
        value={input}
        onChange={handleChange}

        />
        <button type="submit">AddTodo</button>
      </form>
    </div>
  )
}

export default AddTodo
