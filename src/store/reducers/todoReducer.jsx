import React from 'react'

const INITIAL_STATE=[
        {
            todo:"",
            id:null
        },
     ]

    
function todoReducer(state,action) {
    if(typeof state==="undefined"){
                return []
            }
            if( action.type==="ADD"){
                return [...state,action.payload]
            }
            if (action.type==="DELETE"){
                let deletedToDo=state.filter((x)=>x.id!=action.payload.id)
                return [...deletedToDo]
            }
}

export default todoReducer

