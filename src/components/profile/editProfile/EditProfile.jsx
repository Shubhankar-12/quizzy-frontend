import './editProfile.css';
import { IoIosStarOutline } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../slices/modalSlice';
import { useResetStatsMutation } from '../../../slices/usersApiSlice';
import { toast } from 'react-toastify';

const topLangs = ["English", "French", "German"];

const EditProfile = ({ user }) => {
    const dispatch = useDispatch();
    const [resetStats] = useResetStatsMutation();
    const handleUpdateBtn = () => {
        dispatch(toggleModal());
    };

    const handleResetBtn = async () => {
        try {
            const res = await resetStats().unwrap();
            console.log(res);
            toast("Stats reset successful", { type: 'success' });
        } catch (err) {
            toast(err?.data?.message || err.error, { type: 'error' });
        }
    }

    return (
        <div className='editProfile-container'>
            <div className="edit-btn-group">
                <button className='editprofile-btn' onClick={handleUpdateBtn}>Update Details</button>
                <button className='editprofile-btn' onClick={handleResetBtn}>Reset Stats <GrPowerReset /></button>
            </div>
            <div className="language-container">
                <div className="lang-tag">
                    <span>Language</span>
                    <IoIosStarOutline />
                </div>
                <div className="top-langs">
                    {topLangs.map((lang, idx) => (
                        <span key={idx}>{lang}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EditProfile