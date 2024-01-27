import React, { useState } from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DiseasesCard from './diseasesCard/DiseasesCard';
import ViewAll from '../viewall/ViewAll'
import { Link } from 'react-router-dom';


const sampledata = [

    {
        id: 1,
        url: '/asset 34.webp',
        title: 'HEADACHE (HINDI)'
    },
    {
        id: 2,
        url: '/asset 34.webp',
        title: 'HAIR LOSS (HINDI)'
    },
    {
        id: 3,
        url: '/asset 34.webp',
        title: 'UTI (HINDI)'
    },
    {
        id: 4,
        url: '/asset 34.webp',
        title: 'WARTS (HINDI)'
    },
    {
        id: 5,
        url: '/asset 39.webp',
        title: 'DRY SKIN'
    },
    {
        id: 6,
        url: '/asset 34.webp',
        title: 'HEADACHE(HINDI)'
    },
    {
        id: 7,
        url: '/asset 34.webp',
        title: 'HEADACHE(HINDI)'
    },
    {
        id: 8,
        url: '/asset 34.webp',
        title: 'HEADACHE(HINDI)'
    },
    {
        id: 9,
        url: '/asset 34.webp',
        title: 'HEADACHE(HINDI)'
    },
    {
        id: 10,
        url: '/asset 34.webp',
        title: 'HEADACHE(HINDI)'
    },
    {
        id: 11,
        url: '/asset 34.webp',
        title: 'HEADACHE(HINDI)'
    },


]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", position: "absolute", top: "-35px", right: "1%", zIndex: '10' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", position: "absolute", top: "-35px", left: "95%", right: "100px", zIndex: '10' }}
            onClick={onClick}
        />
    );
}


const Diseases = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive)
        setIsActive1(false)

    };
    const handleClick1 = () => {
        setIsActive1(!isActive1)
        setIsActive(false)

    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


    };
    return (

        <div className=' font-roboto lg:max-w-[1140px] mx-auto px-2 my-4 pt-4 pb-8 relative '>
            <div className=' relative'>
                <h2 className='text-[#c98600]  text-center text-[27px] font-bold mt-1 mb-3 '>
                    <span className='hover:text-black'>DISEASES</span>
                </h2>
                {/* <div className=' absolute top-0 right-0 flex gap-2'>
                    <button onClick={handleClick} className={` hover:bg-[#efefef]  border-black p-1 rounded-sm ${isActive ? 'border' : ''}`}>
                        <IoIosArrowBack />
                    </button>
                    <button onClick={handleClick1} className={` hover:bg-[#efefef]  border-black p-1 rounded-sm ${isActive1 ? 'border' : ''}`}>
                        <IoIosArrowForward />
                    </button>
                </div> */}
            </div>
            <Slider {...settings}>


                <div>
                    <DiseasesCard />
                </div>
                <div>
                    <DiseasesCard />
                </div>
                <div>
                    <DiseasesCard />
                </div>
                <div>
                    <DiseasesCard />
                </div>
                <div>
                    <DiseasesCard />
                </div>
                <div>
                    <DiseasesCard />
                </div>
                <div>
                    <DiseasesCard />
                </div>
                <div>
                    <DiseasesCard />
                </div>

            </Slider>
           
        </div>
    );
}

export default Diseases