import React from 'react'
import { useHistory } from 'react-router-dom'

const Sidebar = () => {
    const history = useHistory();
    const logout = () => {
        history.push("/")
    }

    return (
        <div className='sidebar-content '>
            <div className='menu-sidebar position-relative'>
            <button>
                <img src="img/dashboard.png" alt="" />
                Dashboard
            </button>


            <button className='logout-btn' onClick={logout}>
                <img src="img/logout.png" alt="" />
            </button>
            </div>
        </div>
    )
}

export default Sidebar
