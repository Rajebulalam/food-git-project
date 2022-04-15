import React from 'react';
import './Footer.css';
import footerLogo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
 
const Footer = () => {


    return (
        <div className='footer-container'>
            <div className='footer-child1'>
                <div>
                    <img src={footerLogo} alt="footer-logo" />
                </div>
                <div>
                    <Link to='/red'>About online food</Link>
                    <Link to='/blog'>About our blog</Link>
                    <Link to='/signup'>Signup to deliver</Link>
                    <Link to='/signup'>Add yor restaurant</Link>
                </div>
                <div>
                    <Link to='/help'>Get help</Link>
                    <Link to='/faqs'>Read FAQs</Link>
                    <Link to='/view'>View all cities</Link>
                    <Link to='/restaurant'>Restaurant near me</Link>
                </div>
            </div>
            <div className='footer-child2'>
                <div>
                    <p>Copyright &copy; 2022 Online Food</p>
                </div>
                <div>Privacy Policy</div>
                <div>Terms of Use</div>
                <div>Pricing</div>
            </div>
        </div>
    );
};

export default Footer;