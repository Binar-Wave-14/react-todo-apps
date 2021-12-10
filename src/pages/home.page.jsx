import './home.css'
import {Button, List, Stack} from '@mui/material';
import {TodoItem} from '../components/todo-item.component';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="container">
      <Stack spacing={5} sx={{ width: 300 }}>
        <div>
          <List dense={true}>
            {
              props.todos.map(todo => (
                <TodoItem key={todo.id} todo={todo.todo} description={todo.description} id={todo.id} onDelete={props.onDelete} />
              ))
            }
          </List>
        </div>
        <Button size="small" variant="contained" className="submit-container">
          <Link
            style={{  textDecoration: 'none', color: '#fff' }}
            to={`/todo`}
          >
            Create Todo
          </Link>
        </Button>
      </Stack>
    </div>
  )
}

export default Home