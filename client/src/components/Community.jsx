import React from 'react'

const CommunityCardData = [
    {
        id : 1,
        name : "Karandeep",
        message : "It is nice to be on an international platform where there are teachers from around the world.",
        imgUrl : "../src/assets/images/person1.jpg"
    },
    {
        id : 2,
        name : "Kalpana",
        message : "The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.",
        imgUrl : "../src/assets/images/person2.jpg"
    },
    {
        id : 3,
        name : "Kirti",
        message : "As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.",
        imgUrl : "../src/assets/images/person3.jpg"
    },
]

const CommunityCard = ({id,name,message,imgUrl}) => {
    return (
        <div className={`flex flex-col gap-4 text-center items-center lg:w-[30%] border border-[#d3deeb] rounded-md p-4 ${id === 2 ? 'bg-[#2330a0]' : ''}`}>
            <div>
                <img className='h-20 w-20 rounded-full' src={imgUrl} alt='Reason' />
            </div>
            <div className='flex flex-col gap-4 px-2'>
                <h4 className={`text-lg ${id === 2 ? 'text-white' : 'text-[#a7a7a7]'} font-semibold`}>{name}</h4>
                <p className={`text-md  ${id === 2 ? 'text-white' : 'text-[#4d4d4d]'}`}>
                    {message}
                </p>
            </div>
        </div>
    )
}

const Community = () => {
  return (
    <div className='my-16 px-4 lg:px-28'>
        <div>
            <h1 className='text-3xl text-[#2530a0] font-bold'>Love from community</h1>
        </div>
        <div className='flex flex-row flex-wrap h-auto mt-12 gap-8'>
            {
                CommunityCardData.map((com)=>(
                    <CommunityCard key={com.id} id={com.id} name={com.name} message={com.message} imgUrl={com.imgUrl} />
                ))
            }
        </div>
    </div>
  )
}

export default Community