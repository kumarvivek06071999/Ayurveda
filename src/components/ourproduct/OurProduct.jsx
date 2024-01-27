import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './productCard/ProductCard'
// import { withRouter } from 'react-router-dom'
import { asset0, asset1, asset2, asset3, asset4, asset5, asset6, asset7, asset8, asset9, asset10, asset11, asset12, asset13, asset14, asset15, asset16, asset17, asset18, asset19, asset20, asset21, asset22, asset23, asset24, asset25, asset26, asset27, asset28, asset29, asset30, asset31, asset32, asset33, asset34, asset35, asset36, asset37, asset38, asset39, asset40, asset41, asset42, asset43, asset44, asset45, asset46, asset47, asset48 } from '../../assets/index'

const OurProduct = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    const products = [
        {
            id: 1,
            title: 'For WEIGHT GAIN',
            image: asset6,
            name: 'Sanyasi Sehat Tablet',
            price: "699.00",
            link: "/sanyasi-sehat-tablet",
        },

        {
            id: 2,
            title: 'Shilajit Shudh',
            image: asset7,
            name: 'Sanyasi Shilajit Shudh resin (20 g)',
            price: "990.00",
            link: "/sanyasi-shilajit-shudh",

        },
        {
            id: 3,
            title: 'Sanyasi Joshila Tablet',
            image: asset8,
            name: 'Sanyasi Joshila Tablet',
            price: "699.00",
            link: "/sanyasi-joshila-tablet",
        },
        {
            id: 4,
            title: 'For PREMATURE EJACULATION',
            image: asset9,
            name: 'Sanyasi Stamban Tablet',
            price: "699.00",
            link: "/sanyasi-stamban-tablet",
        },
        {
            id: 5,
            title: 'Cure Gas, Acidity and Indigestion',
            image: asset10,
            name: 'Sanyasi Hajma Tablet',
            price: "699.00",
            link: "/sanyasi-hajma-tablet",
        },
        {
            id: 6,
            title: 'Sanyasi Shilajit Power Tablet',
            image: asset11,
            name: 'Sanyasi Shilajit Sudh resin (20 g)',
            price: "900.00",
            link: "/sanyasi-shilajit-power-tablet",
        },
        {
            id: 7,
            title: 'For WEIGHT LOSS',
            image: asset12,
            name: 'Sanyasi Slimming Table',
            price: "699.00",
            link: "/sanyasi-slimming-tablet",
        },
        {
            id: 8,
            title: 'For LONG and STRONG HAIR',
            image: asset13,
            name: 'Sanyasi Strong Hair Oil',
            price: "699.00",
            link: "/sanyasi-strong-hair-oil",
        },
        {
            id: 9,
            title: 'Increase APPETITE and GROWTH',
            image: asset14,
            name: 'Sanyasi Growthex Syrup',
            price: "699.00",
            link: "/sanyasi-growthex-syrup",
        },
        {
            id: 10,
            title: 'For CURE PILES',
            image: asset15,
            name: 'Sanyasi Piles Tablet',
            price: "699.00",
            link: "/sanyasi-piles-tablet",
        },
        {
            id: 11,
            title: 'For JOINT PAIN and ARTHRITIS',
            image: asset16,
            name: 'Sanyasi Jod Dard Tablet',
            price: "699.00",
            link: "/sanyasi-jod-dard-tablet",
        },
        {
            id: 12,
            title: 'To Grow HEIGHT FAST',
            image: asset17,
            name: 'Sanyasi Growthex  Tablet',
            price: "699.00",
            link: "/sanyasi-growthex-tablet",
        },
        {
            id: 13,
            title: 'FOR LEUKORRHEA (सफेद पानी)',
            image: asset18,
            name: 'Sanyasi Nari Prabha Tablet',
            price: "699.00",
            link: "/sanyasi-nari-prabha-tablet",
        },
        {
            id: 14,
            title: 'For Diabetes',
            image: asset19,
            name: 'Sanyasi Diab Controller Tablet',
            price: "699.00",
            link: "/sanyasi-diab-controller-tablet",
        },
        {
            id: 15,
            title: 'For HIGH BP',
            image: asset20,
            name: 'Sanyasi BP-27 Tablet',
            price: "699.00",
            link: "/sanyasi-bp27-tablet",
        },
        {
            id: 16,
            title: 'FOR KIDNEY STONE',
            image: asset21,
            name: 'Sanyasi Pathri Tablet',
            price: "699.00",
            link: "/sanyasi-pathri-tablet",
        },

    ]

    const lastrow = [

        {
            id: 17,
            title: "To Increase Power In Vein's",
            image: asset22,
            name: 'Sanyasi Joshila Oil',
            price: "699.00",
            link: "/sanyasi-joshila-oil",
        },
        {
            id: 18,
            title: 'For Health, Vigour and Vitality',
            image: asset23,
            name: 'Joshila Kit',
            price: "999.00",
            link: "/sanyasi-joshila-kit",
        },
        {
            id: 19,
            title: 'For Men Power and Premature Ejaculation',
            image: asset24,
            name: 'Stamban Kit',
            price: "999.00",
            link: "/sanyasi-stamban-kit",
        },
    ]


    return (
        <div className=' font-roboto max-w-[1140px] mx-auto px-2 '>
            <div className=' text-center text-[27px] font-bold text-[#c98600] hover:text-black mt-1 mb-3'>
                <Link to="/products">
                    <h2 >OUR AYURVEDIC PRODUCTS</h2>
                </Link>
            </div>
            <div className='grid grid-cols-4  w-full gap-1 max-sm:grid-cols-1 max-md:grid-cols-2 '>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>
            <div className='grid grid-cols-3 w-11/12 mx-auto gap-1 max-sm:grid-cols-1 max-md:grid-cols-2 justify-between'>
                {lastrow.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>

        </div>
    )
}

export default OurProduct 