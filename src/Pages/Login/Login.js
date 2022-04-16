import React from 'react';
import './Login.css';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-container'>
            <div>
                <img src={logo} alt="log" />
            </div>
            <form>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="" placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="" placeholder='Password' />
                </div>
                <button className="login-btn" type="submit">Sign in</button>
                <Link className='link' to ='/signup'>Create new account?</Link>
            </form>
        </div>
    );
};

export default Login;