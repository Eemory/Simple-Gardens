import {useState, useEffect} from 'react';

import NoteForm from './NoteForm';
import NotesContainer from './NotesContainer';

const NoteList = ({plantId}) => {
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState('');

    const saveLocalNotes = () => {
        localStorage.setItem('notes', JSON.stringify(notes));
}

const getLocalNotes = () => {
    if (localStorage.getItem('notes') === null) {
        localStorage.setItem('notes', JSON.stringify([]));
    } else {
       let notesLocal = JSON.parse(localStorage.getItem('notes'));
       setNotes(notesLocal);
    }
}

useEffect(() => {
    getLocalNotes();
}, []);

useEffect(() => {
    saveLocalNotes();
}, [notes])

    return (
        <>
            <NoteForm 
            notes={notes}
            setNotes={setNotes}
            noteText={noteText}
            setNoteText={setNoteText}
            plantId={plantId}/>
            <NotesContainer 
            notes={notes}
            setNotes={setNotes}
            plantId={plantId}/>
        </>
    );
}

export default NoteList;