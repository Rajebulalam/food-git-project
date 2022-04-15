import React from 'react';
import Banner from './Banner/Banner';
import FoodHeader from './FoodHeader/FoodHeader';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='home-container'>
            <Banner></Banner>
            <FoodHeader></FoodHeader>
        </div>
    );
};

export default HomePage;