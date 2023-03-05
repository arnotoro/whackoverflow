import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function CommentForm({ onSubmit }) {
    const token = localStorage.getItem('authToken');
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (event) => {   
        event.preventDefault();
        onSubmit(commentText);
    }

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Add a comment</Form.Label>
            <Form.Control
                type="text"
                name="comment"
                value={commentText}
                onChange={handleChange}
                placeholder="Enter your comment here"
            />
        </Form.Group>
        <Button type="submit" size="sm" className="mt-2">Submit</Button>
    </Form>
  );
}

export default CommentForm;