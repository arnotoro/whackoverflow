import React from 'react'
import '../assets/styles/home.css'
import Snippets from './Snippet'

const Dashboard = (props) => {
  const userName = localStorage.getItem('userName');
 
    return (
      <div className="home">
        <h1>Welcome to CodeSnipper {userName.slice(0, 1).toUpperCase() + userName.slice(1)}!</h1>
        <h2>Here are some of the latest snippets:</h2>
          <Snippets />
      </div>
    );

}

export default Dashboard;