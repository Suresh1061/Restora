import React from 'react'

const Order = () => {
  return (
    <div className='common-box pb-12 bg-gray-200'>
      <p className='para-heading'>Order Now</p>
      <h1 className='heading text-center'>Free And Fast</h1>
      <div className='max-w-[1040px] mx-auto grid md:grid-cols-2 md:gap-6 bg-white px-4 py-4 rounded-md' >
        <div>
          <label className='font-medium'>Your Name <br />
            <input className='input-style' type="text" placeholder='enter your name' />
          </label>
          <br />
          <label className='font-medium'>Your Number <br />
            <input className='input-style' type="text" placeholder='enter your number' />
          </label>
          <br />
          <label className='font-medium'>Your Order <br />
            <input className='input-style' type="text" placeholder='enter food name' />
          </label>
          <br />
          <label className='font-medium'>Your Address <br />
            <textarea className='input-style h-[154px]'  type="text" placeholder='enter food name' />
          </label>
        </div>

        <div>
          <label className='font-medium'>How Musch <br />
            <input className='input-style' type="number" placeholder='how many orders' />
          </label>
          <br />
          <label className='font-medium'>Additional Food<br />
            <input className='input-style' type="text" placeholder='extra with food' />
          </label>
          <br />
          <label className='font-medium'>Date And Time<br />
            <input className='input-style' type="date" />
          </label>
          <br />
          <label className='font-medium'>Your Message <br />
            <textarea className='input-style h-[154px]' type="text" placeholder='enter food name' />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Order