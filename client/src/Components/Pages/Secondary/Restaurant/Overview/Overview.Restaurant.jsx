import React from 'react'
import { Link, useParams } from 'react-router-dom'



import MainMenuComponent from './MainMenu.restaurant';
import InfoCard from '../../../../Cards/Restaurants/InfoCard';
import InfoCarousel from '../../../../Carousel/Restaurant/InfoCarousel';
import ReviewsRestaurant from './Reviews.restaurant';

// Icons
import { MdArrowRight } from "react-icons/md"
import { MdOutlineDone } from "react-icons/md"
import { IoMdArrowDropright } from "react-icons/io"
import MapColumn from './MapColumn.restaurant';


export const RestaurantOverview = () => {
    const { id } = useParams();

    return (
        <>
            <div className='flex flex-col relative md:flex-row-reverse gap-4'>
                <aside className='hidden md:block md:w-1/3 lg:w-1/3 border shadow-lg rounded-xl sticky top-0 p-4' style={{ height: "fit-content" }}>
                    <MapColumn phone="+919295000521" mapLocation={[17.688229266181448, 83.20616323443606]} title="Helapuri Restaurant" address="8-8-36, Main Road, Old Gajuwaka, Vizag" />
                </aside>

                <div className='lg::w-2/3 md:w-2/3'>
                    <h1 className='text-3xl font-normal hidden md:block '>About this place</h1>
                    <div className='flex justify-between items-center py-4'>
                        <h2 className='text-lg md:text-xl md:py-1 text-gray-800'>Menu</h2>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className='text-zomatoRed-400 flex items-center text-xs md:text-sm'>See all menus <MdArrowRight className='w-5 h-5' /></span>
                        </Link>
                    </div>
                    <MainMenuComponent image="https://b.zmtcdn.com/data/menus/866/18795866/1ac595a49ba62605d60db3642c4bf20b.jpg" name="Menu" pages="2" />

                    <div className='md:hidden border rounded-md py-4 px-2 mt-4'>
                        <MapColumn phone="+919295000521" mapLocation={[17.688229266181448, 83.20616323443606]} title="Helapuri Restaurant" address="8-8-36, Main Road, Old Gajuwaka, Vizag" />
                    </div>

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

                    <div>
                        <h2 className='text-lg md:text-xl md:py-4 py-2 text-gray-800'>Similar Restaurants</h2>
                        <InfoCarousel />
                    </div>
                    <div className='hidden md:flex justify-between items-center bg-gray-100 p-4 rounded-md mt-10'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-2xl font-semibold text-gray-700'>Are you a food blogger?</h1>
                            <span className='text-zomatoRed-400 flex items-center gap-1 text-sm'>Add a Zomato spoonback to your blog. <IoMdArrowDropright /></span>
                        </div>
                        <button className='flex gap-1 items-center text-white bg-zomatoRed-300 rounded-lg px-3 py-2'>Get Restaurant Widge <IoMdArrowDropright /></button>
                    </div>
                    <hr className='mt-3 pb-6' />

                    <div>
                        <ReviewsRestaurant />
                    </div>



                </div>
            </div>
        </>
    )
}

export default RestaurantOverview;
