import {combineReducers} from "redux";
import {todoReducer} from "./todo_reducer.js";

export  const rootReducer = combineReducers({
    todoReducer
})