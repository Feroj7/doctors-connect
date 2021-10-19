import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-5">
            <img className="img-fluid" src="https://image.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg" alt="" />
            <br />
            <Link to="/home">
                <Button variant="primary">Go Back to Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;

