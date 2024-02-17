import React from 'react'
import PrevArrow from '../Item/PrevArrow'
import NextArrow from '../Item/NextArrow'
import Heading from '../Item/Heading'
import ItemCarousel from '../Item/ItemCarousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data_newarrival from '../Data/data_newarrival'
import Item from '../Item/Item'

const NewArrival = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // draggable: true,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              },
            },
          ],
    };

    return (
        <div className=''>
            <div className='px-2 py-5'>
                <Heading  heading='NEW ARRIVAL' />
            </div>
            <div className=''>
            <Slider {...settings} className=''>
                {data_newarrival.map((item,i) => {
                    return <div className='px-2' key={i}>
                        <ItemCarousel id={item.id} name={item.name} image={item.image} price={item.price.toLocaleString()} />
                    </div>
                })}
            </Slider>
            </div>
        </div>
    )
}

export default NewArrival