import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, CHANGE_TITLE} from "../acton_types.js";

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const {id, text, isChecked} = action.newTodo;

            return {
                ...state,
                todos: [...state.todos, {id, text, isChecked}],
            };
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        }
        case TOGGLE_TODO: {
            const newTodo = state.todos.map(todo => {
                if (todo.id !== action.id) return todo
                return {
                    ...todo,
                    isChecked: !todo.isChecked
                }
            })
            return {
                ...state,
                todos: newTodo
            }
        }
        case CHANGE_TITLE: {
            const newTodo = state.todos.map(todo => {
                if (todo.id !== action.id) return todo
                return {
                    ...todo,
                    text: action.newText
                }
            })
            return {
                ...state,
                todos: newTodo
            }
        }
        default: {
            return state;
        }
    }
};
