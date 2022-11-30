import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import FormAddTodo from "./components/FormAddTodo.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    return (
        <div className="App">
            <FormAddTodo/>
            <TodoList/>
        </div>

    )
}

export default App
