import React from 'react'
import '../assets/styles/home.css'
import SnippetList from './Snippets/SnippetList';

const Dashboard = (props) => {
  const userName = localStorage.getItem('userName');
 
    return (
      <div className="ms-2 home">
        <h1>Welcome to CodeSnipper user: <b>{userName.slice(0, 1).toUpperCase() + userName.slice(1)}</b> !</h1>
          <SnippetList />
      </div>
    );

}

export default Dashboard;