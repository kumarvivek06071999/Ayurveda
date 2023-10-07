import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/data/AuthContext'

const Dropdown1 = () => {

  const { isDropdownOpen1, setIsDropdownOpen1 } = useAuth()

  return (
    <div onMouseEnter={() => setIsDropdownOpen1(true)}


    >
      <button>
        PRODUCTS
      </button>
      {isDropdownOpen1 && (
        <div
          onMouseLeave={() => setIsDropdownOpen1(false)}
          className='  z-10 max-md:hidden  absolute top-full  font-roboto text-black bg-white bg-opacity-90 ml-[-12px] px-[12px]  rounded-b-[3px] border-b-4 border-b-black '>
          <ul className='flex flex-col gap-1 py-1'>
            <li>
              <Link>HIGH BP</Link>
            </li>
            <li>
              <Link>WEIGHT GAIN</Link>
            </li>
            <li>
              <Link>KIDNEY STONE</Link>
            </li>
            <li>
              <Link>GAS/DIGESTION</Link>
            </li>
            <li>
              <Link>JOINT PAIN</Link>
            </li>
            <li>
              <Link>WEIGHT LOSS</Link>
            </li>
            <li>
              <Link>DIABETES</Link>
            </li>
            <li>
              <Link>FEMALE PROBLEM</Link>
            </li>
            <li>
              <Link>MALE PROBLEM</Link>
            </li>
            <li>
              <Link>PILES</Link>
            </li>
            <li>
              <Link>HAIR CARE</Link>
            </li>
            <li>
              <Link>HEIGHT GROTH</Link>
            </li>
            <li>
              <Link>GENERAL WELLNESS</Link>
            </li>
          </ul>
        </div>

      )

      }
    </div>
  )
}

export default Dropdown1