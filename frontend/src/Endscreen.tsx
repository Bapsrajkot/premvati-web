import premvati from './assets/premvati-logo.svg';
import vector2 from './assets/vector-2.svg';
import premvati2 from './assets/premvati2.png';
import { Link } from 'react-router-dom';

function Endscreen() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col justify-between items-center py-10 backimage">
                <div>
                    <img src={premvati} alt="00" className='scale-150' />
                </div>
                <div>
                    <Link to="/">
                        <img src={premvati2} alt="00" />
                    </Link>
                </div>
                <div className='text-3xl text-[#00984b] font-bold text-center'>
                    <span className='text-[#d81920]'> Thank you </span> for your
                    valuable feedback.
                </div>
            </div>
        </>
    )
}

export default Endscreen;