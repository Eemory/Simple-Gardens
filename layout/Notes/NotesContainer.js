import Note from "./Note";
import './NotesContainer.css';

const NotesContainer = ({notes, setNotes, plantId}) => {
    
    let rightNotes = notes.filter((note) => note.plantId === plantId)

    return(
        <div className='notes-container'>
            <ul className='notes-list'>
                {rightNotes.map((note) => (
                    <Note
                    plantId={plantId}
                    key={note.id}
                    text={note.noteText}
                    date={note.date} 
                    note={note}
                    notes={notes}
                    setNotes={setNotes}/>
                ))}
            </ul>
        </div>
    );
}

export default NotesContainer;