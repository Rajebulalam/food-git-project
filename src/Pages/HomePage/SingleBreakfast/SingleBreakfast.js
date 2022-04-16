import React from 'react';
import './SingleBreakfast.css';

const SingleBreakfast = ({ single }) => {
    const { img, name, text, price } = single;

    return (
        <div className='singleBreakfast'>
            <img src={img} alt="food-img" />
            <h2> {name} </h2>
            <p> {text} </p>
            <h4> $ {price} </h4>
        </div>
    );
};

export default SingleBreakfast;