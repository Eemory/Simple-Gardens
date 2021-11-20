import { useState, useEffect } from 'react';
import {Card} from 'react-bootstrap';
import './ToDoList.css'
//component imports
import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";

const ToDoList = () => {

    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const {status, setStatus} = useState('all');
    //const [filteredTodos, setFilteredTodos] = useState([])

    const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
           let todoLocal = JSON.parse(localStorage.getItem('todos'));
           setTodos(todoLocal);
        }
    }

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        saveLocalTodos();
    }, [todos, status])


    return (
       <Card className='todo-card'>
           <h1 className='card-header'>Tasks</h1>
           <ToDoForm
            text={text}
            setText={setText}
            setTodos={setTodos}
            setStatus={setStatus}
            todos={todos} />

            <Card.Body>
           <ToDosContainer
            todos={todos}
            setTodos={setTodos} />
            </Card.Body>
       </Card>
    );
}

export default ToDoList