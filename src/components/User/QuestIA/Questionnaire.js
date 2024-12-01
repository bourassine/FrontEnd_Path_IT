import React, { useState } from 'react';
import './Questionnaire.css';

const questions = [
    {
        question: 'What excites you more when learning something new?',
        options: [
            { text: 'Building something useful from scratch.', icon: '🔧' },
            { text: 'Understanding how things work behind the scenes.', icon: '🔍' },
            { text: 'Maintaining and improving existing things.', icon: '⚙️' },
            { text: 'Protecting things from getting broken.', icon: '🛡️' },
        ],
    },
    {
        question: 'What do you enjoy most in problem-solving?',
        options: [
            { text: 'Finding creative solutions.', icon: '🎨' },
            { text: 'Understanding root causes.', icon: '🔎' },
            { text: 'Improving existing solutions.', icon: '🔧' },
            { text: 'Preventing problems altogether.', icon: '🛡️' },
        ],
    },
];

const Questionnaire = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            calculateResult();
        }
    };

    const calculateResult = () => {
        const domainMapping = {
            'Building something useful from scratch.': 'Software Engineering',
            'Understanding how things work behind the scenes.': 'Data Science',
            'Maintaining and improving existing things.': 'DevOps',
            'Protecting things from getting broken.': 'Cybersecurity',
        };
        const selectedDomains = answers.map((answer) => domainMapping[answer] || 'Unknown');
        const recommendedDomain = selectedDomains[0];
        setResult(recommendedDomain);
    };

    if (result) {
        return (
            <div className="result-container">
                <h1>Congratulations!</h1>
                <p>Your recommended IT domain is: <strong>{result}</strong></p>
                <button onClick={() => window.location.reload()}>Retake Quiz</button>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    return (
        <div className="questionnaire-page">
            <div className="questionnaire-container">
                {/* Barre de progression */}
                <div className="step-progress-bar">
                    {questions.map((_, index) => (
                        <div
                            key={index}
                            className={`step ${index <= currentQuestionIndex ? 'active' : ''}`}
                        >
                            <div className="circle">{`Step ${index + 1}`}</div>
                        </div>
                    ))}
                </div>

                {/* Affichage des questions */}
                <h1>Question {currentQuestionIndex + 1} of {questions.length}</h1>
                <p className="question-text">{currentQuestion.question}</p>
                <div className="options-container">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option.text)}
                            className="option-button"
                        >
                            <span className="icon">{option.icon}</span> {option.text}
                        </button>
                    ))}
                </div>

                {/* Bouton "Retour" */}
                {currentQuestionIndex > 0 && (
                    <button
                        className="back-button"
                        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    >
                        ← Back
                    </button>
                )}
            </div>
        </div>
    );
};

export default Questionnaire;
