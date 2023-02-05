import React from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout = ({children}) => {
    return (
        <div>
            <Header />

            <div className='d-flex'>
            <Sidebar />
            <div className='main-inner'>
            {children}
            </div>
            </div>
            
        </div>
    )
}

export default Layout
