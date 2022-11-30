import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CHANGE_TITLE} from "./acton_types.js";

let idCounter = 0;
export const addTodo = (text) => ({
    type: ADD_TODO,
    newTodo: {
        id: ++idCounter,
        text,
        isChecked: false,
    },
})
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})
export const changeTitle = (text,newText,id) => ({
    type: CHANGE_TITLE,
    id,
    newText
})

