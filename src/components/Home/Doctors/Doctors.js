import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Doctors.css';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className="mt-5">
            <Container>
                <h1>Our Specialized Doctors</h1>
                <Row className="g-4 mt-5">
                    {
                        doctors.map(doctor => 
                            <Col key={doctor?.id} lg={4}>
                               <div className="doctor-card border">
                               <div>
                                    <img className="img-fluid mb-3 img-area" src={doctor?.img} alt="" />
                                </div>
                                <h3>{doctor?.name}</h3>
                                <p>{doctor?.degree}</p>
                                <p className="text-primary">{doctor?.expertise}</p>
                                <h5>৳ {doctor?.visit}</h5>
                                <Button variant="primary">View Details</Button>
                               </div>
                            </Col>
                            
                            )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;