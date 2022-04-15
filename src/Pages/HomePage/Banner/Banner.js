import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
                <h2>Best food waiting for your belly</h2>
                <input type="search" name="search" id="" placeholder='Search food items' />
                <button type="submit">Search</button>
            </div>
        </div>
    );
};

export default Banner;