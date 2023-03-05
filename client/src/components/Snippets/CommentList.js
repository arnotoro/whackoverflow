import React, { useState, useEffect } from 'react';

function CommentList({ snippetId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://api.example.com/snippets/${snippetId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [snippetId]);

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  );
}

export default CommentList;
