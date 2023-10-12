import React from 'react'
import OurClinicCard from '../../components/ourproduct//clinicCard/OurClinicCard'
import { Link } from 'react-router-dom'


const OurClinics = () => {


    const locationDetails = [

        {
            id: 1,
            url: '/asset 27.webp',
            title: 'Kodia Pul Old Delhi',
            Desc: '2284, Kodia Pul Chowk, Near Old Delhi Railway Station, Delhi 110006',
            mob: +91 - 9351553719,
            map: 'https://www.google.com/maps/place/Sanyasi+Ayurveda/@28.659661,77.2295589,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfd1a59a9f5bb:0xf0f641a9739e7fd4!8m2!3d28.659661!4d77.2317476',

        },

        {
            id: 2,
            url: '/asset 28.webp',
            title: 'Gwalior MP',
            Desc: 'Madhowganj Chowraha, Lashkar, Gwalior (MP). 474001',
            mob: +91 - 9351553719,
            map: 'https://www.google.com/maps/place/Sanyasi+Ayurveda/@26.1947199,78.1457483,16.04z/data=!4m5!3m4!1s0x0:0xd41908c9c7545858!8m2!3d26.1969468!4d78.1486215',
        },
        {
            id: 3,
            url: '/asset 29.webp',
            title: 'Patel Market Bhopal',
            Desc: 'Shop No.4, Patel Market, Near Sangam Cinema, Bhopal (MP) 462001',
            mob: +91 - 9351553719,
            map: 'https://www.google.co.in/maps/place/Sanyasi+Ayurveda/@23.2627031,77.4074826,17z/data=!3m1!4b1!4m5!3m4!1s0x397c6824fcb52ccd:0xf945c981e56b491d!8m2!3d23.2627031!4d77.4096713',
        },
        {
            id: 4,
            url: '/asset 30.webp',
            title: 'Jaipur Rajasthan',
            Desc: '102 Gurukripa Building, Near Mayank Cinema, Sindhi Camp, Jaipur, Rajasthan 302006',
            mob: +91 - 9351553719,
            map: 'https://www.google.co.in/maps/place/Sanyasi+Clinic/@26.9235081,75.8010278,17z/data=!3m1!4b1!4m5!3m4!1s0x396db3feee09a895:0x5272ecc843177c81!8m2!3d26.9235081!4d75.8032165',
        },

        {
            id: 5,
            url: '/asset 31.webp',
            title: 'Ajmer Rajasthan',
            Desc: 'Shop No.5, Opposite Nagpal Hotel, Railway Station Road, Ajmer, Rajasthan 305001',
            mob: +91 - 9351553719,
            map: 'https://www.google.com/maps/place/Sanyaasi+Ayurveda/@26.4548798,74.6350588,17z/data=!3m1!4b1!4m5!3m4!1s0x396be71e5fc7c0d3:0x9cd17ec8f7fc95f0!8m2!3d26.4548798!4d74.6372475',
        },
        {
            id: 6,
            url: '/asset 32.webp',
            title: 'Delhi Gate Agra',
            Desc: 'Govardhan Complex, Opposite Delhi Gate Smarak, Delhi Gate, Agra (UP) 282002',
            mob: +91 - 9351553719,
            map: 'https://www.google.co.in/maps/place/Sanyasi+Ayurveda/@27.1966948,77.9957084,17z/data=!3m1!4b1!4m5!3m4!1s0x3974774013b327e9:0x369b236e7e848b21!8m2!3d27.1966948!4d77.9978971',
        },

    ]

    return (

        <div className=' bg-[#efefef]'>

            <div className=' font-roboto lg:max-w-[1140px] mx-auto px-2 my-4 pt-4 pb-8 '>
                <div className=' text-center text-[27px] font-bold text-[#c98600] mt-1 mb-3'>

                    <h2  >
                        <Link to='/clinics'>
                            <span className='hover:text-black '>OUR CLINICS</span>
                        </Link>
                    </h2>


                </div>
                <div className='grid grid-cols-3 gap-1 max-sm:grid-cols-1 max-md:grid-cols-2 w-full '>
                    {
                        locationDetails.map((product) => (
                            <OurClinicCard key={product.id} product={product} />

                        ))
                    }
                </div>

                <Link to='/clinics'>
                    <div className=' border-b border-dashed border-[#ea7127] relative flex justify-center my-1'>
                        <Link to='/clinics'>
                            <span className=' text-[#c98600] relative  bg-white px-3 py-0 top-[50%] hover:text-black '>
                                VIEW ALL
                            </span>
                        </Link>
                    </div>
                </Link>

            </div>

        </div >
    )
}

export default OurClinics