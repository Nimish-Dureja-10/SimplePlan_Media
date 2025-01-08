import React from 'react'

const ExploreCardData = [
    {
        id : 1,
        title : "Learn something new",
        description : "Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography",
        imgUrl : "../src/assets/images/Paint.png"
    },
    {
        id : 2,
        title : "Skilled & Passionate Teachers",
        description : "We offers Interactive classes by experts who are qualified and trusted.",
        imgUrl : "../src/assets/images/Teacher.png"
    },
    {
        id : 3,
        title : "Take classes anytime, anywhere",
        description : "Join sessions at your own convenience and pace, from the comforts of your home.",
        imgUrl : "../src/assets/images/Student.png"
    },
    {
        id : 4,
        title : "Pay as you go",
        description : "No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe andsecure with us.",
        imgUrl : "../src/assets/images/Money.png"
    }
]

const ExploreCard = ({imgUrl,title, description}) => {
    return (
        <div className='flex flex-col items-center text-center flex-1 gap-2'>
            <img className='h-20 w-20' src={imgUrl} alt={title} />
            <h4 className='text-lg text-[#2530a0] font-semibold'>
                {title}
            </h4>
            <p className='text-md px-4 text-[#717696]'>
                {description}
            </p>
        </div>
    )
}

const Explore = () => {
  return (
    <div className='flex flex-col'>
        <div className='px-4 flex items-center justify-center'>
            <h1 className='text-3xl font-bold text-[#2530a0] text-center'>
                Explore. Enroll. Have Fun. Repeat - <br />
                here hobby meet happiness
            </h1>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-12 mt-12 px-16 py-8'>
            {
                ExploreCardData.map((exp)=>(
                    <ExploreCard key={exp.id} title={exp.title} description={exp.description} imgUrl={exp.imgUrl} />
                ))
            }
        </div>
    </div>
  )
}

export default Explore