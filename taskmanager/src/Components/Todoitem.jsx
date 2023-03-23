import '../App.css'
import React from 'react'

function Todoitem({text,todos ,todo ,settodo}) {
  const deletehandler = ()=>{
    settodo(todo.filter((el) => el.id !== todos.id))

  }
  return (
    <div className='item'>
        <h3>{text}</h3>
        <button className='secondary delete' onClick={deletehandler}>Delete</button>
        
    </div>
  )
}

export default Todoitem