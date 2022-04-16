import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import logo from '../../images/logo2.png';

const SignUp = () => {
    return (
        <div className='login-container'>
            <div>
                <img src={logo} alt="log" />
            </div>
            <form>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" required name="name" id="" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" required name="email" id="" placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" required name="password" id="" placeholder='Password' />
                </div>
                <div>
                    <label htmlFor="confirm-password"></label>
                    <input type="password" required name="confirm-password" id="" placeholder='Confirm Password' />
                </div>
                <button className="login-btn" type="submit">Sign in</button>
                <Link className='link' to ='/login'>Already have an account?</Link>
            </form>
        </div>
    );
};

export default SignUp;