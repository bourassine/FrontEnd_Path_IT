import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminPage from './components/AdminPage';
import Questionnaire from './components/Questionnaire';
import Toggle from './components/Toggle';
import './App.css';

const App = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRegister = () => setIsActive(true);
    const handleLogin = () => setIsActive(false);

    const location = useLocation();
    const isAuthPage = location.pathname === '/' || location.pathname === '/register';

    return (
        <div>
            {/* Authentication container for Login and Register */}
            {isAuthPage && (
                <div className={`container ${isActive ? 'active' : ''}`} id="container">
                    <Toggle onRegister={handleRegister} onLogin={handleLogin} />
                    {isActive ? <Register /> : <Login />}
                </div>
            )}

            {/* Other pages */}
            {!isAuthPage && (
                <Routes>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/questionnaire" element={<Questionnaire />} />
                </Routes>
            )}
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <Routes>
            <Route path="/*" element={<App />} />
        </Routes>
    </Router>
);

export default AppWrapper;
