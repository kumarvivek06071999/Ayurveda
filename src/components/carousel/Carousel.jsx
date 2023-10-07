import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useAuth } from '../../context/data/AuthContext';



const SimpleSlider = () => {
  // const baseUrl = "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667";
  const { baseUrl } = useAuth()

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className=''>
      {/* <h2>Fade</h2> */}
      <Slider {...settings}>
        <div className='  '>
          <img className=' w-full' src={baseUrl + "/asset 2.webp"} />
        </div>
        <div className=' '>
          <img className=' w-full' src={baseUrl + "/asset 3.webp"} />
        </div>
        <div className='  '>
          <img className=' w-full' src={baseUrl + "/asset 5.webp"} />
        </div>
        <div className=''>
          <img className=' w-full' src={baseUrl + "/asset 4.webp"} />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider