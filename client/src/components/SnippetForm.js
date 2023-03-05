import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import '../assets/styles/snippets.css';
import { useNavigate } from 'react-router-dom';

function SnippetForm() {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [validated, setValidated] = useState(false);
  const userID = localStorage.getItem('userID');
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const form = event.target;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      //send data to backend
      event.preventDefault();
      fetch('api/snippets', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, code, userID })
      })
        .then(response => {
          if (response.status === 200) {
            console.log('Snippet created');
            navigate('/home');
            return response.json();
          } else {
            console.log('Snippet not created');
          }
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
  };
};

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'title' ? setTitle(value) : setCode(value);
  };

  return (
    <div className="snippet-container">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="snippet-form">
          <h2 style={{textAlign: 'center'}}> Create a snippet to share</h2>
          <Row className='mb-2 mt-1 ms-0 me-0'>

            {/* Snippet title input field */}
            <Form.Group>
              <Form.Label>Snippet title</Form.Label>
                <Form.Control
                    className='ms-0 me-0'
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Enter a title for your code snippet"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a title.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className='mb-2 mt-1 ms-0 me-0'>

              {/* Code input field */}
              <Form.Group>
                <Form.Label>Snippet code</Form.Label>
                  <Form.Control 
                      className='mb-2 me-1' 
                      as="textarea"
                      rows={10}
                      type="text" 
                      name="code"
                      value={code}
                      onChange={handleChange}
                      placeholder="Enter your code here"
                      required
                  />
                  <Form.Control.Feedback type="invalid">
                      Code can't be empty.
                </Form.Control.Feedback>
              </Form.Group>
          </Row>

          <Row className='mb-2 mt-1 ms-1 me-1'>
            <Button type="submit" variant='primary' className="mb-2 me-2">Post</Button>
          </Row >
        </Form>
      </div>
  );
}

export default SnippetForm;
