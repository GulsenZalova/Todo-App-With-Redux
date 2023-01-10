import React from 'react'
import { useSelector } from 'react-redux';
function AboutPage() {
    let todos = useSelector((state) => state)
    return (
        <div className='container'>
         <div className='add delete'>
         <p>
                {
                    todos.length>0 && (
                      <p> You have {todos.length} things to do on your to do list</p>  
                    ) ||(
                        <p>Your to do list is empty</p>
                    )
                }
            </p>
         </div>
        </div>
    )
}

export default AboutPage 
