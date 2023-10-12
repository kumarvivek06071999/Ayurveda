import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/data/AuthContext'

const Dropdown1 = () => {
  const submenu = [
    {
      menu: 'HIGH BP',
      link: '/sanyasi-bp27-tablet',
    },
    {
      menu: 'WEIGHT GAIN',
      link: '/product-weight-gain',
    },
    {
      menu: 'KIDNEY STONE',
      link: '/sanyasi-pathri-tablet',
    },
    {
      menu: 'GAS/DIGESTION',
      link: '/sanyasi-hazma-tablet',
    },
    {
      menu: 'JOINT PAIN',
      link: '/sanyasi-jod-dard-tablet',
    },
    {
      menu: 'WEIGHT LOSS',
      link: '/sanyasi-slimming-tablet',
    },
    {
      menu: 'DIABETES',
      link: '/sanyasi-diab-controller-tablet',
    },
    {
      menu: 'FEMALE PROBLEM',
      link: '/sanyasi-nari-prabha-tablet',
    },
    {
      menu: 'PILES',
      link: '/sanyasi-piles-tablet',
    },
    {
      menu: 'HAIR CARE',
      link: '/sanyasi-strong-hair-oil',
    },
    {
      menu: 'HEIGHT GROWTH',
      link: '/sanyasi-growthex-tablet',
    },
    {
      menu: 'GENERAL WELLNESS',
      link: '/sanyasi-shilajit-shudh',
    },

  ]

  const { isDropdownOpen1, setIsDropdownOpen1 } = useAuth()


  return (
    <div onMouseEnter={() => setIsDropdownOpen1(true)}


    >
      <button className=' text-white hover:text-[#af6621]'>
        PRODUCTS
      </button>
      {isDropdownOpen1 && (
        <div
          onMouseLeave={() => setIsDropdownOpen1(false)}
          className=' cssanimation fadeIn  z-10 max-md:hidden  absolute top-full  font-roboto text-black bg-white bg-opacity-90 ml-[-12px] px-[12px]  rounded-b-[3px] border-b-4 border-b-black '>
          <ul className='flex flex-col gap-1 py-1'>
            {
              submenu.map((item) => (
                <li className=' hover:text-[#d19827]'>
                  <Link to={item.link}>
                    {item.menu}
                  </Link>
                </li>
              ))
            }
            {/* <li className=' hover:text-[#d19827]'>
              <Link>HIGH BP</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>WEIGHT GAIN</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>KIDNEY STONE</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>GAS/DIGESTION</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>JOINT PAIN</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>WEIGHT LOSS</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>DIABETES</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>FEMALE PROBLEM</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>MALE PROBLEM</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>PILES</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>HAIR CARE</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>HEIGHT GROTH</Link>
            </li>
            <li className=' hover:text-[#d19827]'>
              <Link>GENERAL WELLNESS</Link>
            </li> */}
          </ul>
        </div>

      )

      }
    </div>
  )
}

export default Dropdown1