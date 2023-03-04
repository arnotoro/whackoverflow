import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import HeaderLoggedIn from './components/HeaderLoggedIn';
import Profile from './components/Profile';
import { React, useState, useEffect } from 'react';
import Home from './components/Home';

function App() {
  // check if the user is logged in
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({
    userName: '',
    userID: ''
  });

  useEffect(() => {
    const loggedUserToken = localStorage.getItem('authToken');
    const loggedUserName = localStorage.getItem('userName');
    const loggedUserID = localStorage.getItem('userID');

    if (loggedUserToken) {

      console.log(loggedUserToken, loggedUserName, loggedUserID);
      setUser({userName: loggedUserName, userID: loggedUserID});
      setAuthenticated(true);
    }
  }, []);



  if (authenticated) {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/home" /> } />
            <Route path="/home" element={<> <HeaderLoggedIn /> <Dashboard userName={user.userName}/> <Footer /> </>} />
            <Route path="/profile" element={<> <HeaderLoggedIn /> <Profile /> <Footer /> </>} />
            <Route path="/login" element={ <Navigate to="/home" /> } />
            <Route path="/register" element={ <Navigate to="/home" /> } />
            </Routes>
        </div>
      </Router>
    )
  } else {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<> <Header /> <Home /> <Footer /> </>} />
            <Route path="/home" element={<> <Header /> <Home /> <Footer /> </>} />
            <Route path="/profile" element={<> <Header /> <Profile /> <Footer /> </>} />
            <Route path="/login" element={<> <Header /> <Login /> <Footer /> </>} />
            <Route path="/register" element={<> <Header /> <Register /> <Footer /> </>} />
          </Routes>
        </div>
      </Router>
    );
    }
}

export default App;
