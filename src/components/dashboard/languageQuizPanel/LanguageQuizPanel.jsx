import { useNavigate } from 'react-router-dom';
import './LanguageQuizPanel.css';

const LanguageQuizPanel = () => {
    const navigate = useNavigate();
    const languageQuizzes = [
        { id: 1, name: 'English Quiz', language: 'english' },
        { id: 2, name: 'French Quiz', language: 'french' },
        { id: 3, name: 'German Quiz', language: 'german' },
    ];

    const handleStartQuiz = (quizId) => {
        const goToQuiz = languageQuizzes[quizId - 1].language;
        navigate(`/quiz/${goToQuiz}`);
    };

    return (
        <div className="quiz-panel-container">
            <h2 className='quizlink-h2'>Quick Links to Language Quizzes</h2>
            <div className="quiz-cards">
                {languageQuizzes.map((quiz) => (
                    <div key={quiz.id} className="quiz-card">
                        <h3>{quiz.name}</h3>
                        <button className='quiz-btn' onClick={() => handleStartQuiz(quiz.id)}>Start Quiz</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageQuizPanel;
