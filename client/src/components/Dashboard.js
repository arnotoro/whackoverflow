import { React, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import '../assets/styles/home.css'

const Dashboard = (props) => {
    console.log(props);
    console.log(props.userName);
    if (!props.userName) {
      return (
        <Navigate to="/login" />
      )
    }
    
    return (
      <div className="home">
        <h1>Welcome to CodeSnipper {props.userName.slice(0, 1).toUpperCase() + props.userName.slice(1)}!</h1>
      </div>
    );

}

export default Dashboard