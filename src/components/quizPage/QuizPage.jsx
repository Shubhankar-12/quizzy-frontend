import React, { useEffect, useState } from 'react';
import './QuizPage.css';
import { useGetLanguageQuizQuery } from '../../slices/quizApiSlice';
import QuizQuestion from './QuizQuestion';
import { useUpdateStatsMutation } from '../../slices/usersApiSlice';
import { useParams } from 'react-router-dom';
import QuizResult from './quizResult/QuizResult';
import Loader from '../loadingPage/Loader';

const QuizPage = () => {
    const [selectedOptions, setSelectedOptions] = useState(Array(0).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const { language } = useParams();
    const { data: quizData, isLoading: isQuestionLoading } = useGetLanguageQuizQuery(language);
    const [updateStats, { isLoading }] = useUpdateStatsMutation();
    const [scoredPoint, setScoredPoint] = useState(0);
    const [totalPoint, setTotalPoint] = useState(0);

    useEffect(() => {
        if (quizData?.questions) {
            setQuestions(quizData.questions);
            setSelectedOptions(Array(quizData.questions.length).fill(null));
        }
    }, [quizData]);

    const handleOptionChange = (questionIndex, optionIndex) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(updatedSelectedOptions);
    };

    const handleClearClick = (questionIndex) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[questionIndex] = null;
        setSelectedOptions(updatedSelectedOptions);
    };

    const calculatePoints = () => {
        let totalPoints = 0;
        let scoredPoints = 0;
        questions.forEach((qs, idx) => {
            const selectedOptionIndex = selectedOptions[idx];
            const correctOptionIndex = qs.options.findIndex((opt) => opt === qs.correctAnswer);
            if (selectedOptionIndex === correctOptionIndex) {
                scoredPoints += qs.difficulty;
            }
            totalPoints += qs.difficulty;
        });
        return { scoredPoints, totalPoints };
    };

    const handleSubmit = async () => {
        const { scoredPoints, totalPoints } = calculatePoints();
        setScoredPoint(scoredPoints);
        setTotalPoint(totalPoints);
        const res = await updateStats({
            additionalCurrentPoints: scoredPoints,
            additionalTotalPoints: totalPoints
        }).unwrap();
        setIsSubmitted(true);
    };

    return (
        <div className='quiz-page'>
            {isSubmitted && <QuizResult score={scoredPoint} total={totalPoint} />}
            {isQuestionLoading && <Loader />}
            {isLoading ? (<Loader />) : (

                <div className="quiz-container">
                    {questions?.map((qs, idx) => (
                        <QuizQuestion
                            key={idx}
                            index={idx}
                            question={qs}
                            selectedOption={selectedOptions[idx]}
                            onOptionChange={handleOptionChange}
                            onClearClick={handleClearClick}
                        />
                    ))}
                    <div className="quiz-submit">
                        <button onClick={handleSubmit} className='quiz-submit-btn'>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizPage;
