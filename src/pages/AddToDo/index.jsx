import React from 'react'
import ToDoAdd from '../../components/ToDoAdd'
import ToDoDisplay from '../../components/ToDoDisplay'
function AddToDo() {
  return (
    <div className='container'>
     <div className='add'>
     <ToDoAdd/>
      <ToDoDisplay/>
     </div>
    </div>
  )
}

export default AddToDo
