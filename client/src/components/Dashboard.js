import React from 'react'
import '../assets/styles/home.css'
import Snippets from './Snippets/Snippet'

const Dashboard = (props) => {
  const userName = localStorage.getItem('userName');
 
    return (
      <div className="ms-2 home">
        <h1>Welcome to CodeSnipper {userName.slice(0, 1).toUpperCase() + userName.slice(1)}!</h1>
          <Snippets />
      </div>
    );

}

export default Dashboard;