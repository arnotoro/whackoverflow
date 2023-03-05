import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Snippet = () => {

    const [snippets, setSnippets] = useState([])

    useEffect(() => {
        fetch('api/snippets', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
        }})
        .then(res => {
            if (res.status === 200) {
                console.log('snippets retrieved');
                return res.json();
            } else {
                console.log('snippets not retrieved');
            }
        })
        .then(data => {
            console.log(data.json);
            setSnippets(data.json);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            {snippets.map((snippet, index) => (
                <Card key={snippet._id} className="mb-2">
                    <Card.Body>
                        <Card.Title>{snippet.title}</Card.Title>
                        <Card.Text>
                            <pre>{snippet.code}</pre>
                        </Card.Text>
                        <Button size="sm">Show comments</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Snippet