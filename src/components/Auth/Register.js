import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Frontend validation
        if (!formData.firstName.trim()) {
            toast.error('First name is required.');
            return;
        }
        if (!formData.lastName.trim()) {
            toast.error('Last name is required.');
            return;
        }
        if (!formData.email.includes('@')) {
            toast.error('Invalid email format.');
            return;
        }
        if (formData.password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://localhost:8052/api/pathit/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Registration successful!');
                const data = await response.json();
                console.log('Registration successful:', data);
            } else if (response.status === 409) {
                toast.error('Email already exists. Please try a different email.');
            } else {
                toast.error('Registration failed. Please try again.');
            }
       
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container sign-up">
            <ToastContainer position="top-right" autoClose={3000} />
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Register;
