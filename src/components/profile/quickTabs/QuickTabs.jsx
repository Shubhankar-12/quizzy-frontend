import React from 'react'
import ProfileTab from '../tabs/ProfileTab'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { openModal } from '../../../slices/modalSlice';

const QuickTabs = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUpdateClick = () => {
        dispatch(openModal());
    }
    const handleTakeQuiz = () => {
        navigate('/dashboard');
    }
    const handleKnowMore = () => {
        navigate('/');
    }
    return (
        <div className='profile-quick-tabs'>
            <ProfileTab tabHead="Ready for Quiz?" tabDesc="Show others that you are the best!" handleClick={handleTakeQuiz} />
            <ProfileTab tabHead="Update" tabDesc="Keep your profile updated so that people know you better." handleClick={handleUpdateClick} />
            <ProfileTab tabHead="Why Quizzy?" tabDesc="Learn more about quizzy and what services we provide." handleClick={handleKnowMore} />
        </div>
    )
}

export default QuickTabs