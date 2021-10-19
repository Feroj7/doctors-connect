import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DoctorsDetail.css';

const DoctorsDetail = () => {

    const { doctorId } = useParams();

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const matchedDoctor = doctors.find(doctor => doctor.id === doctorId);


    return (
        <div className="mt-5">
            <div className="bg-image text-white">
                <h1>Doctors Detail</h1>
                <p>Home <span className="text-warning">| Doctors Detail</span></p>
            </div>
            <div className="mt-5">
                <Container>
                    <Row className="g-4">
                        <Col lg={3}>
                            <img className="img-fluid mb-3" src={matchedDoctor?.img} alt="" />
                            <h5>{matchedDoctor?.name}</h5>
                            <p className="text-primary">{matchedDoctor?.expertise}</p>
                            <h4>{matchedDoctor?.visit}</h4>
                        </Col>
                        <Col lg={9}>
                            <h1>About <span className="text-primary">{matchedDoctor?.name}</span> </h1>
                            <p className="text-start mt-3">{matchedDoctor?.description}</p>
                            <div className="chamber-detail text-start p-5">
                                <h5>Chamber : {matchedDoctor?.chamber}</h5>
                                <h6>Address : {matchedDoctor?.address}</h6>
                                <p className="mb-1">Visiting Hour : {matchedDoctor?.visitingHour}</p>
                                <p>Contact : {matchedDoctor?.contactNumber}</p>
                                <Link to="/bookappointment">
                                    <Button>Book an Appointment</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default DoctorsDetail;