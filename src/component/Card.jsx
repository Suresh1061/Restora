import React, { useState } from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addtocart } from '../Reducer/Redux/AddCart'
import { message } from 'antd'

const Card = ({id, img, price }) => {
    const dispatch = useDispatch();

    const [color, setColor] = useState('text-black');
    const [data, setData] = useState([]);
    // const [wishlist, setWishlist] = useEffect([]);

    const toggleColor = () => {
        setColor(
            (color === 'text-black') ? 'text-red-500' : 'text-black'
        )
        setData((val) => {
            return [img]
        })
        console.log(data)
    }

    const mycart = (id,img, price) => {
        // console.log(img, price);
        dispatch(addtocart({id, img, price }))
        message.success('Add Successful')
    }

    return (
        <>
            <div className='bg-white shadow-lg border p-2 overflow-hidden relative  box rounded-md max-[700px]:w-[400px] max-[400px]:w-[300px] max-[700px]:mx-auto' key={id}>
                <div onClick={toggleColor} className={`${color} favourate hearticon`}><AiFillHeart size={20} /></div>
                <img className=' h-52 m-4 object-cover mx-auto' src={img} alt="" />
                <h1 className='text-center font-bold text-2xl md:text-3xl '>Tasty Food</h1>
                <div className='flex justify-center p-4 gap-1'>
                    <FaStar size={20} color='#0e8964' />
                    <FaStar size={20} color='#0e8964' />
                    <FaStar size={20} color='#0e8964' />
                    <FaStar size={20} color='#0e8964' />
                    <FaStarHalfAlt size={20} color='#0e8964' />
                </div>
                <div className='flex justify-evenly items-center mb-4'>
                    <span className='text-2xl  mr-2 text-[#359f80] font-bold'>₹{price}</span>
                    <button className='btn' onClick={()=>mycart(id,img, price)}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default Card