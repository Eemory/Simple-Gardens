//firebase
import { doc, deleteDoc } from 'firebase/firestore';
import db from '../../firebase';
import { useAuth } from '../../login/AuthContext';
//css and bootstrap
import './PlantPagesIndex.css';
import { Button } from 'react-bootstrap';
import {BsTrash} from 'react-icons/bs'
//router
import { Link, useHistory } from 'react-router-dom';


//holds links to each plant page, organized by plant type
const PlantPagesIndex = ({ pages } ) => {
    const history = useHistory();
    const {currentUser} = useAuth();
    let userId;

    //solves bug with logging out
    if(!currentUser) {
        history.push('/login');
    } else {
        userId = currentUser.uid
    }

    //filters pages by owner
    const userPages = pages.filter((page) => userId === page.userId);

    //sorts pages by type 
    let flowers = userPages.filter((page) => page.type.includes('flower'));
    let vegetables = userPages.filter((page) => page.type.includes('vegetable'));
    let herbs = userPages.filter((page) => page.type.includes('herb'));
    
    //deletes object from database
    const handleDelete = async (id) => {
        const docRef = doc(db, 'pages', id);
        await deleteDoc(docRef)
    }
    
    return(
    <>
    <div className='pages-container'>
        <div className='container' style={{width: '100%'}}>
            <ul className='list-group'>
               <h5 className='card-header'>Flowers</h5>
                    {flowers.map((flower) => (
                        <li className='list-group-item' key={flower.id}>
                            <Link to= {`/pages/${flower.id}` } className='list-item' >{flower.name}</Link>
                            <Button size='sm' variant='outline-danger' onClick={() => handleDelete(flower.id)}>
                                <BsTrash/>
                            </Button>
                        </li>
                    ))}
            </ul>
        </div>
        <div className='container'>
            <ul className='list-group'>
                <h5 className='card-header'>Vegetables</h5>
                {vegetables.map((vegetable) => (
                        <li className='list-group-item' key={vegetable.id}>
                            <Link to= {`/pages/${vegetable.id}`} className='list-item' >{vegetable.name}</Link>
                            <Button size='sm' variant='outline-danger' onClick={() => handleDelete(vegetable.id)}>
                                <BsTrash/>
                            </Button>
                        </li>
                    ))}
            </ul>
        </div>
        <div className='container'>
            <ul className='list-group'>
                <h5 className='card-header'>Herbs</h5>
                {herbs.map((herbs) => (
                        <li className='list-group-item' key={herbs.id}>
                            <Link to= {`/pages/${herbs.id}`} className='list-item' >{herbs.name}</Link>
                            <Button size='sm' variant='outline-danger' onClick={() => handleDelete(herbs.id)}>
                                 <BsTrash/>
                            </Button>
                        </li>
                    ))}
            </ul>
        </div>
    </div>
                </>
    );
}

export default PlantPagesIndex;