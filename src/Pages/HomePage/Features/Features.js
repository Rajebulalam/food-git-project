import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';
import feature1 from '../../../images/feature1.png';
import feature2 from '../../../images/feature2.png';
import feature3 from '../../../images/feature3.png';

const Features = () => {
    return (
        <div className='feature-container'>
            <div className='feature-title'>
                <h2>Why you choose us?</h2>
                <p>We always give you first and fresh food on time!</p>
                <p>If you want to healthy food with nutritious for yor health!</p>
            </div>
            <div className='feature-child'>
                <div>
                    <img src={feature1} alt="feature-img" />
                    <h2>Fast Delivery</h2>
                    <p>Minus sunt ipsum eveniet neque, ipsam odit accusantium natus quisquam facilis ea quis excepturi voluptas tempore consequatur quos impedit accusamus dolorem dicta.</p>
                    <Link to='/details'>See More</Link>
                </div>
                <div>
                    <img src={feature2} alt="feature-img" />
                    <h2>A Good Auto Responder</h2>
                    <p>Sunt ipsum eveniet neque, ipsam odit accusantium natus quisquam facilis ea quis excepturi voluptas tempore consequatur quos impedit accusamus dolorem dicta.</p>
                    <Link to='/details'>See More</Link>
                </div>
                <div>
                    <img src={feature3} alt="feature-img" />
                    <h2>Home Delivery</h2>
                    <p>Psum eveniet neque, ipsam odit accusantium natus quisquam facilis ea quis excepturi voluptas tempore consequatur quos impedit accusamus dolorem dicta.</p>
                    <Link to='/details'>See More</Link>
                </div>
            </div>
        </div>
    );
};

export default Features;