import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const { user, logOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
                <Container>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <Navbar.Brand>Doctors Connect</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto menu-item">
                            <NavLink activeStyle={activeStyle} to="/home" className="me-5">Home</NavLink>
                            <NavLink activeStyle={activeStyle} to="/about" className="me-5">About</NavLink>
                            <NavLink activeStyle={activeStyle} to="/contact" className="me-5">Contact</NavLink>
                            <NavLink activeStyle={activeStyle} to="/bookappointment" className="me-5">Book an Appointment</NavLink>
                        </Nav>
                        <Nav>
                            {user.email ?
                                (<Button onClick={logOut} variant="warning" className="logout-btn">Logout</Button>)
                                :
                                (<NavLink to="/login"><Button variant="warning" className="me-5">Login</Button></NavLink>)
                            }
                            <div className="pt-2">
                                <span className="text-white ms-2">{user?.displayName}</span>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;