import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');  // Navigate to login page on button click
    };

    return (
        <>
        
            <section className="hero">
                <header>
                    <div className="logo">PATHIT</div>
                    <nav>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Contact</a>
                    </nav>
                </header>
                <div className="hero-content">
                    <h1>Discover Your IT Path</h1>
                    <p>Your gateway to exploring your ideal IT domain with personalized guidance and resources.</p>
                    <button className="cta-btn" onClick={handleClick}>Get Started</button>
                </div>
            </section>

            <section className="features">
                <h2>Why Choose Path IT?</h2>
                <div className="feature-cards">
                    <div className="card">
                        <h3>Personalized Quiz</h3>
                        <p>Answer a few questions to discover the best IT field for you.</p>
                    </div>
                    <div className="card">
                        <h3>Expert Resources</h3>
                        <p>Get tailored resources to start learning your chosen domain.</p>
                    </div>
                    <div className="card">
                        <h3>Interactive Design</h3>
                        <p>Enjoy an easy-to-use interface with AI-powered insights.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
