import { Box, Button } from '@mui/material'
import { makeComplete, makeActiveAgain } from '../redux/todos/actions'
import { connect } from 'react-redux'

const ToDoItem = ({task, ...props}) => {
    const {enable, disable} = props
    const style = task.completed ? {textDecoration:"line-through"} : null
    return <div>
        <Box sx={{padding:1, margin:2,background:"#f3e0fb", width:400}}>
        <h3 style={style}>{task.text}</h3>
        {
            task.completed
            ?
            <Button onClick={() => enable(task.id)} variant="outlined">undone</Button>
            :
            <Button onClick={() => disable(task.id)} variant="outlined">done</Button>
        }
        </Box>
    </div>
}
export default connect(null, (dispatch) => {
    return {
        enable: (id) => dispatch(makeActiveAgain(id)),
        disable: (id) => dispatch(makeComplete(id))
    }
})(ToDoItem)