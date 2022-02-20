import React from 'react'
import { Link, useParams } from 'react-router-dom'

import MainMenuComponent from './MainMenu.restaurant';

// Icons
import { MdArrowRight } from "react-icons/md"
import { MdOutlineDone } from "react-icons/md"


export const RestaurantOverview = () => {
    const { id } = useParams();

    return (
        <>
            <div className='flex flex-col md:flex-row relative lg:flex-row-reverse'>
                <aside className='hidden md:block w-1/3 h-20 bg-gray-300 sticky top-0'></aside>

                <div className='md:w-2/3 '>
                    <h1 className='text-3xl font-normal hidden md:block '>About this place</h1>
                    <div className='flex justify-between items-center py-4'>
                        <h2 className='text-lg md:text-xl md:py-1 text-gray-800'>Menu</h2>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className='text-zomatoRed-400 flex items-center text-xs md:text-sm'>See all menus <MdArrowRight className='w-5 h-5' /></span>
                        </Link>
                    </div>
                    <MainMenuComponent image="https://b.zmtcdn.com/data/menus/866/18795866/1ac595a49ba62605d60db3642c4bf20b.jpg" name="Menu" pages="2" />
                    <div className='md:py-6 py-3'>
                        <h2 className='text-lg md:text-xl md:py-1 text-gray-800'>Cuisines</h2>
                        <div className='flex flex-wrap gap-2 py-1'>
                            <span className='text-cuisinesBlue-400 border-2 border-gray-300 px-3 py-1 rounded-full text-sm  md:text-base'>South Indian</span>
                            <span className='text-cuisinesBlue-400 border-2 px-3 py-1 border-gray-300 rounded-full text-sm  md:text-base'>North Indian</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-lg md:text-xl md:py-1 text-gray-800'>Average Cost</h2>
                        <h3 className='text-lg text-gray-500'>₹800 for two people (approx)</h3>
                        <p className='text-sm text-gray-400'>Exclusive of applicable taxes and charges, if any</p>
                        <p className='text-xs text-gray-300 border-b-2 border-dotted' style={{ width: "fit-content" }}>How do we calculate cost for two?
                        </p>
                    </div>

                    <div className='py-4'>
                        <h3 className='text-lg text-gray-500'>Cash and Cards accepted</h3>
                        <h3 className='text-lg text-gray-500'>Digital payments accepted</h3>
                    </div>

                    <div className='flex flex-col gap-1 py-4'>
                        <h2 className='text-lg md:text-xl md:py-1 text-gray-800'>More Info</h2>
                        <div className='flex flex-col gap-2'>
                            <div className='flex'>
                                <div className='flex gap-2 items-center w-full'>
                                    <span className='border-2 border-tickGreen-100 rounded-full p-'><MdOutlineDone className='text-tickGreen-100 w-4 h-4' /></span>
                                    <p className='text-md text-gray-500'> Breakfast</p>
                                </div>
                                <div className='flex gap-2 items-center w-full'>
                                    <span className='border-2 border-tickGreen-100 rounded-full p-'><MdOutlineDone className='text-tickGreen-100 w-4 h-4' /></span>
                                    <p className='text-md text-gray-500'> Home Delivery</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex gap-2 items-center w-full'>
                                    <span className='border-2 border-tickGreen-100 rounded-full p-'><MdOutlineDone className='text-tickGreen-100 w-4 h-4' /></span>
                                    <p className='text-md text-gray-500'> Takeaway Available</p>
                                </div>
                                <div className='flex gap-2 items-center w-full'>
                                    <span className='border-2 border-tickGreen-100 rounded-full p-'><MdOutlineDone className='text-tickGreen-100 w-4 h-4' /></span>
                                    <p className='text-md text-gray-500'> Indoor Seating</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RestaurantOverview;