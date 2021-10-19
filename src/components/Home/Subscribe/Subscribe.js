import React from 'react';
import { Col, Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="mt-5 p-5">
            <Container>
                <Row>
                    <Col className="text-start" lg={6}>
                        <h1 className="mb-3">Subscribe Your Email</h1>
                        <p>To get our latest news please give your email.
                            We will ivite our programs and give our offers.
                        </p>
                    </Col>
                    <Col lg={6}>
                    <div className="mt-3 email-field">
                    <InputGroup>
                        <FormControl
                            placeholder="Enter your email"
                            aria-label="Enter your email"
                            aria-describedby="basic-addon2"
                            className="p-3"
                        />
                        <Button variant="primary" id="button-addon2">
                        Subscribe Now
                        </Button>
                    </InputGroup>
                        
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Subscribe;