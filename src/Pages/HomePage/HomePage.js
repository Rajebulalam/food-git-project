import React from 'react';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import './HomePage.css';
import Lunch from './Lunch/Lunch';

const HomePage = () => {
    return (
        <div className='home-container'>
            <h2>Home Page</h2>
            <Lunch></Lunch>
            <Breakfast></Breakfast>
            <Dinner></Dinner>
        </div>
    );
};

export default HomePage;