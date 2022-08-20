import initialState from './state'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_FILTER':
            return {
                currentFilter:action.payload
            }
        default: 
            return state
    }
}

export default reducer