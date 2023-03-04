import {React, useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import '../assets/styles/login.css'
import { Link, Navigate } from 'react-router-dom'

const initialState = {
    email: '',
    password: '',
};

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState(initialState);

    // if the user is already authenticated, redirect to home page
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
        const loggedUser = localStorage.getItem('auth_token');
        if (loggedUser) {
            setAuthenticated(true);
        }
    }, []);


    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

  const handleSubmit = async (event) => {
      const form = event.target;
      

      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }

      setValidated(true);
      if (form.checkValidity() === true) {
        event.preventDefault();

        // send data to backend

        await fetch('api/users/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData),
              mode: 'cors'
          })
          .then(res => {
              if (res.status === 200) {
                  console.log('login successful');
                  return res.json();
              } else {
                  alert('login failed');
              }
          })
          .then((data) => {
              console.log(data);
              if(data.token) {
                  localStorage.setItem('authToken', data.token);
                  localStorage.setItem('userID', data.userID);
                  localStorage.setItem('userName', data.userName);
                  window.location.href = '/';
              };
          })
      }
};

  if (authenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="login-container">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="login-form">
          <h2 style={{textAlign: 'center'}}> Login to CodeSnipper</h2>
          <Row className='mb-2 mt-1 ms-0 me-0'>

            {/* Email input field */}
            <Form.Group as={Col} controlid="formGridEmail">
              <Form.Label>Email</Form.Label>
                <Form.Control
                    className='ms-0 me-0'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
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
                      name="password"
                      value={formData.password}
                      onChange={handleOnChange}
                      placeholder="Enter password"
                      required
                  />
                  <Form.Control.Feedback type="invalid">
                      Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>
          </Row>

          <Row className='mb-2 mt-1 ms-1 me-1'>
            <Button type="submit" variant='primary' className="mb-2 me-2">Login</Button>
          </Row >
          <span>New user? <Link to="/register">Register</Link></span>
        </Form>
      </div>
    )
  }
}

export default Login