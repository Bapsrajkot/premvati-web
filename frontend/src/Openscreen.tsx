import vector1 from './assets/vector-1.svg';
import premvati1 from './assets/premvati1.png';
import premvati from './assets/premvati-logo.svg';
import { Link } from 'react-router-dom'

function Openscreen() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col justify-between items-center py-10 backimage">
                <div>
                    <img src={premvati} alt="00" className='scale-150' />
                </div>
                <div>
                    <img src={premvati1} alt="00" />
                </div>
                <div>
                    <Link to={"/feedback"}>
                        <button className='bg-[#00984B] text-white font-bold text-3xl py-3 px-20 rounded'>
                            Feedback
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Openscreen;