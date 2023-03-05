import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import '../../assets/styles/snippets.css'
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';


const Snippet = () => {
    const { id } = useParams();
    const [snippet, setSnippets] = useState([])
    const [authenticated, setAuthenticated] = useState(false);
    const loggedUserToken = localStorage.getItem('authToken');
    const [comments, setComments] = useState([]);

    // check if the user is logged in and fetch the snippet data
    useEffect(() => {
        if (loggedUserToken) {
            setAuthenticated(true);
        }
        fetch(`/api/snippets/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(response);
            }
        })
        .then(data => {
            setSnippets(data.json)
            setComments(data.json.comments)
        });
    }, []);

    const handleCommentSubmit = async (comment) => {

        await fetch(`/api/snippets/${id}/comments`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${loggedUserToken}`,
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({comment}),
            })
            .then(res => res.json())
            .then(data => {
                setComments([...comments, data.json])

            })
            .catch(err => {
                console.log(err);
            })
            window.location.reload(true);
    }

    if (!authenticated) {

        return (
            <div>
                <Card key={snippet._id} className="mb-2">
                    <Card.Body>
                        <Card.Title as='h3'>{snippet.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Submitted by {snippet.userName}
                        , at {new Date(snippet.date).toLocaleString('fi-FI', {timeZone: 'Europe/Helsinki', hour12: false})}</Card.Subtitle>
                        <Card.Text as="pre">
                            {snippet.code}
                        </Card.Text>

                        <Card.Title as={'h4'}>Comments</Card.Title>
                        <ul>
                            {comments.map((comment, index) => (
                                <li>{comment}</li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    } else {
        return (
            <div>
                <Card key={snippet._id} className="mb-2">
                    <Card.Body>
                        <Card.Title as='h3'>{snippet.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Submitted by {snippet.userName}
                        , at {new Date(snippet.date).toLocaleString('fi-FI', {timeZone: 'Europe/Helsinki', hour12: false})}</Card.Subtitle>
                        <Card.Text as="pre">
                            {snippet.code}
                        </Card.Text>

                        <Card.Title as={'h4'}>Comments</Card.Title>

                        <ul>
                            {comments.map((comment, index) => (
                                <li>{comment}</li>
                            ))}
                        </ul>
                        <CommentForm className="mt-2" onSubmit={handleCommentSubmit}/>
                    </Card.Body>
                </Card>

            </div>
            )
        }
}


export default Snippet;