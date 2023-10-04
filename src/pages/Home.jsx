import React from 'react'
import SimpleSlider from '../component/Slider'

const Home = () => {
  return (
    <div className='common-box '>
      <p className='para-heading'>Our Special Dish</p>
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
      {/* <SimpleSlider/> */}
    </div>
  )
}

export default Home