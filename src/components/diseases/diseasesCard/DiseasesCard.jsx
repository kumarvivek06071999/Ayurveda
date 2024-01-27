import React from 'react'

const DiseasesCard = ( data ) => {
    const baseUrl = "/src/assets"

    // console.log(data)

    return (
        <div>
            <div className=' h-[177px] w-[173px] bg-slate-300'>
                <div className=' flex justify-center items-center h-[149px] w-[173px] '>
                    <img className='h-[110px] w-[110px] rounded-full bg-yellow-300' src="/src/assets/asset 33.webp" alt="" />
                </div>
                <div className='h-[19px] w-full text-center'>
                    <span>
                        DRY SKIN
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DiseasesCard