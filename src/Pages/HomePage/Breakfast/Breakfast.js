import React, { useEffect, useState } from 'react';
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';
import './Breakfast.css';

const Breakfast = () => {

    const [breakfast, setBreakfast] = useState([]);

    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfast(data))
    }, [])

    return (
        <div className='breakfast-container'>
            {
                breakfast.map(single => <SingleBreakfast
                    single={single}
                    key={single.id}
                ></SingleBreakfast>)
            }
        </div>
    );
};

export default Breakfast;