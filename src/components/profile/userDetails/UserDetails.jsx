import './userDetails.css'
import { FiBriefcase } from "react-icons/fi";


const UserDetails = ({ user }) => {

    return (
        <div className='profile-details'>
            <div className="profile-name">
                <h1>{user.name}</h1>
            </div>
            <div className="profile-role">
                <div className="role-tag">
                    <span>Current role</span>
                    <FiBriefcase />
                </div>
                <div className="role-val">
                    <p>Student</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;