import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
//firebase hooks
import { updateDoc, doc } from 'firebase/firestore';
import db from '../../firebase';
import { useAuth } from '../../login/AuthContext';
//css and bootstrap
import './PlantPage.css'
import { Button, Card} from 'react-bootstrap';
//components
import NoteList from '../Notes/NoteList'
import NavBar from "../navbar/NavBar";
import PlantPagesIndex from "../plant-pages-index/PlantPagesIndex";

//displays plant objects' data
const PlantPage = ( { pages } ) => {
    //variables
    const { pageId } = useParams();
    const history = useHistory();
    const {currentUser} = useAuth();
    let userId;

    //solves bug with logging out
    if(!currentUser) {
        history.push('/login');
    } else {
        userId = currentUser.uid
    }

    //selects the correct plant data based on the object id
    let plant = pages.filter(page => (pageId === page.id && userId === page.userId));
    

    //functions to update specific data values
    const handleEditName = async (id) => {
        let name = prompt('Change plant name')

       const docRef = doc(db, 'pages', id);
       const payload = { name }

       await updateDoc(docRef, payload);
   }

    const handleEditType = async (id) => {
         let type = prompt('Change plant type')

        const docRef = doc(db, 'pages', id);
        const payload = { type }

        await updateDoc(docRef, payload);
    }

    const handleEditSeason = async (id) => {
        let season = prompt('Change season')

       const docRef = doc(db, 'pages', id);
       const payload = { season }

       await updateDoc(docRef, payload);
   }

   const handleEditWaterAmnt = async (id) => {
    let waterAmnt = prompt('Change amount days to water')

   const docRef = doc(db, 'pages', id);
   const payload = { waterAmnt }

   await updateDoc(docRef, payload);
    }

    const handleEditStartDate = async (id) => {
        let startDate = prompt('Correct the date')

    const docRef = doc(db, 'pages', id);
    const payload = { startDate }

    await updateDoc(docRef, payload);
    }

    const handleEditHarvestDate = async (id) => {
        let harvestDate = prompt('Correct the date')

    const docRef = doc(db, 'pages', id);
    const payload = { harvestDate }

    await updateDoc(docRef, payload);
    }

    return (
        <>
           <NavBar />
           <div className='page'>
            <div className='index'>
                <PlantPagesIndex pages={pages}/> 
            </div>
            <div className='plant-card-div'>
           {plant.map(pl => (
               <li className='item' key={pl.id}>
               <div className='plant-card'>
               <Card style={{ width: '40rem' }}>
               <Card.Img className='image' variant="top" src={pl.url} alt='plant-pic' />
               <Card.Title>
                       <h1 className='card-title'
                       onClick={() => {handleEditName(pl.id)}}>{pl.name}</h1>
               </Card.Title>
                   <Card.Body className='card-body'>
                   
                   <div className='line-info'>
                       <h4 className='info-title'>type:</h4>
                       <p className='info'>{pl.type}</p>
                       <Button
                        className='edit-button'
                        size='sm'
                        variant="outline-primary"
                        onClick={() => handleEditType(pl.id)}
                         >Edit
                      </Button>
                   </div>
                   <div className='line-info'>
                       <h4 className='info-title'>season:</h4>
                       <p className='info'>{pl.season}</p>
                       <Button className='edit-button'
                                size='sm'
                                variant="outline-primary"
                                onClick={() => handleEditSeason(pl.id)}>
                           Edit
                       </Button>
                   </div>
                   <div className='line-info'>
                       <h4 className='info-title'>days to water (per week):</h4>
                       <p className='info'>{pl.waterAmnt}</p>
                       <Button className='edit-button'
                                size='sm'
                                variant="outline-primary"
                                onClick={() => handleEditWaterAmnt(pl.id)}>
                           Edit
                       </Button>
                   </div>
                   <div className='line-info'>
                       <h4 className='info-title'>planted date:</h4>
                       <p className='info'>{pl.startDate}</p>
                       <Button className='edit-button'
                                size='sm'
                                variant="outline-primary"
                                onClick={() => handleEditStartDate(pl.id)}>
                           Edit
                       </Button>
                   </div>
                   <div className='line-info'>
                       <h4 className='info-title'>expected harvest date:</h4>
                       <p className='info'>{pl.harvestDate}</p>
                       <Button className='edit-button'
                                size='sm'
                                variant="outline-primary"
                                onClick={() => handleEditHarvestDate(pl.id)}>
                           Edit
                       </Button>
                   </div>
                   {/*<div className='line-info'>
                       <h4 className='info-title'>notes:</h4>
                       <p className='info'>{pl.note}</p>
                       <Button className='add-note-button'>Add Note</Button>
           </div>*/}
                    <NoteList plantId={pl.id} />
                   </Card.Body>
               </Card>
            </div>
            </li>
           ))}
            </div>
        </div>
        </> 
    );
}

export default PlantPage;