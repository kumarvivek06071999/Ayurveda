import React from 'react'

const Services = () => {
    return (
        <div className=' bg-[#efefef] h-[300px] '>

            <div className=' font-roboto lg:max-w-[1140px] mx-auto px-2 pt-6 pb-24 relative flex '>
                <div className=' h-[200px] w-[370px]  flex flex-col justify-start items-center text-center'>
                    <img className='' src="/src/assets/asset 45.png" alt="" />
                    <strong className='text-[#4d4d4d] text-base mt-2 mb-1'>Free Consultation</strong>
                    <p className=' text-xs text-[#575757] '>Ayurvedic doctors available for Free Consultation/checkup</p>
                    <a className='text-[#c98600] text-xs my-2' href="">Visit our nearest clinic</a>
                </div>
                <div className=' h-[200px] w-[370px]  flex flex-col justify-start items-center text-center'>
                    <img src="/src/assets/asset 46.png" alt="" />
                    <strong className='text-[#4d4d4d] text-base mt-2 mb-1'>Customer Support</strong>
                    <p className=' text-xs text-[#575757] '>For any query feel free to contact our Customer care executive</p>
                    <a className='text-[#c98600] text-xs my-2' href=""><span className='text-black mx-1'>Call</span> <span>011 12345678</span> <span>011 12345678</span></a>
                </div>
                <div className=' h-[200px] w-[370px] flex flex-col justify-start items-center text-center'>
                    <img src="/src/assets/asset 47.png" alt="" />
                    <strong className='text-[#4d4d4d] text-base mt-2 mb-1'>Fast Shipping</strong>
                    <p className=' text-xs text-[#575757]'>Fast and  secure delevery by India Post and Leading Courier Services</p>
                    <a className='text-[#c98600] text-xs my-2' href="">Visit our nearest clinic</a>
                </div>
            </div>

        </div>
    )
}

export default Services