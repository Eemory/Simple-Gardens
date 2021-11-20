//react hooks
import React, { useState } from 'react';
//css and bootstrap
import './CreatePlantPage.css';
import { Card, Form, FormGroup, Alert } from 'react-bootstrap';
//components
import NavBar from '../navbar/NavBar';
import PlantPagesIndex from '../plant-pages-index/PlantPagesIndex';
import Submit from '../submit-button/Submit';

function CreatePlantPage( { pages } ){

    //variables
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [season, setSeason] = useState('');
    const [waterAmnt, setWaterAmnt] = useState('');
    const [note, setNote] = useState('');
    const [startDate, setStartDate] = useState('');
    const [harvestDate, setHarvestDate] = useState('');
    const [image, setImage] = useState('');
    const types = ['image/png', 'image/jpeg'];
    

    //resets state after submission
   const clearState = () => {
      setName('')
      setType('')
      setSeason('')
      setWaterAmnt('')
      setNote('')
      setStartDate('')
      setHarvestDate('')
      setImage('');
   };

//handles image verification
const changeImage = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)){
        setImage(selected);
        setError('');
    } else  {
        setImage(null);
        setError('Please select an image file (png or jpeg)')
    }
}

    return(
        <>
        <NavBar />
        <h1>What are you planting?</h1>
        <div className='page'>
            <div className='index'>
                <PlantPagesIndex pages={pages}/>
            </div>
            <div className='add-form'>
                <Card className='form-container'>
                <h3>Plant Information</h3>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form className='submit-form'>
                        <FormGroup className='form-item'>
                            <input
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value.toLowerCase())}
                            ></input>
                        </FormGroup>
                        <FormGroup className='form-item'>
                            <input
                            placeholder='Type'
                            name='type'
                            value={type}
                            onChange={(e) => setType(e.target.value.toLowerCase())} ></input>
                        </FormGroup>
                        <FormGroup className='form-item'>
                            <input
                            placeholder='Season'
                            name='season'
                            value={season}
                            onChange={(e) => setSeason(e.target.value.toLowerCase())} ></input>
                        </FormGroup>
                        <FormGroup className='form-item'>
                            <input
                            placeholder='Water (per week)'
                            name='waterAmnt'
                            value={waterAmnt}
                            onChange={(e) => setWaterAmnt(e.target.value)} ></input>
                        </FormGroup>
                        <FormGroup className='form-item'>
                            <label>Planted Date</label>
                            <input
                            placeholder='mm/dd/yyyy'
                            name='start-date'
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)} ></input>
                        </FormGroup>
                        <FormGroup className='form-item'>
                            <label>Expected Harvest Date</label>
                            <input
                            placeholder='mm/dd/yyyy'
                            name='harvest-date'
                            value={harvestDate}
                            onChange={(e) => setHarvestDate(e.target.value)} ></input>
                        </FormGroup>
                        <FormGroup controlId="formFile" className="mb-3">
                            <Form.Label>Upload an image to submit your plant!</Form.Label>
                            <Form.Control type="file" onChange={changeImage}/>
                        </FormGroup>
                        {image && <Submit
                         image={image}
                         setImage={setImage}
                         name={name}
                         type={type}
                         season={season}
                         waterAmnt={waterAmnt}
                         startDate={startDate}
                         harvestDate={harvestDate}
                         note={note}
                         clearState={clearState}
                         />}
                        
                   </Form>
                </Card>
            </div>
        </div>
        </>
    );
                        }


export default CreatePlantPage;