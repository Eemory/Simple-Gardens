import './ToDo.css';
import {Button, ListGroup} from 'react-bootstrap';
//bootstrap icons
import {BsTrash} from 'react-icons/bs'
import {BsCheck2} from 'react-icons/bs'

const ToDo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    return (
        <ListGroup className='todo'  >
            <ListGroup.Item className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}
            <Button size='sm' onClick={deleteHandler} className='trash-button' variant='outline-danger'>
                <BsTrash />
            </Button>
            <Button size='sm' onClick={completedHandler} className='check-button' variant='outline-success'>
                <BsCheck2 />
            </Button>
        </ListGroup.Item>
        </ListGroup>
    );
}

export default ToDo;