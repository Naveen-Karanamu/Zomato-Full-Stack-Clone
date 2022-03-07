import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"

// components
import MainMenuComponent from './MainMenu.restaurant';
import InfoCard from '../../../../Cards/Restaurants/InfoCard';
import InfoCarousel from '../../../../Carousel/Restaurant/InfoCarousel';
import ReviewsRestaurant from './Reviews.restaurant';
import MapColumn from './MapColumn.restaurant'; import ReactStars from "react-rating-stars-component";
import { getImage } from "../../../../../Redux/Reducer/Image/image.action"
import { getSpecificRestaurant } from "../../../../../Redux/Reducer/Restaurant/restaurant.action"
// Icons
import { MdArrowRight } from "react-icons/md"
import { MdOutlineDone } from "react-icons/md"
import { IoMdArrowDropright } from "react-icons/io"
import { IoStarHalf, IoStarOutline, IoStarSharp } from "react-icons/io5"

export const RestaurantOverview = () => {
    const { id } = useParams();

    const [menuImage, setMenuImage] = useState({ images: [] })

    const reduxState = useSelector(globalStore => globalStore.restaurantReducer.selectedRestaurant.restaurant);

    const dispatch = useDispatch()

    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => images.push(location));
                setMenuImage(images)
            })
        }
    }, [])

console.log(reduxState?.mapLocation?.split(",").map((item)=>parseFloat(item)) );

    return (
        <>
            <div className='flex flex-col  md:flex-row-revers gap-2 bg-white lg::w-2/3 md:w-2/3'>

                <div className=''>
                    <h1 className='text-3xl font-normal hidden md:block '>About this place</h1>
                    <div className='flex justify-between items-center py-4'>
                        <h2 className='text-lg md:text-xl md:py-1 text-gray-800'>Menu</h2>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className='text-zomatoRed-400 flex items-center text-xs md:text-sm'>See all menus <MdArrowRight className='w-5 h-5' /></span>
                        </Link>
                    </div>
                    <div className=''>
                        <MainMenuComponent image={menuImage} name="Menu" pages="2" />
                    </div>

                    <div className='md:hidden border rounded-md py-4 px-2 mt-4'>
                        <MapColumn phone={reduxState?.contactNumber} mapLocation={reduxState?.mapLocation?.split(",").map((item) => parseFloat(item))} title={reduxState?.name} address={reduxState?.address} />
                    </div>

                    <div className='md:py-6 py-3'>
                        <h2 className='text-lg md:text-xl md:py-1 text-gray-800'>Cuisines</h2>
                        <div className='flex flex-wrap gap-2 py-1'>
                            {reduxState?.cuisine.map((data) =>
                                <span className='text-cuisinesBlue-400 border-2 border-gray-300 px-3 py-1 rounded-full text-sm  md:text-base'>{data}</span>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-lg md:text-xl md:py-1 text-gray-800'>Average Cost</h2>
                        <h3 className='text-lg text-gray-500'>₹{reduxState?.averageCost} for two people (approx)</h3>
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
                        <div className="flex flex-col gap-1 md:gap-2">
                            <div>
                                <h2 className='text-lg md:text-xl text-gray-800'>Rate your experience for</h2>
                            </div>
                            <div className="flex gap-8 md:gap-0">
                                <div className="flex items-center gap-2 md:w-full">
                                    <input type="radio" name="review" id="dining" className="bg-zomatoRed-400 w-5 h-5" />
                                    <label htmlFor="dining" className="text-sm md:text-base  text-gray-500">Dining</label>
                                </div>
                                <div className="flex items-center gap-2 md:w-full">
                                    <input type="radio" id="delivery" className="bg-zomatoRed-400 w-5 h-5" />
                                    <label htmlFor="delivery" className="text-sm md:text-base  text-gray-500">Delivery</label>
                                </div>
                            </div>
                            <div className=" ">
                                <ReactStars
                                    count={5}
                                    size={24}
                                    isHalf={true}
                                    emptyIcon={<IoStarOutline />}
                                    halfIcon={<IoStarHalf />}
                                    fullIcon={<IoStarSharp />}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <div>
                                <h1 className="text-md md:text-lg text-zomatoRed-300">Write a Review</h1>
                            </div>
                        </div>

                        <hr className='mt-4 pb-8' />
                    </div>

                    <div>
                        <ReviewsRestaurant />
                        <ReviewsRestaurant />
                        <ReviewsRestaurant />
                        <ReviewsRestaurant />
                    </div>



                </div>
            </div>
        </>
    )
}

export default RestaurantOverview;
