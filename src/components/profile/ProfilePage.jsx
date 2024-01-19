import { useSelector } from 'react-redux'
import './profilePage.css'
import ProfileBanner from './Banner/ProfileBanner';
import UserDetails from './userDetails/UserDetails';
import EditProfile from './editProfile/EditProfile';
import QuickTabs from './quickTabs/QuickTabs';

const ProfilePage = () => {
    const { userInfo } = useSelector(state => state.auth);

    return (
        <div className='profile-container'>
            <ProfileBanner />
            <UserDetails user={userInfo} />
            <EditProfile user={userInfo} />
            <QuickTabs />
        </div>
    )
}

export default ProfilePage