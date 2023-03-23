import React, { useState } from "react"
import Create from "./Components/Create"
import Todolist from "./Components/Todolist"
import './App.css'

function App() {
  const [inputtxt, setinputtxt]=useState("")
  const [todo, settodo] = useState([])
  return (
    <div className="App">
      <Create inputtxt={inputtxt} todo={todo} settodo={settodo} setinputtxt={setinputtxt}/>
      <Todolist settodo={settodo} todo={todo} key={todo.id}/>
    </div>
  )
}

export default App
