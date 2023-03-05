import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(comment);
    setComment('');
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={comment} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;




const handleCommentSubmit = async (event) => {        
    await fetch('api/snippets/:id/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: event }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}
