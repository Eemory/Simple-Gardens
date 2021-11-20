import { useState, useEffect } from 'react';
//firebase
import useStorage  from '../../hooks/useStorage';
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../../login/AuthContext';
//css and bootstrap
import { Button, Alert } from 'react-bootstrap';

//collects all information to submiut to the database
const Submit = ({
    image,
    setImage,
    name,
    type,
    waterAmnt,
    season,
    startDate,
    harvestDate,
    clearState
 }) => {

const { url } = useStorage(image);
const [error, setError] = useState('');
const {currentUser} = useAuth();
let userId = currentUser.uid;

//grabs url from image in order to collect it for storage
useEffect(() => {
    if(url){
    }
}, [url, setImage])

//submits data to firebase
const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !type || !season || !waterAmnt || !startDate || !harvestDate){
        return setError('Please fill out all fields')
    }
    
        const collectionRef = collection(db, 'pages');
        const payload = {
            name,
            type, 
            season, 
            waterAmnt,  
            startDate, 
            harvestDate,
            url,
            userId
         }

        await addDoc(collectionRef, payload);
        clearState()
        setError('')
}

    return (
        <div className='progress-bar' >
            {error && <Alert variant='danger'>{error}</Alert>}
          <Button className='addButton' onClick={handleSubmit} >Add</Button>
        </div>
    )
}

export default Submit;