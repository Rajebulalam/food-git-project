import './Lunch.css';
import SingleLunch from '../SingleLunch/SingleLunch';
import UseLunch from '../../../Hooks/UseLunch';

const Lunch = () => {

    const [lunch, setLunch] = UseLunch();

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