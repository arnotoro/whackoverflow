import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function SnippetList() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    fetch('api/snipepts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        setSnippets(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }, []);

  return (
    <div>
      {snippets.map(snippet => (
        <Card key={snippet.id}>
          <Card.Body>
            <Card.Title>{snippet.title}</Card.Title>
            <Card.Text>{snippet.code}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default SnippetList;
