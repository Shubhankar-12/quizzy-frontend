import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChooseQuiz from './chooseQuiz/ChooseQuiz'
import QuizPage from './QuizPage'

const Quiz = () => {
    return (
        <Routes>
            <Route index element={<ChooseQuiz />} />
            {/* : for route parameter */}
            <Route path=':language' element={<QuizPage />} />
        </Routes>
    )
}

export default Quiz