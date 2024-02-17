import React from 'react'
import './Hero.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner_1 from '../assets/banner/NIKE-AIR-MAX-_MAY_-_17-23-May-_23__Hero-Banner_1440x415.jpg'
import banner_2 from '../assets/banner/banner-dunk.png'
import banner_3 from '../assets/banner/banner_-_nike.webp'

const data_slide = [
    {
        id: 1,
        title: "50% Off For Your First Shopping",
        desc: "Up to 10% off Voucher",
        img: banner_1,
      },
      {
        id: 2,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet.",
        img: banner_2,
      },
      {
        id: 3,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet.",
        img:banner_3,
      },
]

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        fade: true,
	    fadeSpeed: 1000
    };
    return (
        <div className='overflow-hidden'>
            <Slider {...settings}>
            {data_slide.map((value, index) => {
                    return (
                        <div key={index} className=''>
                            <img src={value.img} alt="" className='w-full h-[450px] object-cover' />
                        </div> 
                    )
                })}
            </Slider>
        </div>
    )
}

export default Hero