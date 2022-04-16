import UseDinner from '../../../Hooks/UseDinner';
import SingleDinner from '../SingleDinner/SingleDinner';
import './Dinner.css';

const Dinner = () => {

    const [dinner, setDinner] = UseDinner();

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