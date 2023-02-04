import vector1 from './assets/vector-1.svg';
import premvati from './assets/premvati-logo.svg';
import vector2 from './assets/vector-2.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className="w-full top-0 z-50 px-8 py-2 bg-white drop-shadow-[0_4px_4px_rgba(179,179,179,0.08)] text-white flex items-center justify-between">
                <div>
                    <img src={vector2} alt="00" />
                </div>
                <div>
                    <Link to="/">
                    <img src={premvati} alt="00" />
                    </Link>
                </div>
                <div className='h-fit'>
                    <img src={vector1} alt="00" />
                </div>
            </div>
        </>
    )
}

export default NavBar;