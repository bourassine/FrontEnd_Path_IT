import React from 'react';



const Register = () => (
    <div className="form-container sign-up">
        <form>
            <h1>Create Account</h1>
            <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
        </form>
    </div>
);

export default Register;
