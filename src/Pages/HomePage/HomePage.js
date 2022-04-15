import React from 'react';
import Banner from './Banner/Banner';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import './HomePage.css';
import Lunch from './Lunch/Lunch';

const HomePage = () => {
    return (
        <div className='home-container'>
            <Banner></Banner>
            <Lunch></Lunch>
            <Breakfast></Breakfast>
            <Dinner></Dinner>
        </div>
    );
};

export default HomePage;