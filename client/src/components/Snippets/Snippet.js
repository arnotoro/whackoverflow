import React from 'react'
import { useState, useEffect, Suspense } from 'react'
import Card from 'react-bootstrap/Card'
import '../../assets/styles/snippets.css'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Snippet = () => {

    const [snippets, setSnippets] = useState([])

    useEffect(() => {
        const fetchSnippets = async () => {
            let response = await fetch('api/snippets', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }})
            response = await response.json();
            console.log(response.json);
            setSnippets(response.json);
        };
        fetchSnippets();
    }, []);


    if (snippets.length === 0) {
        return (
            <div>
                <h3>No snippets posted yet :(</h3>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Here are the latest snippets posted: </h3>
                {snippets.map((snippet) => (
                    <Card key={snippet._id} className="mb-2">
                        <Card.Body>
                            <Card.Title as='h3'>{snippet.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Submitted by {snippet.userName}
                            , at {new Date(snippet.date).toLocaleString('fi-FI', {timeZone: 'Europe/Helsinki', hour12: false})}</Card.Subtitle>
                            <Card.Text as="pre">
                                {snippet.code}
                            </Card.Text>
                            <LinkContainer to={`/snippets/${snippet._id}`}>
                                <Button size="sm">View comments</Button>
                            </LinkContainer>


                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}

export default function App() {

    return(
        <Suspense fallback="loading">
            <Snippet />
        </Suspense>
    )
}