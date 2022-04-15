import React, { useEffect, useState } from 'react';
import SingleDinner from '../SingleDinner/SingleDinner';
import './Dinner.css';

const Dinner = () => {

    const [dinner, setDinner] = useState([]);

    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])

    return (
        <div className='dinner-container'>
            {
                dinner.map(single => <SingleDinner
                    single={single}
                    key={single.id}
                ></SingleDinner>)
            }
        </div>
    );
};

export default Dinner;