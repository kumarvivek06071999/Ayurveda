import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import { asset0 } from '../../../assets/index'

const Logo = () => {
  return (
    <div className=' font-roboto max-w-[1140px] mx-auto my-2 grid grid-cols-4 items-center max-lg:grid-cols-2 max-lg:px-8 header '>
      <div className=' col-span-1 max-lg:col-span-1'>
        <Link to='/'>
          <img className=' h-4/5 w-4/5' src={asset0} alt="" />
        </Link>
      </div>
      <div className=' col-span-2 hidden lg:flex'>

        <input type="text" placeholder='Search for...' className=' text-xs p-3 border block border-[#cccccc] w-[90%] outline-none rounded-tl rounded-bl' />

        <button type='submit' className='flex w-[10%] bg-gradient-to-b from-[#ffdc73] to-[#fdcb45] justify-center items-center text-[#4d4d4d] rounded-tr rounded-br'>
          <FaSearch size={15} className='' />
        </button>
      </div >
      <div className=' col-span-1 flex items-center gap-1 text-sm font-semibold justify-end max-lg:col-span-1'>
        <span>0</span>
        <p>item(s) of</p>
        <Link to='/cart'>
          <PiCurrencyInrBold size={15} />
        </Link>
        <span>0</span>
        <Link to='/cart'>
          <LuShoppingCart size={20} />
        </Link>

      </div>
    </div>
  )
}

export default Logo