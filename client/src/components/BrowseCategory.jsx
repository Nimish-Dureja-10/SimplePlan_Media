import React from 'react'

const BrowseCardData = [
    {
        id : 1,
        title : "Language",
        imgUrl : "../src/assets/images/language.jpg"
    },
    {
        id : 2,
        title : "Cooking",
        imgUrl : "../src/assets/images/cooking.jpg"
    },
    {
        id : 3,
        title : "Music",
        imgUrl : "../src/assets/images/music.jpg"
    },
    {
        id : 4,
        title : "Art & Craft",
        imgUrl : "../src/assets/images/art.jpg"
    },
    {
        id : 5,
        title : "Yoga",
        imgUrl : "../src/assets/images/yoga.jpg"
    },
    {
        id : 6,
        title : "Academic",
        imgUrl : "../src/assets/images/academics.jpg"
    },
    {
        id : 7,
        title : "Back to roots",
        imgUrl : "../src/assets/images/roots.jpg"
    },
    {
        id : 8,
        title : "Funteresting",
        imgUrl : "https://media.istockphoto.com/id/171292804/photo/painted-hands-sign-heart.jpg?s=612x612&w=0&k=20&c=m3Pqlj7lxsSMVp68corQ8sGQwtnbMX1HnD98Ja9Beu4="
    },
]

const BrowseCard = ({title,imgUrl}) => {
    return (
        <div className='h-48 pb-4 w-56 flex flex-col gap-2 border-b-2 hover:text-[#2530a0] hover:border-b-[#2530a0] hover:scale-105 cursor-pointer'>
            <img className='h-full w-full rounded-2xl shadow-xl object-cover' src={imgUrl} alt='language_category_image'/>
            <h4 className='text-center font-semibold'>{title}</h4>
        </div>
    )
}

const BrowseCategory = () => {
  return (
    <div className='my-16 lg:px-28 px-20 flex flex-col'>
        <div>
            <h1 className='text-3xl lg:text-start text-center text-[#2530a0] font-bold'>Browse by category</h1>
        </div>
        <div className='flex flex-col lg:flex-row flex-wrap gap-24 mt-12'>
            {
                BrowseCardData.map((browse)=>(
                    <BrowseCard key={browse.id} title={browse.title} imgUrl={browse.imgUrl} />
                ))
            }
        </div>
    </div>
  )
}

export default BrowseCategory