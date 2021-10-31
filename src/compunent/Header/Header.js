import React from 'react';
import { Button, Container, Dropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    // const { logOut,user } = useAuth();
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand as={Link} to="/home" className="fw-bold">TRAVEL  <span className="text-warning">GURU</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                    <Link as={HashLink} to="/home#home" className='nav text-white'>Home</Link>
                    <Link as={HashLink} to="/home#TourArea" className='nav text-white'>TourArea</Link>

                    <Link as={HashLink} to="/home#about" className='nav text-white'>About us</Link>
                    <Link as={HashLink} to="/home#contact" className='nav text-white'>Contact us</Link>
                    {user.email && <Dropdown className="me-3">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Admin Panel
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/myBooking">My Booking</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/manage">Manage Booking</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/addTour">Add Tour Area</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    }

                    {user.email ?
                        <div>

                            <Navbar.Text>
                                Signed: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                            <Button  onClick={logOut} variant="outline-warning" className="ms-3">Logout</Button>
                        </div>

                        : <Button variant="outline-info" ><Link to="/login" className='nav text-white'>Login</Link></Button>}
                  

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;