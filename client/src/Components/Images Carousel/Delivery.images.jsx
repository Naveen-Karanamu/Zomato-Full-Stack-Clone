import React from 'react'

export const DeliveryImagesSm = (props) => {
    return (
        <>
            <div className='md:hidden w-20 h-20 bg-white mt-3 mb-10 rounded-full'>
                <img src={props.image} alt="carousel image" className='w-full h-full rounded-full object-cover mb-2 border shadow' />
                <h2 className='text-center text-sm text-gray-500'>{props.title}</h2>
            </div>
        </>
    )
}

const DeliveryImagesMd = (props) => {
    return (
        <>
            <div className='hidden md:block'>
                <div className='w-36 h-36 bg-white mt-3 mb-10 rounded-full shadow-lg'>
                    <img src={props.image} alt="carousel image" className='w-full h-full rounded-full object-cover mb-2 border-2' />
                    <h2 className='text-center text-sm text-gray-500'>{props.title}</h2>
                </div>
            </div>
        </>
    )
}

const DeliveryImages = (props) => {
    return (
        <>
            <DeliveryImagesSm {...props}/>
            <DeliveryImagesMd {...props}/>
        </>
    )
}


export default DeliveryImages;
