import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import '../assets/styles/register.css'


const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const passwordValidator = {
    isLenthy: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasUpperCase: false,
    hasLowerCase: false,
    confirmPassword: false,
};

const Register = () => {
    // validate form
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [passwordError, setPasswordError] = useState(passwordValidator);

    useEffect(() => {

    }, [formData]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'password') {
            const isLenthy = value.length >= 8;
            const hasNumber = /[0-9]/.test(value);
            const hasSpecialChar = /[!,@,#,$,%,^,&,*]/.test(value);
            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);

            setPasswordError({...passwordError, isLenthy, hasNumber, hasSpecialChar, hasUpperCase, hasLowerCase});
        } 
        if (name === 'confirmPassword') {
            setPasswordError({...passwordError, confirmPassword: value === formData.password})
        }

    };
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
            console.log('hello world')

        }
    };

    return (
        <div className="register-container">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="register-form">
                <h2 className="ms-1"> Register to CodeSnipper</h2>
                <Form.Text className="text-muted ms-1"> Please fill out all the fields below to register. </Form.Text>
                <Row className='mb-2 mt-1 ms-0 me-0'>

                    {/* First name input field */}
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            className='ms-0 me-0'
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            placeholder="First name"
                            onChange={handleOnChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a first name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Last name input field */}
                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            className='ms-0 me-0'
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            placeholder="Last name"
                            onChange={handleOnChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a last name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Username input field */}
                    <Form.Group as={Col}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            className='ms-0 me-0'
                            type="text"
                            name="username"
                            value={formData.username}
                            placeholder="Username"
                            onChange={handleOnChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a usename.
                        </Form.Control.Feedback>
                    </Form.Group>

                </Row>

                <Row className='mb-2 mt-1 ms-0 me-0'>
                    {/* Email input field */}
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className='ms-0 me-0'
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter email"
                            onChange={handleOnChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide an email address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className='mb-2 mt-1 ms-0 me-0'>
                    {/* Password1 input field */}
                    <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            className='mb-1 me-1' 
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Enter password"
                            onChange={handleOnChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Password2 input field */}
                    <Form.Group as={Col}>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control 
                            className='mb-1 me-1' 
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            placeholder="Enter password again"
                            onChange={handleOnChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Text className='mb-0'>
                        <span>Password requirements:</span>
                        <ul>
                            <li className={passwordError.isLenthy ? "text-successs" : "text-danger"}>At least 8 characters</li>
                            <li className={passwordError.hasUpperCase ? "text-successs" : "text-danger"}>At least one upper case</li>
                            <li className={passwordError.hasLowerCase ? "text-successs" : "text-danger"}>At least one lower case</li>
                            <li className={passwordError.hasNumber ? "text-successs" : "text-danger"}>At least one number</li>
                            <li className={passwordError.hasSpecialChar ? "text-successs" : "text-danger"}>At least one special character</li>
                            <li className={passwordError.confirmPassword ? "text-successs" : "text-danger"}>Passwords need to match</li>
                        </ul>
                    </Form.Text>
                </Row>


                <Row className='mb-2 mt-1 ms-1 me-1'>
                    <Button type="submit" variant='primary' className="mb-2 me-2" disabled={Object.values(passwordError).includes(false)}>Register</Button>
                </Row >
            </Form>
        </div>
      );
}

export default Register