import './ChooseQuiz.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseQuiz = () => {
    const [language, setLanguage] = useState('english');
    const navigate = useNavigate();

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    }

    const handleStartBtn = () => {
        navigate(`/quiz/${language}`);
    }

    return (
        <div className='choosequiz-container'>
            <div className="choosequiz-form">
                <p className='choosequiz-p'>Choose Quiz Language</p>
                <select name="language" className='choosequiz-lang' onChange={handleLanguageChange}>
                    <option value="english">English</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                </select>
                <button className='quiz-start-btn' onClick={handleStartBtn}>Start</button>
            </div>
        </div>
    );
}

export default ChooseQuiz;
