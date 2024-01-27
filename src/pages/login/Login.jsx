import React from 'react'
import Layout from '../../components/layout/Layout'
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneUnlock } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

const Login = () => {
  return (
    <Layout>
      <div className=' w-full my-4'>
        <form action="">
          <div className='flex gap-6 justify-center'>
            <div className='flex flex-col w-[540px] h-[370px] bg-slate-300  rounded-md px-4 py-2 shadow_login_page'>
              <div className='text-center'>
                <h1 className='text-3xl font-semibold border-b border-[#c98600]'>LOGIN</h1>
                <span className=' mx-auto block  w-1/3 h-[3px] bg-[#c98600] relative top-[-2px]'></span>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex gap-2 w-11/12 px-8 '>
                  <AiFillStar size={10} className='' />
                  <div className='flex items-center gap-3  p-1 w-full phone-container'>
                    {/* <IoIosCall size={20} /> */}
                    <input type="text" placeholder='Mobile No' className=' w-full  search-input border rounded-md border-[#adb8c0]' />
                  </div>
                </div>
                <div className='flex gap-2 w-5/6 px-8'>
                  <AiFillStar size={10} className='' />
                  <div className='flex items-center gap-3  p-1 w-full bg-full unlock-container '>
                    {/* <AiTwotoneUnlock size={20} /> */}
                    <input type="text" placeholder='Mobile No' className=' w-full  search-input border rounded-md border-[#adb8c0]' />
                  </div>
                </div>

                <div className='flex  justify-center'>
                  <input type="submit" value="Login" className=' bg-slate-400 px-2 py-1' />
                </div>
                <hr />
              </div>
              <div className='flex justify-center'>
                <p>Forgot Password</p>
              </div>
            </div>
            <div className=' w-[540px] h-[370px] bg-gray-500 rounded-md px-4 py-1 shadow_login_page'>
              <div className='text-center'>
                <h1 className='text-3xl font-semibold border-b border-[#c98600]'>NEW USER</h1>
                <span className=' mx-auto block  w-1/3 h-[3px] bg-[#c98600] relative top-[-2px]'></span>
              </div>

            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login