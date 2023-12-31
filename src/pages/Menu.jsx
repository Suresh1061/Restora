import React from 'react'
import MenuCard from '../component/MenuCard'
import { MenuApi } from '../assets/MenuApi'

const Menu = () => {
  return (
    <div className='common-box bg-gray-200'>
      <p className='para-heading'>Our Menu</p>
      <h1 className='heading text-center'>TODAY'S SPECIALITY</h1>
      <div className='max-w-[1040px] mx-auto py-12 grid min-[700px]:grid-cols-2  lg:grid-cols-3 gap-8 '>
        {
          MenuApi.map((val) => {
            return <MenuCard
              img={val.imgSrc}
              price={val.price}
            />
          })
        }
      </div>
    </div>
  )
}

export default Menu