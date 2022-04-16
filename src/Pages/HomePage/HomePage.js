import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import FoodHeader from './FoodHeader/FoodHeader';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='home-container'>
            <Banner></Banner>
            <FoodHeader></FoodHeader>
            <Outlet></Outlet>
            <Features></Features>
        </div>
    );
};

export default HomePage;