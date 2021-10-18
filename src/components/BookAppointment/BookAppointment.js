import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './BookAppointment.css';

const BookAppointment = () => {
    return (
        <div className="mt-5 pt-5">
            <Container>
                <Row>
                    <Col lg={8}>
                        <h3 className="text-start">Book Appointment</h3>
                        <hr />
                        <Form className="text-start">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="name" placeholder="Name" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Are you new patient ?</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Please specify your sex</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} controlId="formGridState" className="mb-3">
                                <Form.Label>Choose your doctor</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Prof. Dr. Pran Gopal Datta</option>
                                    <option>Dr. Asaduzzaman Biddut</option>
                                    <option>Dr. Nurun Nahar Fatema</option>
                                    <option>Prof. Dr. Md. Abdul Mannan</option>
                                    <option>Prof. Dr. Suraiya Harun</option>
                                    <option>Dr. Melia Choudhury</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Address" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" placeholder="" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Accept Terms of Services and Privacy Policy" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-50">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={4} className="p-5">
                        <h3 className="text-start">Booking Summary</h3>
                        <hr />
                        <table className="text-start w-100">
                            <tbody>
                            <tr>
                                <td>Date</td>
                                <td>20/10/2021</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>7.00pm</td>
                            </tr>
                            <tr>
                                <td>Doctor Name</td>
                                <td>Prof. Dr. Pran Gopal Datta</td>
                            </tr>
                            <tr>
                                <td>Visit</td>
                                <td>৳ 1000</td>
                            </tr>
                            <tr style={{borderTop: '1px solid gray'}}>
                                <th>Payable Total</th>
                                <th>৳ 1000</th>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookAppointment;