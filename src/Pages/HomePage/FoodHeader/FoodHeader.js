import React from 'react';
import { Link } from 'react-router-dom';
import './FoodHeader.css';

const FoodHeader = () => {
    return (
        <div className='extra-header'>
            <Link to='/'>Breakfast</Link>
            <Link to='/lunch'>Lunch</Link>
            <Link to='/dinner'>Dinner</Link>
        </div>
    );
};

export default FoodHeader;