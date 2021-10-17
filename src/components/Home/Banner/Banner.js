import React from 'react';
import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-area">
            <Container>
                <div className="text-area">
                    <h1 className="fw-bold mb-3">Search Doctor & Make An Appointment</h1>
                    <h5>Discover The Best Doctors Nearest You</h5>
                    <div className="mt-4 d-flex justify-content-center input-area">
                    <Form.Select aria-label="Default select example">
                        <option>Search Location</option>
                        <option value="1">Mirpur</option>
                        <option value="2">Dhanmondi</option>
                        <option value="3">Green Road</option>
                    </Form.Select>
                    <InputGroup>
                        <FormControl
                            placeholder="Search Doctors"
                            aria-label="Search Doctors"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                        <i className="fas fa-search"></i>
                        </Button>
                    </InputGroup>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;