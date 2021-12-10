import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.page';
import { Todo } from './pages/todo.page';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: 'makan',
      description: 'makan sambil lari lari'
    },
    {
      id: 2,
      todo: 'minum',
      description: 'minum akub'
    }
  ])
  const [tmpTodo, setTmpTodo] = useState({
    todo: '',
    description: ''
  })

  const onCreate = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: tmpTodo.todo,
        description: tmpTodo.description
      }
    ])
    setTmpTodo({
      todo: '',
      description: ''
    })
  }

  const onDelete = (id) => (e) => {
    const newTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home todos={todos} onDelete={onDelete} />} />
        <Route path="/todo" element={<Todo onCreate={onCreate} setTmpTodo={setTmpTodo} tmpTodo={tmpTodo} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// routing, kirim props
// penempatan method
// on delete kenapa beda