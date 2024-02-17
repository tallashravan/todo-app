import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

async function App() {
  const [todos, setTodos] = useState([]);

  const response = await fetch("http://localhost:3000/todos")
  const json = await response.json();
  console.log(json)
    setTodos(json);
 console.log("hey called....")

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
