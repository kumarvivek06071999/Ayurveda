import React from 'react'
import TopNav from './nopnav/TopNav'
import Logo from './logo/Logo'
import NavMenu from './navmenu/NavMenu'

const Navbar = () => {
    return (
        <div className=' font-roboto sticky bg-white top-0 w-full z-50'>
            <TopNav />
            <Logo />
            <NavMenu />

        </div>
    )
}

export default Navbar