import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="mt-5">
            <div className="contact-bg-img mb-5 text-white">
                <h1>Contact</h1>
                <p>Home <span className="text-warning">| Contact</span></p>
            </div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div>
                            <i className="fas fa-phone-alt text-primary"></i>
                            <h5>Phone</h5>
                            <p>01234567890</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <i className="far fa-envelope text-primary"></i>
                        <h5>Email</h5>
                        <p>contact@doctor-connect.com</p>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <i className="fas fa-map-marker-alt text-primary"></i>
                            <h5>Address</h5>
                            <p>North Tower, Uttara</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 pt-5">
                    <Col lg={6}>
                        <h1 className="text-start mb-3 text-primary">Get In Touch</h1>
                        <Form className="text-start">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="name" placeholder="Name" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
                                <Form.Control type="number" placeholder="Phone" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Control
                                as="textarea"
                                placeholder="Write your message"
                                style={{ height: '100px' }}
                            />
                        </Form>
                    </Col>
                    <Col lg={6}>
                        <img className="img-fluid" src="https://image.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;