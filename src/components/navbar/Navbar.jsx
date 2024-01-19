import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Squash as Hamburger } from 'hamburger-react'
import { toast } from 'react-toastify';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);
    const [logoutApiCall] = useLogoutMutation();
    const [isToggled, setIsToggled] = useState(false);

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
                <div className="nav-ham">
                    <Hamburger toggled={isToggled} toggle={setIsToggled} color="#012ab7" />
                </div>
            </div>
            <div className="nav-dropdown" style={isToggled ? { height: 'block' } : { display: 'none' }}>
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
            <Outlet />
        </>
    );
};

export default Navbar;
