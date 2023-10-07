import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { RiKeyLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";


const TopNav = () => {

    return (
        <div className='bg-[#f4f4f4] text-xs items-center font-roboto'>
            {/* Mobile View */}
            <div className=' lg:hidden  bg-[#f4f4f4]'>
                <div className='flex flex-row-reverse gap-6 py-1 px-5 items-center'>
                    <div className=' flex gap-3'>
                        <a href="https://www.facebook.com/" target='_blank'>
                            <FaFacebookF size={15} />
                        </a>
                        <a href="https://www.facebook.com/" target='_blank'>
                            <TfiYoutube size={15} />
                        </a>
                        <a href="https://www.facebook.com/" target='_blank'>
                            <BsWhatsapp size={15} />
                        </a>
                        <a href="https://www.facebook.com/" target='_blank' >
                            <FaInstagram size={15} />
                        </a>
                    </div>
                    <div className='flex gap-3'>
                        <Link to="/login" className=' flex items-center gap-1'>
                            <RiKeyLine size={15} />
                            <span>Login / Register</span>
                        </Link>
                        <span>|</span>
                        <Link to="/contact">
                            <span>Contact us</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className=' hidden lg:flex justify-between px-3 py-1 mx-auto max-w-[1140px]'>
                <div className='flex gap-3'>
                    <a href="https://www.facebook.com/" target='_blank' className='flex gap-1'>
                        <MdEmail size={15} className='' />
                        <span>info@sanyasiayurveda.com</span>
                    </a>
                    <a href="tel:011 45454545" className='flex gap-1'>
                        <IoIosCall size={15} />
                        <span>011 45454545</span>

                    </a>
                    <a href="tel:011 45454545" className='flex gap-1'>
                        <IoIosCall size={15} />
                        <span>011 66666666</span>

                    </a>
                </div>
                <div className='hidden lg:block text-xs '>
                    <div className='flex flex-row-reverse gap-6  '>
                        <div className=' flex gap-3'>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <FaFacebookF size={15} />
                            </a>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <TfiYoutube size={15} />
                            </a>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <BsWhatsapp size={15} />
                            </a>
                            <a href="https://www.facebook.com/" target='_blank' >
                                <FaInstagram size={15} />
                            </a>
                        </div>
                        <div className='flex gap-3'>
                            <Link to="/login" className=' flex items-center gap-1'>
                                <RiKeyLine size={15} />
                                <span>Login / Register</span>
                            </Link>
                            <span>|</span>
                            <Link to="/contact">
                                <span>Contact us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopNav