import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Doctors Connect</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto menu-item">
                            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                            <NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink to="/login"><Button variant="warning">Login</Button></NavLink>
                            <p className="mt-2 ms-2"></p>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;