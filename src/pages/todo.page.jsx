import './todo.css'
import { Button, Stack, TextField } from "@mui/material"
import { Link } from 'react-router-dom'

export const Todo = (props) => {
    return (
    <div className="container">
      <Stack spacing={5} sx={{ width: 300 }}>
        <TextField 
            id="outlined-basic" 
            label="Todo" 
            variant="outlined" 
            className="submit-container" 
            size="small"
            onChange={(e) => props.setTmpTodo({
                ...props.tmpTodo,
                todo: e.target.value
            })}
            value={props.tmpTodo.todo}
        />
        <TextField 
            id="outlined-basic" 
            label="Description" 
            variant="outlined" 
            className="submit-container" 
            size="small" 
            multiline
            rows={4}
            onChange={(e) => props.setTmpTodo({
                ...props.tmpTodo,
                description: e.target.value
            })}
            value={props.tmpTodo.description}
        />
        
        <Button size="small" variant="contained" className="submit-container">
          <Link
            style={{  textDecoration: 'none', color: '#fff' }}
            to={{
                pathname: `/`,
            }}
            onClick={props.onCreate}
          >
            Submit
          </Link>
        </Button>
      </Stack>
    </div>
    )
}