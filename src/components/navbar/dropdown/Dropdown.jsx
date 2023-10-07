import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/data/AuthContext'


const Dropdown = () => {

  const { isDropdownOpen, setIsDropdownOpen } = useAuth()

  return (
    <div onMouseEnter={() => setIsDropdownOpen(true)}
      className=''
    >
      <button className='dropdown-menu'>
        SANYASHI AYURVEDA
      </button>
      {isDropdownOpen && (
        <div
          onMouseLeave={() => setIsDropdownOpen(false)}
          className=' z-10 max-md:hidden  absolute top-full  font-roboto text-black bg-white bg-opacity-90 ml-[-12px] px-[12px]  rounded-b-[3px] border-b-4 border-b-black'>
          <ul className='flex flex-col gap-1 py-1'>
            <li className=''>
              <Link>ABOUT US</Link>
            </li>
            <li>
              <Link>WHY SANYASHI AYURVEDA</Link>
            </li>
            <li>
              <Link>CONTACT US</Link>
            </li>
          </ul>
        </div>

      )

      }
    </div>
  )
}

export default Dropdown