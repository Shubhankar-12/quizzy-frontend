import { useState, useEffect } from 'react';
import { SlSocialGoogle } from 'react-icons/sl';
import '../auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../slices/authSlice';
import { useLoginMutation } from '../../../slices/usersApiSlice';
import { toast } from 'react-toastify';
import Loader from '../../loadingPage/Loader';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/dashboard');
        } catch (err) {
            toast(err?.data?.message || err.error, { type: 'error' });
        }

    }

    return (
        <div className="auth">
            {isLoading ? (<Loader />) : (
                <div className="auth-container">
                    <h1 className='auth-h1'>Welcome Back!</h1>
                    <form onSubmit={submitHandler}>
                        <div className="social-icons">
                            <SlSocialGoogle />
                            <span>Sign in with Google</span>
                        </div>
                        <p className='auth-p'>or use your email and password</p>
                        <div className="auth-form">
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Link to="/signup" className='forget-pswd'>New Here? Sign up</Link>
                            <button className='auth-btn'>Sign In</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SignIn;
