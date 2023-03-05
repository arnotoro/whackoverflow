import React from 'react'
import SnippetList from './Snippets/SnippetList'
import '../assets/styles/home.css'

const Home = () => {
  return (
    <div className="ms-2 home">
        <h1>Welcome to CodeSnipper!</h1>
        <SnippetList />
    </div>
  )
}

export default Home