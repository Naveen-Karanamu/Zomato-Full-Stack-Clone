import React, { useState } from 'react'

// components
import FoodsDeliveryCarausal from '../../Carousel/Delivery/Food.delivery.carousel';
import BrandsDeliveryCarausel from '../../Carousel/Delivery/Brands.delivery.carousel';
import RestaurantCard from '../../Restaurants/Delivery.restaurants';


export const Delivery = () => {

  const [restaurantList, serRastaurantList] = useState([
    {
      _id:"1234",
      photos:[
        "https://b.zmtcdn.com/data/pictures/6/2800126/11b1ca01d1e39d2d619acebdfb70352e_o2_featured_v2.jpg",
      ],
      name:"Ramchandra Restaurant",
      cuisine:["Biriyani", "Chinese", "North Indian", "Seafood", "Andhra"],
      averageCost:350,
      isPro:true,
      isOff:15,
      deliveryTime:47,
      rating:4.4
    }
  ])

  return (
    <>
      <div className='md:pt-20 pb-20'>
        <FoodsDeliveryCarausal />
        <BrandsDeliveryCarausel />
        <div className='lg:container lg:mx-auto lg:px-48'>
          <h1 className='text-xl lg:text-3xl lg:font-semibold text-gray-700  md:text-3xl pb-2 md:pb-8 px-4'>Gajuwaka Restaurants, Vizag</h1>
        </div>
        <div className='md:px-4 md:flex flex-wrap justify-around lg:container lg:mx-auto lg:px-48 '>
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