import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'

const MenuCard = ({ img, price }) => {
    return (
        <div>
            <div className='bg-white shadow-lg border p-2 overflow-hidden relative rounded-md max-[700px]:w-[400px] max-[500px]:w-[320px] max-[700px]:mx-auto '>
                <div className='h-10 w-10 bg-gray-300 border rounded-full flex justify-center items-center hover:text-[#ff0000] cursor-pointer duration-300 absolute top-4 right-4'><AiFillHeart size={20} /></div>
                <img className=' h-64 max-[700px]:h-56  object-fill w-full' src={img} alt="/" />
                <div className='flex justify-start py-3 gap-1'>
                    <FaStar size={20} color='#0e8964' />
                    <FaStar size={20} color='#0e8964' />
                    <FaStar size={20} color='#0e8964' />
                    <FaStar size={20} color='#0e8964' />
                    <FaStarHalfAlt size={20} color='#0e8964' />
                </div>
                <h1 className=' font-bold text-2xl md:text-3xl text-[#000066] px-2'>Delicious Food</h1>
                <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex justify-between items-center my-2 px-2'>
                    <span className='text-2xl  text-[#359f80] font-bold'>₹{price}</span>
                    <button className='btn' >Add To Cart</button>
                </div>
            </div></div>
    )
}

export default MenuCard