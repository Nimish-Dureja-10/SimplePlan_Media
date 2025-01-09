import React from 'react'

const Teaching = () => {
  return (
    <div className='mt-6 px-6 lg:px-32'>
      <div className='flex flex-col lg:flex-row items-center justify-around'>
        <div>
          <img src='https://i.ibb.co/rGj0dFg/hero.png' alt='certified_image' />
        </div>
        <div className='flex flex-col text-center lg:text-start justify-center px-4 lg:px-20 gap-2 lg:gap-4'>
          <h1 className='text-3xl font-bold text-[#2530a0]'>Become a certified <br className='relative lg:block' /> teacher</h1>
          <p className='text-gray-600 text-sm'>
          We only have the best and trusted teachers from the globe.<br className='relative lg:block' /> Join us if you have the skill and passion to share it.
          </p>
          <p className='text-sm text-gray-600'>
            <span className='text-orange-400'>&#9632; </span> 
            Make your own schedule
          </p>
          <p className='text-sm text-gray-600'>
            <span className='text-orange-400'>&#9632; </span> 
            Teach students on an international platform
          </p>
          <p className='text-sm text-gray-600'>
            <span className='text-orange-400'>&#9632; </span> 
            Become part of an international community of  passionate educators.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Teaching