import React from 'react';

const QuizQuestion = ({ index, question, selectedOption, onOptionChange, onClearClick }) => {
    return (
        <div className="question-container">
            <p className='question-p'><span>Q {index + 1}.</span> {question.question}</p>
            <p className='clear-btn' onClick={() => onClearClick(index)}>Clear</p>
            <div className="answer-container">
                {question.options.map((opt, j) => (
                    <div className='option-container' key={j}>
                        <input
                            type="radio"
                            id={`q${index}_${j}`}
                            name={`q${index}`}
                            checked={selectedOption === j}
                            onChange={() => onOptionChange(index, j)}
                        />
                        <label htmlFor={`q${index}_${j}`}>{opt}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
