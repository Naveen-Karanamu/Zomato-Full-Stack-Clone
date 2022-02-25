import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

// components
import FoodsDeliveryCarausal from '../../../Carousel/Delivery/Food.delivery.carousel';
import BrandsDeliveryCarausel from '../../../Carousel/Delivery/Brands.delivery.carousel';
import RestaurantCard from '../../../Cards/Restaurants/Delivery.restaurants';


export const Delivery = () => {

  const [restaurantList, serRastaurantList] = useState([])

  const reduxState=useSelector((globalStore)=>globalStore.restaurantReducer.restaurants)

  useEffect(()=>{
    reduxState.restaurants && serRastaurantList(reduxState.restaurants)
  },[reduxState.restaurants])
  return (
    <>
      <div className='md:pt-20 pb-20'>
        <FoodsDeliveryCarausal />
        <BrandsDeliveryCarausel />
        <div className='lg:container lg:mx-auto lg:px-48'>
          <h1 className='text-xl lg:text-3xl lg:font-semibold text-gray-700  md:text-3xl pb-2 md:pb-8 px-4'>Gajuwaka Restaurants, Vizag</h1>
        </div>
        <div className='md:px-4 md:flex flex-wrap justify-between  lg:container lg:mx-auto lg:px-48 '>
          {
            restaurantList.map((list) => (
              <RestaurantCard {...list} key={restaurantList._id}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Delivery;