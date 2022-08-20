export function makeComplete(id) {
    return {
        type: "COMPLETE_TASK",
        payload: id,
    };
}

export function makeActiveAgain(id) {
    return {
        type: "ACTIVATE_TASK",
        payload: id,
    };
}

export function addToDo(text){
    return {
        type: "ADD_NEW_TASK",
        payload:text
    }
}