import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, toggleTodo, changeTitle} from "../redux/action_creators.js";
import './TodoList.css'

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const [editMode, setEditMode] = useState(false)


    const dispatch = useDispatch()
    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }
    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id))
    }
    const handleChangeTitile = (text, newText, id) => {
        dispatch(changeTitle(text, newText, id))
    }
    return (<div className="todo-list">
        {todos.map(todo => (<div key={todo.id} className="todo">
            <input className="form-check-input" type="checkbox" checked={todo.isChecked} onChange={() => handleToggleTodo(todo.id)}/>
            {editMode ? (<input
                type="text"
                value={todo.text}
                onChange={(e) => handleChangeTitile(todo.text, e.target.value, todo.id)}

            />) : (<p
                style={{textDecoration: todo.isChecked ? "line-through" : "none"}}
            >
                {todo.text}
            </p>)}
            <div className="button-controls">
                <button className="btn btn-danger" onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
                {editMode ? (<button className="btn btn-success" onClick={() => setEditMode(false)}>Save</button>) : (<button className="btn btn-warning" onClick={() => setEditMode(true)}>Edit</button>)}
            </div>
        </div>))}
    </div>);
};

export default TodoList;