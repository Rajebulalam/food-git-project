import React from 'react';

const SingleMenu = ({ foods }) => {
    const {name} = foods;
    return (
        <div>
            <h2>Hello</h2>
            <h3>{name}</h3>
        </div>
    );
};

export default SingleMenu;