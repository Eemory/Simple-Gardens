import {Button, ListGroup} from 'react-bootstrap';
//bootstrap icons
import {BsTrash} from 'react-icons/bs'
import './Note.css';

const Note = ({notes, note, setNotes, text, plantId, date}) => {

    const deleteHandler = () => {
        setNotes(notes.filter((el) => el.id !== note.id))
    }

    return(
    <>
        {<ListGroup className='note'  >
            <h6 className='date'>({date})</h6>
        <ListGroup.Item className={'note-item'}>
            {text}
        <Button onClick={deleteHandler} size='sm' className='trash-button' variant='outline-danger'>
            <BsTrash />
        </Button>
    </ListGroup.Item>
    </ListGroup>}

    </>
    );
}

export default Note;