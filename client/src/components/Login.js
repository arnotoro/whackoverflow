import {React, useState} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import '../assets/styles/login.css'

const Login = () => {

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
          console.log('hello world')

      }
  };



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
          <Button type="submit" variant='primary' className="mb-2 me-2">Login</Button>
        </Row >

      </Form>
    </div>
  )
}

export default Login