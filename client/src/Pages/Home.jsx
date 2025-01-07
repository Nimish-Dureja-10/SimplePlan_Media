import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home