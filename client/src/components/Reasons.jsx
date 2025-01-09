import React from 'react'

const ReasonCardData =  [
    {
        id : 1,
        title : "Interactive live online classes at your convenient time slots",
        // imgUrl : "../src/assets/images/r1.jpg"
        imgUrl : "https://i.ibb.co/3hV6PSD/r1.jpg"
    },
    {
        id : 2,
        title : "Learning from passionate, talented and trusted teachers",
        // imgUrl : "../src/assets/images/r2.png"
        imgUrl : "https://i.ibb.co/ZB3cr3k/r2.png"
    },
    {
        id : 3,
        title : "Cross country sharing of interesting and unique hobbies from across the world",
        // imgUrl : "../src/assets/images/r3.png"
        imgUrl : "https://i.ibb.co/k4TQQdc/r3.png"
    },
    {
        id : 4,
        title : "Age no bar for enroling into your cherished hobby or activity classes",
        // imgUrl : "../src/assets/images/r4.jpg"
        imgUrl : "https://i.ibb.co/MfBz3nJ/r4.jpg"
    },
    {
        id : 5,
        title : "Transparent and structured fee payment options",
        // imgUrl : "../src/assets/images/r5.png"
        imgUrl : "https://i.ibb.co/qFxpxT0/r5.png"
    },
    {
        id : 6,
        title : "Contributing to the revival and nurturing of traditional art forms",
        // imgUrl : "../src/assets/images/r6.png"
        imgUrl : "https://i.ibb.co/ctqQ31H/r6.png"
    },
]

const ReasonCard = ({title,imgUrl}) => {
    return (
        <div className='flex flex-col gap-4 text-center lg:text-start items-center lg:items-start lg:w-[25%]'>
            <div>
                <img className='h-24 w-24' src={imgUrl} alt='Reason' />
            </div>
            <div>
                <h4 className='text-xl font-bold'>{title}</h4>
            </div>
        </div>
    )
}

const Reasons = () => {
  return (
    <div className='my-16 px-4 lg:px-28'>
        <div>
            <h1 className='text-3xl text-[#2530a0] font-bold'>Six reasons to choose our class</h1>
        </div>
        <div className='flex flex-row flex-wrap h-auto mt-12 gap-28'>
            {
                ReasonCardData.map((reason) => (
                    <ReasonCard key={reason.id} title={reason.title} imgUrl={reason.imgUrl} />
                ))
            }
        </div>
    </div>
  )
}

export default Reasons