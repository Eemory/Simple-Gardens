import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import {useAuth} from './AuthContext';
import { Link } from "react-router-dom";
import './ForgotPassword.css';

function ForgotPassword(){

    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(ev){
        ev.preventDefault()

        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }//end function

    return(
    <>
        <Card  className='forgot-password-card'>
            <Card.Body className='fp-card-body'>
                <h2 className='text-center mb-4'>Password Reset</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type='submit'>
                        Reset Password
                    </Button>
                </Form>
                <div className='w-100' text-center mt-3>
                    <Link to='/login'>Log in</Link>
                </div>
            </Card.Body>
        </Card>
        <div className='text'>
            Need an account? <Link to='/signup'>Sign Up</Link>
        </div>
    </>
    );
}

export default ForgotPassword; 