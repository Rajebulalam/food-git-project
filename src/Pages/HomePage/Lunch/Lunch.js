import { useEffect, useState } from 'react';
import './Lunch.css';
import SingleLunch from '../SingleLunch/SingleLunch';

const Lunch = () => {

    const [lunch, setLunch] = useState([]);

    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [])

    return (
        <div className='lunch-container'>
            {
                lunch.map(single => <SingleLunch
                    single={single}
                    key={single.id}
                ></SingleLunch>)
            }
        </div>
    );
};

export default Lunch;