import React from 'react'
import Card from '../component/Card'
import { FoodApi } from '../assets/FoodApi'


const Dishes = () => {
  return (
    <div className='common-box bg-gray-200'>
      <p className='para-heading'>Our Dishes</p>
      <h1 className='heading text-center'>POPULAR DISHES</h1>
      <div className=' max-w-[1040px] mx-auto py-12 grid min-[700px]:grid-cols-2  lg:grid-cols-3 gap-8 '>
        {
          FoodApi.map((val) => {
            return <Card
              id={val.id}
              img={val.imgSrc}
              price={val.price}
            />
          })
        }
      </div>
    </div>
  )
}

export default Dishes