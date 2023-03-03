import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import HeaderLoggedIn from './components/HeaderLoggedIn';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<> <Header /> <Home /> <Footer /> </>} />
          <Route path="/home" element={<> <HeaderLoggedIn /> <Home /> <Footer /> </>} />
          <Route path="/profile" element={<> <HeaderLoggedIn /> <Profile /> <Footer /> </>} />
          <Route path="/login" element={<> <Header /> <Login /> <Footer /> </>} />
          <Route path="/register" element={<> <Header /> <Register /> <Footer /> </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
