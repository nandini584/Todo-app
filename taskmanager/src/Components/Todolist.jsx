import '../App.css'
import Todoitem from "./Todoitem"
import React from 'react'

function Todolist({todo, settodo}) {
  console.log(todo)
  return (
    <div>
      {todo.map(todos => (
        <Todoitem settodo={settodo} text={todos.text} todo={todo} key={todos.id} todos={todos}/>
      ))}
        
    </div>
  )
}

export default Todolist