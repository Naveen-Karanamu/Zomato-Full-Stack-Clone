import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import { getImage } from '../../../Redux/Reducer/Image/image.action';

// Icons
import { AiTwotoneStar } from "react-icons/ai"

const RestaurantCard = (props) => {
    const [image, setImage] = useState({
        images: [
            {
                location: "",
            },
        ]
    });
    const dispatch = useDispatch();

    useEffect(() => {
        props.photos && dispatch(getImage(props.photos)).then((data) => setImage(data.payload.image))
    }, [props.photos])
    return (
            <Link to={`/restaurant/${props._id}/order-online`} className='w-full'>
                <div className='px-4 pt-3 pb-3 w-full md:w-60 md:h-96 md:mb-10 lg:w-1/3 lg:h-full lg:px-4'>
                    <div className='bg-white rounded-2xl shadow-md lg:hover:shadow-lg transtion duration-300 ease-in-out'>
                        <div className='relative'>
                            <div className='w-full h-52 md:h-64 lg:p-2'>
                                <img src={image.images.length && image.images[0].location} alt="biri" className='w-full h-full rounded-t-2xl md:rounded-2xl object-cover' />
                            </div>
                            <div className='flex justify-between items-center relative'>
                                {props.isPro && (<span className='text-white bg-zomatoRed-400 rounded-r text-sm px-2 absolute lg:left-2 bottom-11 lg:bottom-14 '>Pro extra 15% OFF</span>)}
                                {props.isOff && (<span className='text-white bg-blue-500 rounded-r text-sm px-2 absolute lg:left-2 bottom-3 lg:bottom-6'>{props.isOff}% OFF</span>)}
                                {props.deliveryTime && (<span className='bg-white p-1  rounded bg-opacity-80 text-sm absolute right-3 lg:right-6 bottom-3 lg:bottom-6'>{props.deliveryTime} min</span>)}
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-lg font-normal'>{props.name}</h1>
                                <div className='flex items-baseline text-white bg-green-700 rounded px-2 text-sm font-semibold gap-1'><p>{props.rating} </p><AiTwotoneStar className='w-3 h-3' /></div>
                            </div>
                            <div className='flex justify-between items-center text-xs text-gray-700'>
                                <p>{props.cuisine.join(", ")}</p>
                                <p>₹{props.averageCost} for one</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    )
}

export default RestaurantCard;