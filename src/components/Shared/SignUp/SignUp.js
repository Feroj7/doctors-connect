import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {

    const { signInWithGoogle, handleNameChange, handleEmailChange, handlePasswordChange,handleName, handleSignUp } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || "/home";

    const handleFormSubmit = e => {
        handleSignUp(e)
        .then(result => {
            history.push(redirect_uri)
            handleName()
            window.location.reload()
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div>
            <Container className="mt-5">
                <h1 className="pt-5">Please Sign Up</h1>
                <Row>
                    <Col lg={6}>
                        <img className="img-fluid" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg" alt="" />
                    </Col>
                    <Col lg={6}>
                        <div className="login-form">
                            <h4 className="mb-4">Doctors Connect</h4>
                            <form onSubmit={handleFormSubmit}>
                                <Form.Control onBlur={handleNameChange} className="w-50 m-auto" type="name" placeholder="Name" required />
                                <br />
                                <Form.Control onBlur={handleEmailChange} className="w-50 m-auto" type="email" placeholder="Email" required />
                                <br />
                                <Form.Control onBlur={handlePasswordChange} className="w-50 m-auto" type="password" placeholder="Password" required />
                                <br />
                                <br />
                                <input className="mb-3 btn btn-warning w-50" type="submit" value="Sign Up" />
                            </form>
                            <NavLink to="/login">
                                <p className="mb-2">
                                    Already have an account?</p>
                            </NavLink>
                            <Button onClick={handleGoogleSignIn} variant="primary">
                                <img style={{ width: "30px" }} className="me-2" src="https://i.ibb.co/pd2Nncy/google.png" alt="" />
                                Sign In With Google
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;