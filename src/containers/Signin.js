import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



const Signin = () => {
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <>
            <div className="containers ml-4">
                <section className="d-flex justify-content-between">
                    <div className="left_data " style={{ width: "100%" }}>
                        <div className="sign_img ">
                            <img src="crypto2.jpg" style={{ maxWidth: 680, height: 690 }} alt="" />
                            <div className="image-logo">
                                <img src="logo.png" alt="Logo" width="50" height="50" />
                                <text>GND CRYP</text>
                            </div>
                            <div className="image-text">
                                <p>One simple way to <br /> crypto exchange</p>
                            </div>
                        </div>
                    </div>

                    <div className="right_data " style={{ width: "100%" }}>
                        <h2>Sign Up</h2>
                        <Form>
                            <Form.Text className="text-muted">
                                Welcome! Enter Your details.
                            </Form.Text>

                            <Form.Group className="mb-4 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            </Form.Group>

                            <Form.Group className="mb-4 col-lg-6" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>


                            <Button variant="primary" type="submit" >
                                Sign Up
                            </Button>
                        </Form>
                    </div>

                </section>
            </div>
        </>
    )
}
export default Signin;