import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="mt-5">
            <div className="about-bg-img text-white">
                <h1>About</h1>
                <p>Home <span className="text-warning">| About</span></p>
            </div>
            <Container>
                <Row className="mt-5 pt-5">
                    <Col lg={6}>
                        <img className="about-img img-fluid" src="https://templates.envytheme.com/mediva/default/assets/img/queries/queries-2.png" alt="" />
                    </Col>
                    <Col lg={6} className="text-start">
                        <h2 className="mb-3">We Are Trusted The Best Certificate Healthcare Specialist</h2>
                        <p>Here you can find different specialist doctors,their chamber location and contact no and also you can book appointment of doctor as your need.</p>
                        <div className="mt-5 text-primary">
                            <ul>
                                <li><i className="fas fa-check-square"></i> A Good Environment For Work</li>
                                <li><i className="fas fa-check-square"></i> Digital Laboratory</li>
                                <li><i className="fas fa-check-square"></i> Emergency Services</li>
                                <li><i className="fas fa-check-square"></i> Professional Doctors</li>
                                <li><i className="fas fa-check-square"></i> Scientific skills For Getting A Better Result</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="d-flex justify-content-around stat p-5 mt-5">
                <div>
                    <h1>1,100</h1>
                    <p>Expert Doctors</p>
                </div>
                <div>
                    <h1>800</h1>
                    <p >Top Hospitality</p>
                </div>
                <div>
                    <h1>2,067</h1>
                    <p>Happy Clients</p>
                </div>
                <div>
                    <h1>3,265</h1>
                    <p>Innovative Approach</p>
                </div>
            </div>
        </div>
    );
};

export default About;