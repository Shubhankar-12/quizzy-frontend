import './dashboard.css'
import UserSummary from './summary/UserSummary'
import LanguageQuizPanel from "./languageQuizPanel/LanguageQuizPanel";
import { useSelector } from 'react-redux';
import { useGetUserStatsQuery } from '../../slices/usersApiSlice';
import { useEffect } from 'react';

const Dashboard = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const { data: stats, refetch } = useGetUserStatsQuery();

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div className='dashboard'>
            <UserSummary userInfo={userInfo} stats={stats} />
            <LanguageQuizPanel />
        </div>
    )
}

export default Dashboard