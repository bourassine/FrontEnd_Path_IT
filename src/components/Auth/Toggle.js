import React from 'react';


const Toggle = ({ onRegister, onLogin }) => (
    <div className="toggle-container">
        <div className="toggle">
            <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of the site features.</p>
                <button className="hidden" onClick={onLogin}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of the site features.</p>
                <button className="hidden" onClick={onRegister}>Sign Up</button>
            </div>
        </div>
    </div>
);

export default Toggle;
