import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux"

// Componrnts 
import ResNavbar from '../Components/Navbar/Restaurant.navbar';
import DefaultImageGrid from '../Components/Pages/Secondary/Restaurant/Overview/DefaultImageGrid.restaurant';
import ResInfo from '../Components/Pages/Secondary/Restaurant/Overview/Info.restaurant';
import MapRestaruant from '../Components/Pages/Secondary/Restaurant/Overview/MapRestaruant';
import RestaurantOverview from '../Components/Pages/Secondary/Restaurant/Overview/Overview.Restaurant';
import TabsContainer from '../Components/Tabs/Restaurant.tabs';


// Redux actions
import { getSpecificRestaurant } from '../Redux/Reducer/Restaurant/restaurant.action';
import { getImage } from "../Redux/Reducer/Image/image.action"

export const RestaurantLayout = (props) => {
    const [restaurant, setRestaurant] = useState({
        images: [],
        name: "",
        cuisine: "",
        address: "",
    })


    const location = useLocation();
    const currentPath = location.pathname;
    const { id } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
            setRestaurant(prev => ({ ...prev, ...data.payload.restaurant }))
            dispatch(getImage(data.payload.restaurant.photos)).then(data => setRestaurant(prev => ({ ...prev, ...data.payload.images })))
        })
    }, [])

    return (
        <>
            <ResNavbar />
            <div className='relative'>
                <div className=" mt-2  md:mt-6 lg:mt-10">
                    <DefaultImageGrid images={restaurant.images} />
                </div>
                <div className={currentPath.includes("menu") || currentPath.includes("photos") ? "md:sticky top-0 bg-white w-full" : "md:sticky top-0  bg-white w-full z-10 "}>
                    <ResInfo
                        name={restaurant?.name}
                        cuisine={restaurant?.cuisine}
                        address={restaurant?.address}
                        deliveryRating={restaurant.rating || 0}
                        diningRating={restaurant.rating || 0}
                    />
                    <div className="lg:container lg:mx-auto lg:px-52 px-4 ">
                        <TabsContainer />
                        <hr className='border-gray-300 md:my-6 border' />
                    </div>
                </div>
                {
                    currentPath.includes("overview") &&
                    <div>
                        <div className=' flex-row-reverse lg:container lg:mx-auto lg:px-52 bg-transparent bg-none hidden md:flex sticky top-80 bg-white' >
                            <MapRestaruant />
                        </div>
                        <div className='lg:container lg:mx-auto lg:px-52 md:-mt-96 pt-4 '>
                            <RestaurantOverview />
                        </div>
                    </div>
                }
               

                <div className=" ">
                    {props.children}
                </div>


            </div>
        </>
    )
}

export default RestaurantLayout;