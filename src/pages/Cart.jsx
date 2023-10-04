import React from 'react'
import Card from '../component/Card'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { GiElectric } from 'react-icons/gi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { removeItems } from '../Reducer/Redux/AddCart'


const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { items } = useSelector(state => state.items);
  // console.log(items)

  return (
    <div className=' w-full pt-[80px] pb-4 min-h-screen  bg-gray-200 '>
      <p className='font-medium text-[#359f80] text-center py-4'>My Cart</p>
      {
        items ?
          items.map((data) => {
            return (
              <div className=' w-[400px]  shadow-lg mx-auto pt-2 mb-3 bg-white rounded-md overflow-hidden'>
                <div className='grid grid-cols-3 px-2'>
                  <img src={data.img} alt="" className=' object-contain' />
                  <div className=' col-span-2'>
                    <h1 className='px-4 py-2 font-bold text-xl md:text-3xl '>Tasty Food</h1>
                    <div className='flex justify-start px-4 py-2 gap-1'>
                      <FaStar size={20} color='#0e8964' />
                      <FaStar size={20} color='#0e8964' />
                      <FaStar size={20} color='#0e8964' />
                      <FaStar size={20} color='#0e8964' />
                      <FaStarHalfAlt size={20} color='#0e8964' />
                    </div>
                    <h1 className='text-2xl px-4 text-black font-bold'>₹ {data.price}</h1>
                  </div>
                </div>
                <div className='grid grid-cols-2 mt-2 border-t-2'>
                  <h2 className=' flex  items-center justify-center gap-2 text-lg font-semibold text-gray-500 cursor-pointer py-2 border-r-2' onClick={()=>dispatch(removeItems(data.id))}><RiDeleteBin6Line /> Remove</h2>
                  <h2 className=' flex  items-center justify-center gap-2 text-lg font-semibold text-gray-500 cursor-pointer py-2' ><GiElectric /> Buy this now</h2>
                </div>
              </div>
            )
          }) : null
      }
    </div>
  )
}

export default Cart