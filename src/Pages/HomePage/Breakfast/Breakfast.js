import UseBreakfast from '../../../Hooks/UseBreakfast';
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';
import './Breakfast.css';

const Breakfast = () => {

    const [breakfast, setBreakfast] = UseBreakfast();

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