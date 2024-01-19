import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);
    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/');
            toast('Logged Out Successfully!');
        } catch (err) {
            toast(err?.data?.message || err.error);
        }
    }
    return (
        <>
            <div className="navbar-container">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <span>Quizzy</span>
                    </div>
                </Link>
                <div className="navigation">
                    <ul className="nav-list">
                        {userInfo ?
                            (<>
                                <Link to='/profile'> <li className="login-btn">
                                    {userInfo?.name?.split(' ')[0]}
                                </li>
                                </Link>
                                <li className="signup-btn" onClick={logoutHandler}>Log out</li>
                            </>)
                            :
                            (<>
                                <Link to='/login'> <li className="login-btn">
                                    Login
                                </li>
                                </Link>
                                <Link to='/signup'><li className="signup-btn">Sign Up</li></Link>
                            </>
                            )}
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
