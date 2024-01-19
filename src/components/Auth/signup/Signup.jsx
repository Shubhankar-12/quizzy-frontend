import React, { useEffect, useState } from 'react';
import { SlSocialGoogle } from 'react-icons/sl';
import '../auth.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../slices/authSlice';
import { useRegisterMutation } from '../../../slices/usersApiSlice';
import { toast } from 'react-toastify';
import Loader from '../../loadingPage/Loader';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [register, { isLoading }] = useRegisterMutation();
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard');
        }
    }, [navigate, userInfo]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            toast("Passwords do not match!", { type: 'warning' })
        }
        else {
            try {
                const res = await register({ name, email, password }).unwrap();
                dispatch(setCredentials({ ...res }));
                navigate('/dashboard');
            } catch (err) {
                toast(err?.data?.message || err.error, { type: 'error' })
            }
        }
    }

    return (
        <div className="auth">
            {isLoading ? (<Loader />) : (<div className="auth-container">
                <h1 className='auth-h1'>New Here?</h1>
                <form onSubmit={handleSubmit}>
                    <div className="social-icons">
                        <SlSocialGoogle />
                        <span>Sign up with Google</span>
                    </div>
                    <p className='auth-p'>or use your email for registration</p>
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
                        <button className='auth-btn'>Sign Up</button>
                    </div>
                </form>
            </div>)}
        </div>
    );
};

export default SignUp;
