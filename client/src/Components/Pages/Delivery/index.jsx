import React from 'react'

// components
import FoodsDeliveryCarausal from '../../Carousel/Food.delivery.carousel';
import BrandsDeliveryCarausel from '../../Carousel/Brands.delivery.carousel';
import RestaurantCard from '../../Restaurants/Delivery.restaurants';


export const Delivery = () => {

  return (
    <>
      <div className='md:pt-20 pb-20'>
        <FoodsDeliveryCarausal />
        <BrandsDeliveryCarausel />
        <div className='lg:container lg:mx-auto lg:px-48'>
          <h1 className='text-xl lg:text-3xl lg:font-semibold text-gray-700  md:text-3xl pb-2 md:pb-8 px-4'>Gajuwaja Restaurants, Vizag</h1>
        </div>
        <div className='md:px-4 md:flex flex-wrap justify-around lg:container lg:mx-auto lg:px-48 '>
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </>
  )
}

export default Delivery;