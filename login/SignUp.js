import React, { useRef, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {useAuth} from './AuthContext';
import './SignUp.css';

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(ev){
        ev.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match!')
        }//end if
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }//end function

    return(
        <>
        <Card className='signup-card'>
            <Card.Body className='signup-card-body'>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type='submit'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='text'>
            Already have an account? <Link to='/login'>Log In</Link>
        </div>
        </>
    );
}

export default SignUp;