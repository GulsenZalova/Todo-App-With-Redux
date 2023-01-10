import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
function ToDoList() {
    let todos=useSelector((state)=>state)
    const dispatch=useDispatch()
    const removeToDo=(x)=>{
        dispatch({
            type:"DELETE",
            payload:{
                todo:x.todo,
                id:x.id
            }
        })
    }
  return (
    <div className='container'>
 <div className='add delete'>
 <ul>
        {
            todos.length > 0 && (
                todos.map(x=>(
                    <li key={x.id}>{x.todo} <button className='removeBtn' onClick={()=>removeToDo(x)}><i class="fa-solid fa-trash"></i></button></li>
                ))
            ) || (
                <p>Your to do list is empty</p>
            )
        }
      </ul>
 </div>
    </div>
  )
}

export default  ToDoList
