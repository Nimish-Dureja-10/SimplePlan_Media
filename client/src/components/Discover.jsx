import React from 'react'

const DiscoverCard = () => {
    return (
        <div className='flex flex-col items-start h-full lg:w-[23%] rounded-md bg-[#e9efff] border shadow-lg'>
            <div className='w-full'>
                <img className='h-40 object-cover rounded-t-md' src='../src/assets/images/DiscoverCard.jpg' alt='discover_card' />
            </div>
            <div className='py-2 px-4'>
                <h4 className='text-md font-medium uppercase text-[#2530a0]'>Language</h4>
            </div>
            <div className='px-4'>
                <p className='text-black font-medium text-md'>
                Class name - Lorem ipsum sit elit varsit lectusi sit amet
                </p>
                <p className='text-sm text-[#7b7b7b] my-1'>
                    by John Doe <span className='text-[#ffb150]'>★ 4.7</span>
                </p>
                <p className='text-[#3e3e3e] text-sm font-light my-4'>
                    Lorem ipsum dolor sit amet, varius
                    consectetur varius entat consectet
                    adipiscing elit. Ullamcorper...
                </p>
            </div>
            <div className='bg-[#2530a0] flex w-full items-center text-white px-4 py-1 rounded-b-lg justify-between'>
                <div className=''>
                    <h4 className='text-sm'>kr1000 <span className='text-xs text-[#bec4ff] line-through'>kr2000</span></h4>
                </div>
                <div className=''>
                    <h4 className='text-md font-medium'>Enroll Now</h4>
                </div>
            </div>
        </div>
    )
}

// const DiscoverCard = () => {
//     return (
//       <div className="flex flex-col items-start h-full w-full sm:w-[48%] md:w-[30%] lg:w-[23%] rounded-md bg-[#e9efff] border shadow-lg">
//         <div className="w-full">
//           <img
//             className="h-40 object-cover rounded-t-md"
//             src="../src/assets/images/DiscoverCard.jpg"
//             alt="discover_card"
//           />
//         </div>
//         <div className="py-2 px-4">
//           <h4 className="text-md font-medium uppercase text-[#2530a0]">
//             Language
//           </h4>
//         </div>
//         <div className="px-4">
//           <p className="text-black font-medium text-md">
//             Class name - Lorem ipsum sit elit varsit lectusi sit amet
//           </p>
//           <p className="text-sm text-[#7b7b7b] my-1">
//             by John Doe <span className="text-[#ffb150]">★ 4.7</span>
//           </p>
//           <p className="text-[#3e3e3e] text-sm font-light my-4">
//             Lorem ipsum dolor sit amet, varius consectetur varius entat
//             consectet adipiscing elit. Ullamcorper...
//           </p>
//         </div>
//         <div className="bg-[#2530a0] flex w-full items-center text-white px-4 py-1 rounded-b-lg justify-between">
//           <div>
//             <h4 className="text-sm">
//               kr1000{" "}
//               <span className="text-xs text-[#bec4ff] line-through">kr2000</span>
//             </h4>
//           </div>
//           <div>
//             <h4 className="text-md font-medium">Enroll Now</h4>
//           </div>
//         </div>
//       </div>
//     );
//   };

const Discover = () => {
  return (
    <div className='my-8 lg:px-28 px-4 flex flex-col'>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='flex items-baseline gap-4'>
                <h1 className='text-3xl text-[#2530a0] font-bold'>Discover classes</h1>
                <p className='uppercase text-sm text-red-500 underline'>Show all</p>
            </div>
            <div className='flex justify-between lg:flex-row mt-2 items-center gap-4'>
                <h4>Show prices in: </h4>
                <div>
                    <button className='bg-[#2530a0] py-2 px-6 rounded-l-full text-white text-sm'>NOK</button>
                    <button className='bg-[#f5f7fa] py-2 px-6 rounded-r-full text-sm font-light'>INR</button>
                </div>
            </div>
        </div>
        <div className='mt-6'>
            <h4 className='text-[#51557d] text-sm'>Choose from a variety of classes from around the world.</h4>
        </div>
        <div className='mt-12'>
            <div className='flex lg:flex-row flex-col flex-wrap justify-between h-auto w-full gap-8'>
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
            </div>
        </div>
    </div>
  )
}

export default Discover