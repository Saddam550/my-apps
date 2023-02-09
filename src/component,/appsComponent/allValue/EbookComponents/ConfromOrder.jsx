
import { Link, useLocation } from 'react-router-dom';


const ConfromOrder = () => {

    const location = useLocation()
    const  {userName}= location.state
    return (
        <div>
            <div className='ThanksPage'> 
            thanks <span>{ userName }</span> your product order Confrom done
            </div>
            <div><Link to='/' className="BGLink"> Go to Home</Link></div>
        </div>
    );
};

export default ConfromOrder;