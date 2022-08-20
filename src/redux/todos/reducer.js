import initialState from './state'
function reducer(state = initialState, action){
    switch(action.type){
        case 'COMPLETE_TASK':
            return {
                todos: state.todos.map(task => task.id === action.payload ? {...task, completed:true} : task)
            }
        case 'ACTIVATE_TASK':
            return {
                todos: state.todos.map(task => task.id === action.payload ? {...task, completed:false} : task)
            }
        case 'ADD_NEW_TASK':
            return {
                todos: [
                    {
                        id:Date.now(),
                        completed:false,
                        text: action.payload
                    },
                    ...state.todos
                ]
            }
        default:
            return state
    }
}
export default reducer