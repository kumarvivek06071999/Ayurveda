import React from 'react'
import { BiRupee } from "react-icons/bi";
import { useAuth } from '../../../context/data/AuthContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { baseUrl } = useAuth()
    return (

        <Link to={product.link}>
            <div className=' m-2 py-2 my-1  hover:z-20 bg-white rounded-md shadow-all backdrop-blur-4  w-[275px] h-[336px] flex flex-col gap-2 col-span-1 font-roboto font-semibold '>
                <div className='flex flex-col justify-center items-center gap-1 '>
                    <p className=' text-center'> {product.title}</p>
                    <img className=' w-[217px] h-[217] mx-auto' src={baseUrl + product.image} alt={product.title} />
                    <h3>{product.name} </h3>

                </div>
                <div>
                    <span className=' flex gap-1 justify-center items-center'>
                        <BiRupee />
                        {product.price}
                    </span>
                </div>

            </div>
        </Link>

    )
}

export default ProductCard