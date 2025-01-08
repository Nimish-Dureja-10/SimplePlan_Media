import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";

const Hero = () => {
  return (
    <div className='mt-6 h-[70vh] flex justify-around px-20'>
        <div className='flex flex-col items-start justify-center gap-6'>
            <div className='flex gap-2'>
                <h1 className='flex font-bold items-center gap-2 text-xl text-[#2530a0]'>Hobbies <span className='text-red-500 text-2xl'><FaHeart /></span></h1>
                <h1 className='flex font-bold items-center gap-2 text-xl text-[#2530a0]'>Happiness <span className='text-red-500 text-2xl'><FaHeart /></span></h1>
                <h1 className='flex font-bold items-center gap-2 text-xl text-[#2530a0]'>Home</h1>
            </div>
            <div>
                <p className='text-md font-light text-[#2530a0]'>A Nordic startup which brings incredibly <br />
                    interesting hobbies from around the world to <br />
                    people of all ages. 
                </p>
            </div>
            {/* <div className='flex items-center'>
                <input type="text" placeholder="Enter your email" className='border border-[#50557d] rounded-full py-0.5 px-5 ' />
                <button className='flex items-center gap-2 border rounded-full bg-[#2330a0] text-white py-0.5 px-4 uppercase'>Start Exploring <FaRegArrowAltCircleRight /></button>
            </div> */}
            <div className='flex relative'>
                <input 
                    type="text" 
                    placeholder="Enter your email" 
                    className='border border-[#50557d] rounded-full py-0.5 px-5 placeholder:text-sm text-left' 
                />
                <button 
                    className='flex text-sm items-center gap-2 border rounded-full bg-[#2330a0] text-white py-1 px-4 uppercase absolute right-0 translate-x-[70%]'>
                    Start Exploring <FaRegArrowAltCircleRight />
                </button>
            </div>
        </div>
        {/* <div className='flex relative'>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fb7356" d="M40.7,-40.2C49.3,-21.6,50.5,-4.9,48.9,14.8C47.3,34.4,42.8,57,28.1,67.8C13.3,78.6,-11.8,77.5,-34.2,67.9C-56.6,58.3,-76.3,40.1,-80.6,19C-84.9,-2,-73.8,-26,-57.8,-46.3C-41.8,-66.5,-20.9,-83.1,-2.4,-81.2C16,-79.2,32,-58.8,40.7,-40.2Z" transform="translate(100 100)" />
            </svg>
            <svg className='absolute z-50' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.1,-24.7C52.6,-20,39.9,-2.2,28.9,6.4C18,15,9,14.3,-9,19.5C-27,24.7,-54.1,35.8,-65.7,26.8C-77.4,17.8,-73.6,-11.3,-60.1,-21.2C-46.6,-31.2,-23.3,-22,-0.7,-21.5C21.8,-21.1,43.6,-29.4,48.1,-24.7Z" transform="translate(100 100)" />
            </svg>
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask id="mask" maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="600">
                <path
                    d="M48.1,-24.7C52.6,-20,39.9,-2.2,28.9,6.4C18,15,9,14.3,-9,19.5C-27,24.7,-54.1,35.8,-65.7,26.8C-77.4,17.8,-73.6,-11.3,-60.1,-21.2C-46.6,-31.2,-23.3,-22,-0.7,-21.5C21.8,-21.1,43.6,-29.4,48.1,-24.7Z"
                    fill="white"
                    transform="translate(100 100)"
                />
                </mask>
                <image
                href="https://helenaschwartzphoto.com/wp-content/uploads/sites/21499/2022/03/8U2A7366helena-schwartz-photography-scaled-e1646968255680.jpg"
                mask="url(#mask)"
                width="200"
                height="200"
                x="0"
                y="0"
                preserveAspectRatio="xMidYMid slice"
                />
            </svg>
        </div> */}
        <div className='flex p-20'>
            <img className='object-fit rounded-2xl' src="https://helenaschwartzphoto.com/wp-content/uploads/sites/21499/2022/03/8U2A7366helena-schwartz-photography-scaled-e1646968255680.jpg" alt="Hero_section_photo" />
        </div>
        <div className='fixed bottom-10 right-16'>
            <button className='bg-[#2530a0] text-white p-2.5 text-lg rounded-full'><IoMdChatboxes /></button>
        </div>
    </div>
  )
}

export default Hero