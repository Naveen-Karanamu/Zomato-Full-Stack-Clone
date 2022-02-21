import React from 'react'

// Icons
import { AiOutlinePlus, AiOutlineCompass, AiOutlineClockCircle } from "react-icons/ai"
import { MdOutlineDone } from "react-icons/md"

export const FoodComponent = () => {
    return (
        <>
            <div>
                
                <section >
                    
                    <div className='flex gap-2 items-center md:items-start md:gap-5'>
                        <div className='w-30 h-20 md:w-40 md:h-32'>
                            <img src="https://b.zmtcdn.com/data/dish_photos/75f/3130b3af489703c3d850118409b8775f.jpg" alt="food image" className='w-full h-full object-cover rounded-md md:rounded-lg' />
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <div className='flex items-center justify-between'>
                                <h5 className='text-gray-700 md:text-black md:text-xl'>Chicken Double Joint Biriyani</h5>
                                <button className='flex gap-2 items-top text-zomatoRed-400 border border-zomatoRed-400 pl-4 md:pl-6 md:pr-2  pr-1 py-1 rounded-lg text-sm md:text-base bg-red-50'>
                                    Add <AiOutlinePlus className='w-3 h-3' />
                                </button>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='uppercase text-xs  bg-orange-300 px-1 rounded text-white'>Bestseller</span>
                                <span className='uppercase text-xs  bg-blue-400 px-1 rounded text-white'>Must Try</span>
                            </div>
                            <p className='text-gray-500 text-sm md:text-base'>₹250</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FoodComponent;