import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoFailure, getTodoRequest, getTodoSuccess } from '../redux/action'
import InputTodo from './InputTodo'

import { getTodos } from '../redux/action'

const Todos = () => {

const dispatch = useDispatch()
const todos = useSelector((state)=>state.todos)

 
 useEffect(()=>{
   getTodos(dispatch)
  
 },[])
  return (
    <div>
     <h2>

     Todos 
     </h2>

     <InputTodo/>
     {todos.map((e)=>(
      <div key={e.id}> {e.title}  </div>
     ))}
    </div>
  )
}

export default Todos