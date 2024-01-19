import React, { useState } from 'react'
import './UpdateForm.css'
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../slices/modalSlice';
import { useUpdateUserMutation } from '../../../slices/usersApiSlice';
import { toast } from 'react-toastify';
import { setCredentials } from '../../../slices/authSlice';

const UpdateForm = () => {
    const { userInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [updateUser] = useUpdateUserMutation();

    const [formData, setFormData] = useState({
        name: userInfo.name,
        email: userInfo.email,
        password: '',
        confirmPassword: '',
    });

    const handleCloseBtn = () => {
        dispatch(closeModal());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            toast("Passwords do not match!", { type: 'warning' });
        } else {
            try {

                const res = await updateUser({
                    _id: userInfo._id,
                    name: name,
                    email: email,
                    password: password,
                }).unwrap();
                dispatch(setCredentials(res));
                toast("Details updated successfully!", { type: 'success' });
                dispatch(closeModal());
            } catch (err) {
                console.error("Error during update:", err);
                toast(err?.data?.message || err.error, { type: 'error' });
            }
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className='modal'>
            <div className="close-update">
                <IoMdCloseCircle onClick={handleCloseBtn} />
            </div>
            <div className="auth-container">
                <h1 className='auth-h1'>Update Profile</h1>
                <p className='auth-p'>e-mail and name update</p>
                <form onSubmit={handleSubmit}>

                    <div className="auth-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <p className='auth-p'>password update</p>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        <button className='auth-btn' onClick={handleSubmit}>Update</button>
                    </div>
                </form>


            </div>
        </div >
    )
}

export default UpdateForm