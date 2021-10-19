import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const BookAppointment = () => {

    const [doctorName, setDoctorName] = useState("");
    const [visit, setVisit] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    
    const handleDoctorNameChange = e => {
        setDoctorName(e.target.value)
    }

    const handleVisitChange = e => {
        setVisit(e.target.value)
    }
    
    const handleTimeChange = e => {
        setTime(e.target.value)
    }
   
    const handleDateChange = e =>{
        setDate(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="mt-5 pt-5">
            <Container>
                <Row>
                    <Col lg={8} className="p-5">
                        <h3 className="text-start">Book Appointment</h3>
                        <hr />
                        <Form className="text-start" onSubmit={handleFormSubmit}>
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

                           <Row>
                           <Form.Group as={Col} controlId="formGridState" className="mb-3" onBlur={handleDoctorNameChange}>
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

                            
                            <Form.Group as={Col} controlId="formGridState" className="mb-3" onBlur ={handleVisitChange}>
                                <Form.Label>Choose your doctor</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>৳ 800</option>
                                    <option>৳ 1000</option>
                                    <option>৳ 1200</option>
                                </Form.Select>
                            </Form.Group>
                           </Row>

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
                            <Form.Group as={Col} controlId="formGridState" className="mb-3" onBlur ={handleTimeChange}>
                                <Form.Label>Time</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>10.00 am</option>
                                    <option>3.00 pm</option>
                                    <option>7.00 pm</option>
                                </Form.Select>
                            </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control onBlur={handleDateChange} type="date" placeholder="" />
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
                                <td>{date}</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{time}</td>
                            </tr>
                            <tr>
                                <td>Doctor Name</td>
                                <td>{doctorName}</td>
                            </tr>
                            <tr>
                                <td>Visit</td>
                                <td>{visit}</td>
                            </tr>
                            <tr style={{borderTop: '1px solid gray'}}>
                                <th>Payable Total</th>
                                <th>{visit}</th>
                            </tr>
                            </tbody>
                        </table>
                        <Button className="mt-5 w-100">Confirm Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BookAppointment;