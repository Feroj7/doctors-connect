import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {


    return (
        <div className="footer-area text-white mt-5 p-5">
            <Container>
                <Row>
                    <Col className="text-start mb-3">
                        <h1 className="mb-3">Doctors Connect</h1>
                        <p>Here you can find different specialist doctors,their chamber location and contact no and also you can book appointment of doctor as your need.</p>
                        <i className="fab fa-facebook-f icon-style"></i>
                        <i className="fab fa-twitter icon-style"></i>
                        <i className="fab fa-google icon-style"></i>
                    </Col>
                    <Col className="mb-3">
                     <h3 className="mb-3">Departments</h3>
                     <p>Ear, Nose & Throat Specialist</p>
                     <p>Cancer Specialist</p>
                     <p>Child Specialist</p>
                     <p>Cardiologist</p>
                     <p>Pediatric & Neonatology Specialist</p>
                    </Col>
                    <Col>
                        <h3 className="mb-3">Get In Touch</h3>
                               <div>
                                    <i className="fas fa-phone-alt"></i>
                                    <h5>Phone</h5>
                                    <p>01234567890</p>
                               </div>
                                <div>
                                    <i className="far fa-envelope"></i>
                                    <h5>Email</h5>
                                    <p>contact@doctor-connect.com</p>
                                </div>
                                <div>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h5>Address</h5>
                                    <p>North Tower, Uttara</p>
                                </div>
                     </Col>
                </Row>
                <span>Copyrigh &copy; 2021 || All Rights Reserved By Doctors Connect</span>
            </Container>
        </div>
    );
};

export default Footer;