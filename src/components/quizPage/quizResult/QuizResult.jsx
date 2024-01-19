import './QuizResult.css'
import { useNavigate } from 'react-router-dom'

const QuizResult = ({ score, total }) => {
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate('/dashboard');
    }
    return (
        <div className='modal'>
            <div className="quiz-result">
                <h3 className='quiz-result-h3'>Congratulations!</h3>
                <p className='quiz-result-p'>You have scored: <span className='quiz-scored'>{score}</span> out of <span className='quiz-total'>{total}</span>.</p>
                <div className="quiz-result-btn">
                    <button onClick={handleContinue}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default QuizResult