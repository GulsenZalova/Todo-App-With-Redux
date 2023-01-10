import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
function ToDoDisplay() {
    let todos=useSelector((state)=>state)
    // console.log(todos)
  return (
    <div>
      <ul>
        {
            todos && (
                todos.map(x=>(
                    <li key={x.id}>{x.todo}</li>
                ))
            )
        }
      </ul>
    </div> 
  )
}

export default ToDoDisplay
