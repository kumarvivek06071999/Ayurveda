import React from 'react'
import { FaMapPin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className='  lg:w-full max-sm:mx-auto  bg-[#2f2f2f] text-[#f6f6f6] text-left font-medium tracking-wide font-roboto '>
      <div className=' flex gap-8 justify-center pt-6 pb-20 px-3 max-sm:flex-col max-sm:w-[94%] mx-auto'>
        <div className='lg:h-[234px] lg:w-[360px] max-sm:w-full max-sm:px-8  max-sm:mx-auto'>
          <strong className=' border-b border-[#efefef] relative text-xl block  '>
            Visit us
            <span className=' bg-[#efefef] h-[3px] block relative top-0.5 w-2/5 '></span>
          </strong>
          <p className=' flex gap-2 pt-6  px-1'>
            <FaMapPin size={20} className=' pt-1' />
            Kodia Pul Chowk, Near Old Delhi Railway Station, Delhi - 110006
          </p>
          <p className='flex gap-2 my-4 items-center'>
            <IoIosCall size={18} />
            <a href="tel: 123123123">4561237855</a>
            <a href="tel: 123123123">4561238892</a>
            <a href="tel: 123123123">1465235622</a>
          </p>
          <a className='flex gap-2 items-center my-5' href="https://api.whatsapp.com/send?phone=917399373993">
            <BsWhatsapp />
            <a href="">789746441233</a>
          </a>
          <a className='flex gap-2 items-center my-5' href="mailto:kumarvivek0607@gmail.com">
            <AiOutlineMail />
            info@sanyasiayurveda.com
          </a>
        </div>
        <div className='lg:h-[234px] lg:w-[360px] max-sm:w-full max-sm:px-8  text-center max-sm:mx-auto max-sm:my-8 '>
          <strong className=' border-b border-[#efefef] relative text-xl block  '>
            Follow us
            <span className=' bg-[#efefef] h-[3px] block relative top-0.5 w-2/5 left-1/3 '></span>
          </strong>
          <p >
            <ul className='flex gap-3 items-center justify-center pt-14 pb-1'>
              <li>
                <a href="">
                  <BiLogoFacebook size={35} />

                </a>
              </li>
              <li>
                <a href="">
                  <TfiYoutube size={33} />

                </a>
              </li>
              <li>
                <a href="">
                  <BsWhatsapp size={28} />

                </a>
              </li>
              <li>
                <a href="">
                  <BsInstagram size={28} />

                </a>
              </li>
            </ul>
          </p>
          <p className='flex gap-1 text-center justify-center'>
            <a href="">Copyright</a>
            Sanyashi Ayurveda
          </p>
        </div>
        <div className='lg:h-[234px] lg:w-[360px]  max-sm:w-full flex gap-4 '>
          <div className=' w-2/4'>
            <strong className=' border-b border-[#efefef] relative  text-xl block  '>
              Know us
              <span className=' bg-[#efefef] h-[3px] block relative top-0.5 w-2/5 '></span>
            </strong>
            <ul className=' pl-10 pt-4 list-disc'>
              <li>
                <a href="">
                  About us
                </a>
              </li>
              <li>
                <a href="">
                  Our Clinics
                </a>
              </li>
              <li>
                <a href="">
                  Product
                </a>
              </li>
              <li>
                <a href="">
                  Careers
                </a>
              </li>
              <li>
                <a href="">
                  Faq's
                </a>
              </li>
              <li>
                <a href="">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className=' w-2/4'>
            <strong className=' border-b border-[#efefef] relative text-xl block  '>
              Usefull Links
              <span className=' bg-[#efefef] h-[3px] block relative top-0.5 w-2/5 '></span>
            </strong>
            <ul className=' pl-6 pt-4 list-disc text-[13px] flex flex-col gap-2'>
              <li>
                <a href="">
                  How to play
                </a>
              </li>
              <li>
                <a href="">
                  Home Remedies
                </a>
              </li>
              <li>
                <a href="">
                  Shipping & Cancellation
                </a>
              </li>
              <li>
                <a href="">
                  Terms and Condition
                </a>
              </li>
              <li>
                <a href="">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer