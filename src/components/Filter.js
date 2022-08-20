import {
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio 
} from '@mui/material'
import {useDispatch} from 'react-redux'
import {changeFilter} from '../redux/filter/actions'

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = event => {
        console.log(event.target.value)
        dispatch(changeFilter(event.target.value))
    }
    return <div>
        <FormControl>
            <FormLabel>Filter by:</FormLabel>
            <RadioGroup defaultValue="All" row onChange={handleChange}>
                <FormControlLabel value="All" control={<Radio/>} label="all" />
                <FormControlLabel value="Completed" control={<Radio/>} label="done" />
                <FormControlLabel value="Active" control={<Radio/>} label="active" />
            </RadioGroup>
        </FormControl>
    </div>
}

export default Filter