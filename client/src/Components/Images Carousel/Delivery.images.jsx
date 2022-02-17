import React from 'react'

export const DeliveryImagesSm = (props) => {
    return (
        <>
            <div className='md:hidden w-20 h-full  mt-3  rounded-full '>
                <img src={props.image} alt="carousel image" className='w-full h-20 rounded-full object-cover mb-2 border shadow' />
                <h2 className='text-center text-sm text-gray-500'>{props.title}</h2>
                <h2 className='text-center text-sm text-gray-500'>{props.name}</h2>
                <h2 className='text-center text-xs text-gray-400'>{props.time}</h2>
            </div>
        </>
    )
}

const DeliveryImagesMd = (props) => {
    return (
        <>
            <div className='hidden md:block'>
                <div className='w-36 h-full mt-3 '>
                    <img src={props.image} alt="carousel image" className='w-full h-36 rounded-full object-cover mb-2 border-2 shadow-md' />
                    <h2 className='text-center md:text-2xl text-gray-900'>{props.title}</h2>
                    <h2 className='text-center md:text-lg text-gray-800'>{props.name}</h2>
                    <h2 className='text-center md:text-md text-gray-500'>{props.time}</h2>
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
