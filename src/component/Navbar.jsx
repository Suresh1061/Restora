import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi"
import { AiFillHeart } from 'react-icons/ai'
import { IoMdCart } from 'react-icons/io'
import { GiKnifeFork } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { AddCart } from '../Reducer/Redux/AddCart'
import { Badge } from 'antd'


const Navbar = () => {
  const [nav, setNav] = useState(true);
  const {items } = useSelector(state =>state.items);
  // console.log(items);

  return (
    <div className='w-full shadow-lg fixed top-0 z-10 bg-white  '>
      <div className=' max-w-[1240px] mx-auto h-20  flex justify-between items-center md:flex-row px-8'>
        <div className='flex'>
          <div className='flex justify-center items-center pr-1'><GiKnifeFork size={25} color='#0e8964' /></div>
          <h1 className=' font-medium text-4xl '>Restora.</h1>
        </div>

        <div className='md:flex gap-4 hidden'>
          <NavLink className='nav-item' to='/'>Home</NavLink>
          <NavLink className='nav-item' to='/dishes'>Dishes</NavLink>
          <NavLink className='nav-item' to='about'>About</NavLink>
          <NavLink className='nav-item' to='menu'>Menu</NavLink>
          <NavLink className='nav-item' to='review'>Review</NavLink>
          <NavLink className='nav-item' to='order'>Order</NavLink>
        </div>

        <div className='md:hidden'>
          <div className={!nav ? 'bg-white w-full  border-b fixed top-20 left-0 py-2 border-t  ' : "fixed top-[-100%]"}>
            <NavLink className=' nav-item mx-6 bg-gray-300 my-2 block' to='/'>Home</NavLink>
            <NavLink className=' nav-item mx-6 bg-gray-300 my-2 block' to='/dishes'>Dishes</NavLink>
            <NavLink className=' nav-item mx-6 bg-gray-300 my-2 block' to='about'>About</NavLink>
            <NavLink className=' nav-item mx-6 bg-gray-300 my-2 block' to='menu'>Menu</NavLink>
            <NavLink className=' nav-item mx-6 bg-gray-300 my-2 block' to='review'>Review</NavLink>
            <NavLink className=' nav-item mx-6 bg-gray-300 my-2 block' to='order'>Order</NavLink>
          </div>
        </div>

        <div className='flex gap-2 md:gap-6'>
          {/* <NavLink className='nav-icon hover:rotate-[360deg] duration-300' to='/search'><FiSearch size={20} /></NavLink> */}
          <NavLink className='nav-icon duration-300' to='/favourite'><AiFillHeart size={20} /></NavLink>
          <NavLink className='nav-icon duration-300 hover:text-white' to='/cart'><Badge count={items.length} offset={[5,-6]} size='mediun'><IoMdCart size={20} /></Badge></NavLink>
          <div className='md:hidden nav-icon' onClick={() => setNav(!nav)}>
            {!nav ? <IoClose size={20} /> : <HiMenu size={20} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar