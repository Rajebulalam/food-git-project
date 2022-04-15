import React from 'react';
import './SingleLunch.css';

const singleLunch = ({ single }) => {

    const {img, name, text, price} = single;

    return (
        <div className='singleLunch'>
            <img src={img} alt="food-img" />
            <h2> {name} </h2>
            <p> {text} </p>
            <h4> $ {price} </h4>
        </div>
    );
};

export default singleLunch;