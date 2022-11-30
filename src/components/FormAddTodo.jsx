import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/action_creators.js";

const FormAddTodo = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const handleInputChange = (e) => {
        setText(e.target.value)
    }
    const handleAddTodo = () => {
        setText('')
        return dispatch(addTodo(text))
    }
    return (
        <label className="d-inline-flex">
            <input className="form-control" type="text" value={text} onChange={handleInputChange}/>
            <button className="btn btn-primary ml-2" onClick={handleAddTodo}>Add</button>
        </label>
    );
};

export default FormAddTodo;