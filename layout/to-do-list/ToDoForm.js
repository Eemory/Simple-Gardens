import './ToDoForm.css';
import { Button, Form} from 'react-bootstrap';

const ToDoForm = ({ setText, text, setTodos, todos }) => {
    
const textHandler = (e) => {
    setText(e.target.value);
}

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: text, completed: false, id: Math.random() * 10}
        ])
        setText('');
    };

    return (
        <Form className='todo-form'>
            <input value={text} placeholder='Add Task' type='text' className='todo-input'onChange={textHandler}></input>
            <Button size='sm' variant="outline-primary" className='add-button' onClick={handleSubmit}>Add</Button>
        </Form>
    );
}

export default ToDoForm;