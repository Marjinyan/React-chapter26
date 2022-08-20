import TodosReducer from './todos/reducer'
import FilterReducer from './filter/reducer'
import { combineReducers } from 'redux'

export const RootReducer = combineReducers({
    todolist: TodosReducer,
    filter: FilterReducer
})