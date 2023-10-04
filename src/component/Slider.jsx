import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2  items-center'>
                <div className=' order-2 md:order-1 px-6 md:px-0'>
                    <h1 className='ld:text-7xl md:text-5xl text-4xl font-bold text-[#000066] py-2'>Fried Chicken</h1>
                    <p className='py-1 pr-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nostrum illo? Quod neque repudiandae expedita a? Tempore, expedita iusto.</p>
                    <button className='btn mt-4'>Order Now</button>
                </div>
                <div className=' order-1 md:order-2'>
                    <img src="https://img.freepik.com/premium-photo/plate-with-roasted-turkey-white-background_392895-32237.jpg?w=740" alt="/" />
                </div>
            </div>
            {/* <div className='max-w-[1240px] mx-auto grid md:grid-cols-2  items-center'>
                <div className=' order-2 md:order-1 px-6 md:px-0'>
                    <h1 className='ld:text-7xl md:text-5xl text-4xl font-bold text-[#000066] py-2'>Fried Chicken</h1>
                    <p className='py-1 pr-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nostrum illo? Quod neque repudiandae expedita a? Tempore, expedita iusto.</p>
                    <button className='btn mt-4'>Order Now</button>
                </div>
                <div className=' order-1 md:order-2'>
                    <img src="https://img.freepik.com/premium-photo/plate-with-roasted-turkey-white-background_392895-32237.jpg?w=740" alt="/" />
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2  items-center'>
                <div className=' order-2 md:order-1 px-6 md:px-0'>
                    <h1 className='ld:text-7xl md:text-5xl text-4xl font-bold text-[#000066] py-2'>Fried Chicken</h1>
                    <p className='py-1 pr-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nostrum illo? Quod neque repudiandae expedita a? Tempore, expedita iusto.</p>
                    <button className='btn mt-4'>Order Now</button>
                </div>
                <div className=' order-1 md:order-2'>
                    <img src="https://img.freepik.com/premium-photo/plate-with-roasted-turkey-white-background_392895-32237.jpg?w=740" alt="/" />
                </div>
            </div> */}

        </Slider>
    );
}