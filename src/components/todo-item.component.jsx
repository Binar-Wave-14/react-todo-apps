import { IconButton, ListItem, ListItemText } from "@mui/material"
import { Delete } from '@mui/icons-material'
import styles from './todo-item.module.css'

export const TodoItem = (props) => {
    return (
        <div className={styles.container}>
            <ListItem>
                <ListItemText primary={props.todo} />
            </ListItem>
            <IconButton aria-label="delete" onClick={props.onDelete(props.id)} color="primary" >
                <Delete fontSize="small"/>
            </IconButton>
        </div>
    )
}