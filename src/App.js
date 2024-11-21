import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminPage from './components/AdminPage';
import Questionnaire from './components/Questionnaire';
import Toggle from './components/Toggle';
import './App.css';


const App = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRegister = () => {
      console.log("Switching to Register");
      setIsActive(true);
  };
  const handleLogin = () => {
      console.log("Switching to Login");
      setIsActive(false);
  };
  

    return (
        <Router>
            <div className={`container ${isActive ? 'active' : ''}`} id="container">
                {/* Toggle Component for visual interaction */}
                <Toggle onRegister={handleRegister} onLogin={handleLogin} />

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/questionnaire" element={<Questionnaire />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
