import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!/^(?=^.{8,}$)(?=.*[0-9])(?=.+[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&gt;.&lt;;,]).{1,}$/.test(password)) {
            setErr('Password should contain at lest 1 upper case, 1 lower case, 1 number, 1 special character and minimum 8 digit or more!')
        } else {
            if(user){
                toast('Login Successfully');
            }
        }

        signInWithEmailAndPassword(email, password)
    }

    if(user){
        navigate('/home')
    }

    return (
        <div className='login-container'>
            <div>
                <img src={logo} alt="log" />
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"></label>
                    <input onBlur={handleEmail} required type="email" name="email" id="" placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input onBlur={handlePassword} required type="password" name="password" id="" placeholder='Password' />
                </div>
                <div>
                    <p className='danger'> {err} </p>
                    <p> {error?.message} </p>
                    <p> {loading && 'Loading ...'} </p>
                </div>
                <ToastContainer />
                <button className="login-btn" type="submit">Sign in</button>
                <Link className='link' to='/signup'>Create new account?</Link>
            </form>
        </div>
    );
};

export default Login;