import React from 'react'
import Snippet from './Snippets/Snippet'
import '../assets/styles/home.css'

const Home = () => {
  return (
    <div className="ms-2 home">
        <h1>Welcome to CodeSnipper!</h1>
        <Snippet />
    </div>
  )
}

export default Home