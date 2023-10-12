import React from 'react'
import { Link } from 'react-router-dom'

const ViewAll = (url) => {
    return (
        <div className=' font-roboto max-w-[1140px] mx-auto px-2 '>
            <Link >
                <div className=' border-b border-dashed border-[#ea7127] relative flex justify-center mb-10'>
                    <Link to={url.url}>
                        <span className=' text-[#c98600] relative  bg-white px-3 py-0 top-[50%] hover:text-black '>
                            VIEW ALL
                        </span>
                    </Link>
                </div>
            </Link>
        </div>
    )
}

export default ViewAll