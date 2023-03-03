import React from 'react'
import { useState } from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import '../assets/styles/register.css'

const Register = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.target;
        const data = new FormData(form);
        

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        if (form.checkValidity() === true) {
            // send data to backend
            console.log(data);

        }
    };

    return (
        <div className="register-container">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="register-form">
                <h2 style={{textAlign: 'center'}}> Register to CodeSnipper</h2>
                <Row className='mb-2 mt-1 ms-0 me-0'>

                    {/* First name input field */}
                    <Form.Group as={Col} controlid="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            className='ms-0 me-0'
                            type="text"
                            placeholder="First name"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a first name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Last name input field */}
                    <Form.Group as={Col} controlid="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            className='ms-0 me-0'
                            type="text"
                            placeholder="Last name"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a last name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Username input field */}
                    <Form.Group as={Col} controlid="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            className='ms-0 me-0'
                            type="text"
                            placeholder="Username"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a usename.
                        </Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row className='mb-2 mt-1 ms-0 me-0'>
                    {/* Email input field */}
                    <Form.Group as={Col} controlid="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className='ms-0 me-0'
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide an email address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className='mb-2 mt-1 ms-0 me-0'>
                    {/* Password input field */}
                    <Form.Group as={Col} controlid="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            className='mb-2 me-1' 
                            type="password" 
                            placeholder="Enter password"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a password.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-2 mt-1 ms-1 me-1'>
                    <Button type="submit" variant='primary' className="mb-2 me-2">Register</Button>
                </Row >
            </Form>
        </div>
      );
}

export default Register