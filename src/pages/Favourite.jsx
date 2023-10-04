import React from 'react'
import Card from '../component/Card'
import { FoodApi } from '../assets/FoodApi'

const Favourite = () => {
  return (
    <div className='common-box'>
      <p className='para-heading'>My Wishlist</p>
      <div className=' max-w-[1040px] mx-auto py-12 grid min-[700px]:grid-cols-2  lg:grid-cols-3 gap-8 '>
        {
          FoodApi.map((val) => {
            return <Card
              id = {val.id}
              img={val.imgSrc}
              price={val.price}
            />
          })
        }
      </div>
    </div>
  )
}

export default Favourite