import './App.css'
import {useState} from 'react';
import {Button, List, Stack, TextField} from '@mui/material';
import {TodoItem} from './components/todo-item.component';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: 'makan'
    },
    {
      id: 2,
      todo: 'minum'
    }
  ])
  const [tmpTodo, setTmpTodo] = useState('')

  const onClick = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: tmpTodo
      }
    ])
    setTmpTodo('')
  }

  const onDelete = (id) => (e) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  return (
    <div className="container">
      <Stack spacing={5} sx={{ width: 300 }}>
        <div>
          <List dense={true}>
            {
              todos.map(todo => (
                <TodoItem key={todo.id} todo={todo.todo} id={todo.id} onDelete={onDelete} />
              ))
            }
          </List>
        </div>
        <TextField id="outlined-basic" label="Todo" variant="outlined" className="submit-container" size="small" value={tmpTodo} onChange={(e) => setTmpTodo(e.target.value)} />
        <Button size="small" variant="contained" className="submit-container" onClick={onClick}>Submit</Button>
      </Stack>
    </div>
  )
}

export default App