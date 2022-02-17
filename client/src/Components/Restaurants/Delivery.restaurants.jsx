import React from 'react'

// Icons
import { AiTwotoneStar } from "react-icons/ai"

export const RestaurantCard = () => {
    return (
        <>
            <div className='px-4 pt-3 pb-3 w-full md:w-60 md:h-96 md:mb-10 lg:w-1/3 lg:h-full lg:px-6'>                
                <div className='bg-white rounded-2xl shadow-md lg:hover:shadow-lg transtion duration-300 ease-in-out'>
                    <div className='relative'>
                        <div className='w-full h-52 md:h-64'>
                            <img src="https://b.zmtcdn.com/data/pictures/4/2800154/df4d54cda041929dd85d0ac00ee63233_o2_featured_v2.jpg" alt="biri" className='w-full h-full rounded-t-2xl md:rounded-2xl object-cover' />
                        </div>
                        <div className='flex justify-between items-center relative '>
                            <span className='text-white bg-zomatoRed-400 rounded-r text-sm px-2 absolute left-0 bottom-11'>Pro extra 15% OFF</span>
                            <span className='text-white bg-blue-500 rounded-r text-sm px-2 absolute left-0 bottom-3'>10% OFF</span>
                            <span className='bg-white p-1  rounded bg-opacity-80 text-sm absolute right-3 bottom-3'>12min</span>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-lg font-normal'>All Family Restaurant</h1>
                            <div className='flex items-baseline text-white bg-green-700 rounded px-2 text-sm font-semibold gap-1'><p>4.9 </p><AiTwotoneStar className='w-3 h-3' /></div>
                        </div>
                        <div className='flex justify-between items-center text-xs text-gray-700'>
                            <p>South Indian, Hydrabadi, Dum</p>
                            <p>₹300 for one</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard