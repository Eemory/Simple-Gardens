import React, { useState } from 'react';
//css and bootstrap
import './NavBar.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
//firebase hooks
import { useAuth } from '../../login/AuthContext'

//navbar with links
function NavBar() {
    //variables
    const { setError} = useState('');
    const { logout } = useAuth();
    const history = useHistory();

    //handles logout functionality
    async function handleLogout(){
        //setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }
    //bg="light"
    return(
        <Navbar  className='navbar'  expand="lg">
                    <Container className='nav-container'>
                        <Navbar.Brand className='brand' as={Link} to='/'>Simple Gardens</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                        <Nav className='nav'>
                            <Nav.Link className='link' as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link className='link'  as={Link} to='/addplant'>Add Plant</Nav.Link>
                            <Nav.Link className='link'  as={Link} to='/profile'>Profile </Nav.Link>
                            <Button className='button' variant='link' onClick={handleLogout}>Log Out</Button>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar> 
          
    );
}

export default NavBar;