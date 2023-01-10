import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
function ToDoAdd() {
  let dispatch=useDispatch()
  let todos=useSelector((state)=>state)
  const [input,setİnput]=useState([])
  let id=uuidv4()
  // console.log(todos)

 const [todo,setToDo]=useState({
   todo:input,
   id:id
 })

const changetodo=(e)=>{
  setİnput(e.target.value)
  setToDo({
    todo:e.target.value,
    id:id
  })
}
const addToDo=(e)=>{
  e.preventDefault()
  let repeatToDo=todos.find((x)=>x.id===todo.id)
  if(!repeatToDo){
    dispatch({
      type:"ADD",
      payload:{
        todo:todo.todo,
        id:todo.id
      }
    })

  }
  // console.log(todo)
}
  return (
    <>
   <form>
        <input type="text" onChange={changetodo} value={input} className={"input"} placeholder="Enter Your To Do" />
        <button onClick={addToDo} className={"btn"}>Add</button>
      </form>
    </>
  )
}

export default ToDoAdd
