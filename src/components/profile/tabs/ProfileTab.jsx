import './ProfileTab.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const ProfileTab = ({ tabHead, tabDesc, handleClick }) => {
    return (
        <div className='ProfileTab' onClick={handleClick}>
            <div className="tab-content">
                <h2>{tabHead}</h2>
                <p>{tabDesc}</p>
            </div>
            <div className="tab-icon">
                <FaRegArrowAltCircleRight />
            </div>
        </div>
    )
}

export default ProfileTab