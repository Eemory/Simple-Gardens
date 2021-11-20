import { Button, Form} from 'react-bootstrap';
import './NoteForm.css';

const NoteForm = ({noteText, setNoteText, notes, setNotes, plantId}) => {
    //creates date object
    const current = new Date();
    let date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    
    //creates note object and adds to notes array
    const handleSubmit = (e) => {
        e.preventDefault();

        setNotes([
            ...notes,
            {noteText: noteText,
                 id: Math.random() * 10,
                 plantId: plantId,
                 date: date}
        ])
        setNoteText('');
    };

    return (
        <Form className='note-form'>
            <h4 className='info-title'>notes:</h4>
            <input value={noteText} onChange={(e) => setNoteText(e.target.value)} type='text' ></input>
            <Button onClick={handleSubmit} className='add-note-button' variant='outline-primary'>Add Note</Button>
        </Form>
    );
}

export default NoteForm;