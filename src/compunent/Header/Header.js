import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    // const { logOut,user } = useAuth();
    const {user,logOut} = useAuth();
    return (
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
        <Container>
            <Navbar.Brand as={Link} to="/home" className="fw-bold">TRAVEL  <span className="text-warning">GURU</span></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end ">
                <Link to="/home" className='nav text-white'>Home</Link>
                <Link to="/TourArea" className='nav text-white'>TourArea</Link>
                
                <Link to="/about" className='nav text-white'>About us</Link>
                <Link to="/contact" className='nav text-white'>Contact us</Link>

                {user.email ?
                    <div>
                        <img src={user.photoURL} alt="mdo" width="32" height="32" className="rounded-circle me-3" />
                        <Navbar.Text>
                            Signed: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        <Button onClick={logOut} variant="light" className="ms-3">Logout</Button>
                    </div>

                    : <Link to="/login" className='nav text-white'>Login</Link>} 
                    {/* <Link to="/login" className='nav text-white'>Login</Link> */}

            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;