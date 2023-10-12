import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import Dropdown1 from '../dropdown/Dropdown1'
import { AiOutlineMenu } from "react-icons/ai"
import { useAuth } from '../../../context/data/AuthContext'

const NavMenu = () => {
    const navmenu = [
        {
            menu: 'HOME',
            link: '/',
        },
        {
            menu: <Dropdown />,
            link: '/about-us',
        },
        {
            menu: <Dropdown1 />,
            link: '/products',
        },
        {
            menu: 'CLINICS',
            link: '/clinics',
        },
        {
            menu: 'DISEASES',
            link: '/diseases',
        },
        {
            menu: 'HOME REMEDIES',
            link: '/home-remedies',
        },
        {
            menu: 'TESTIMONIALS',
            link: '/testimonials',
        },
        {
            menu: 'CAREERS',
            link: '/jobs',
        },
        {
            menu: 'FAQ',
            link: '/faq',
        },

    ]

    const { isDropdownOpen, setIsDropdownOpen, setIsDropdownOpen1, isMenuOpen,
        setIsMenuOpen, toggleDropdown, } = useAuth()



    return (
        <div className='bg-[#212529] text-[#fff] text-xs relative  '>
            <div className='hidden md:block font-roboto max-w-[1140px] mx-auto '>
                <nav>
                    <ul className='flex gap-5 py font-normal '>
                        {/* {
                            navmenu.map((nav) => (
                                <li className=' py-2'>
                                    <Link to={nav.link}>
                                        {nav.menu}
                                    </Link>
                                </li>
                            ))
                        } */}


                        <li className=' py-2 hover:text-[#af6621] '>
                            <Link to='/'>
                                HOME
                            </Link>
                        </li>


                        <li
                            onMouseLeave={() => setIsDropdownOpen(false)}
                            className=' py-2 hover:text-[#af6621]'>
                            <Link to='/about-us'>
                                <Dropdown />
                            </Link>
                        </li>
                        <li
                            onMouseLeave={() => setIsDropdownOpen1(false)}
                            className=' py-2 hover:text-[#af6621] '>
                            <Link to='/products'>
                                <Dropdown1 />
                            </Link>
                        </li >
                        <li className=' py-2 hover:text-[#af6621]'>
                            <Link to='/clinics'>
                                CLINICS
                            </Link>
                        </li>
                        <li className=' py-2 hover:text-[#af6621]'>
                            <Link to='diseases'>
                                DISEASES
                            </Link>
                        </li>
                        <li className=' py-2 hover:text-[#af6621]'>
                            <Link to='home-remedies'>
                                HOME REMEDIES
                            </Link>
                        </li>
                        <li className=' py-2 hover:text-[#af6621]' >
                            <Link to='testimonials'>
                                TESTIMONIALS
                            </Link>
                        </li>
                        <li className=' py-2 hover:text-[#af6621]'>
                            <Link to='jobs'>
                                CAREERS
                            </Link>
                        </li>
                        <li className=' py-2 hover:text-[#af6621]'>
                            <Link to='faq'>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden py-1 px-3 '>
                <div  className= {`flex justify-end px-1 `}  id='menuButton'>
                    <AiOutlineMenu onClick={toggleDropdown} size={20} width={30} className=' cursor-pointer' />
                </div>
                <div className='flex '>
                    <div>
                        {isMenuOpen && (
                            <div className='font-roboto max-w-[1140px] mx-auto ' >
                                <nav>
                                    <ul className='flex flex-col gap-1  font-normal' id='menuOptions'>
                                        <li className=' py-2 hover:text-[#af6621]'>
                                            <Link to='/'>HOME</Link>
                                        </li>

                                        <li
                                            // onMouseLeave={() => setIsDropdownOpen(false)}
                                            className=' py-2 hover:text-[#af6621]'>
                                            <Link to='/about-us'>
                                                <Dropdown />
                                            </Link>
                                        </li>
                                        <li
                                            // onMouseLeave={() => setIsDropdownOpen1(false)}
                                            className=' py-2 hover:text-[#af6621] '>
                                            <Link to='products'>
                                                <Dropdown1 />
                                            </Link>
                                        </li >
                                        <li className=' py-2 hover:text-[#af6621]'>
                                            <Link to='clinics'>
                                                CLINICS
                                            </Link>
                                        </li>
                                        <li className=' py-2 hover:text-[#af6621]'>
                                            <Link to='diseases'>
                                                DISEASES
                                            </Link>
                                        </li>
                                        <li className=' py-2 hover:text-[#af6621]'>
                                            <Link to='home-remedies'>
                                                HOME REMEDIES
                                            </Link>
                                        </li>
                                        <li className=' py-2 hover:text-[#af6621]' >
                                            <Link to='testimonials'>
                                                TESTIMONIALS
                                            </Link>
                                        </li>
                                        <li className=' py-2 hover:text-[#af6621]'>
                                            <Link to='jobs'>
                                                CAREERS
                                            </Link>
                                        </li>
                                        <li className=' py-2 hover:text-[#af6621]'>
                                            <Link to='faq'>
                                                FAQ
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        )}

                    </div>

                </div>
            </div>


        </div>
    )
}

export default NavMenu