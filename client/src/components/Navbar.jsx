import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    const {id} = 'feirhefiwffwf'
  return (
    <div className='flex flex-row justify-around items-center mt-4'>
        <div className='flex gap-8 items-center'>
            <div>
                <Link href="/" className='text-2xl text-[#2530a0] font-semibold'>Logo</Link>
            </div>
            <div className=''>
                <Link href={`/categories/${id}`} className='text-lg text-[#2530a0] uppercase'>Categories</Link>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <div className='border-r-2 border-r-[#dfe0e2] pr-4'>
                <Link className='uppercase text-sm text-[#2530a0]'>Teach</Link>
            </div>
            <div>
                <button className='bg-white border border-[#2530a0] text-[#2530a0] font-semibold rounded-full py-1 px-6 text-sm'>LOGIN</button>
            </div>
            <div>
            <button className='bg-[#2530a0] border border-[#2530a0] text-[#ffffff] font-semibold rounded-full py-1 px-6 text-sm'>SIGN UP</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar