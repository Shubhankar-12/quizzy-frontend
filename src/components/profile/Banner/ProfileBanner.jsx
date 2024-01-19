import './ProfileBanner.css';
import { FaEdit } from "react-icons/fa";
import userImg from '../../../assets/user-img.jpg'

const ProfileBanner = () => {
    return (
        <div className='profile-banner'>
            <div className="banner-edit">
                <div className="edit-img">
                    <FaEdit />
                </div>
            </div>
            <div className="user-img">
                <div className="img-container">
                    <img src={userImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProfileBanner