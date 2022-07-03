import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../redux/action'

const InputTodo = () => {

 const [text,setText] = useState('')
const dispatch = useDispatch()

const addTodo =(payload) =>{
dispatch(addTodoRequest())
 axios.post('/todos',payload)
 .then((r)=>dispatch(addTodoSuccess(r.data)))
 .catch((e)=>dispatch(addTodoFailure(e)))

}
 const handleAdd =()=>{

 const payload = {
  title : text,
  status : false
 }

 addTodo(payload)
}

  return (
    <div>
     
     <input type="text" onChange={(e)=>setText(e.target.value)} />
     <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default InputTodo