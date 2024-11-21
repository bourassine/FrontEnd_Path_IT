import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Import for transitions
import Home from './components/Home/Home'; // Import Home component
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminPage from './components/Admin/AdminPage';
import Questionnaire from './components/User/QuestIA/Questionnaire';
import Toggle from './components/Auth/Toggle';
import './App.css';

const App = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRegister = () => setIsActive(true);
    const handleLogin = () => setIsActive(false);

    const location = useLocation();
    const isAuthPage =
        location.pathname === '/login' || location.pathname === '/register';

    return (
        <div>
            {/* Authentication container for Login and Register */}
            {isAuthPage && (
                <div className={`container ${isActive ? 'active' : ''}`} id="container">
                    <Toggle onRegister={handleRegister} onLogin={handleLogin} />
                    {isActive ? <Register /> : <Login />}
                </div>
            )}

            {/* Other pages with transition effects */}
            {!isAuthPage && (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <Routes location={location}>
                            <Route path="/" element={<Home />} /> {/* Home page */}
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/questionnaire" element={<Questionnaire />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
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
