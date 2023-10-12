import React from 'react'
import { BiRupee } from "react-icons/bi";
import { useAuth } from '../../../context/data/AuthContext';
import { Link } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const OurClinicCard = ({product}) => {
  
    console
    const baseUrl = '/src/assets';

    return (

        

        <Link >
                <div className=' max-w-[91%] mx-auto'>
                    <div className=' m-2 py-2 my-1  hover:z-20  rounded-md shadow-all lg:w-[370px] lg:h-[172px] flex max-sm:flex-row  font-roboto font-semibold border border-[#ccc] '>
                        <div className='flex justify-center items-center pl-1'>
                            <img className='w-[150px] h-[150px]  rounded-full' src={baseUrl + product.url} alt="" />
                        </div>
                        <div className='w-[210px] h-[150px] pl-1'>
                            <h4 className='text-[#c98600] hover:text-black'>{product.title}</h4>
                            <span className=' text-[11px] text-[#575757] flex flex-col'>{product.Desc}
                                <br />
                                <a className=' py-1 flex gap-1 text-[#c98600] hover:text-black' href={`tel: + ${product.mob}`}>
                                    <IoIosCall size={15} />
                                    {product.mob}
                                </a>
                                <a className=' mt-2 flex gap-1 items-center bg-white hover:text-black  font-extrabold rounded-sm w-[115px] h-[22px]' href={product.map} target='_blank'>
                                    <IoLocationSharp />
                                    View direction
                                </a>
                            </span>
                            
                        </div>

                    </div>
                </div>
            </Link>

        // to={product.link}


    )
}

export default OurClinicCard