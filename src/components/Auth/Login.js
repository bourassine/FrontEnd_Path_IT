import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-register.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin@example.com' && password === 'admin123') {
            navigate('/admin');
        } else if (email === 'client@example.com' && password === 'client123') {
            navigate('/questionnaire');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="form-container sign-in">
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for login</span>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <a href="#">Forgot Your Password?</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Login;
