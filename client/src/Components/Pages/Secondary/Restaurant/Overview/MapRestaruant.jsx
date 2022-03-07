import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

// Components
import MapColumn from './MapColumn.restaurant';

// Redux Actions
import { getImage } from "../../../../../Redux/Reducer/Image/image.action"
import { getSpecificRestaurant } from "../../../../../Redux/Reducer/Restaurant/restaurant.action"

export const MapRestaruant = () => {
  const reduxState = useSelector(globalStore => globalStore.restaurantReducer.selectedRestaurant.restaurant);

  const dispatch = useDispatch()




  return (
    <>
      <aside className='hidden lg:block border  shadow-lg rounded-xl p-4 ' style={{ width: "350px" }} >
        <MapColumn phone={reduxState?.contactNumber} mapLocation={reduxState?.mapLocation?.split(",").map((item) => parseFloat(item))} title={reduxState?.name} address={reduxState?.address} />
      </aside>
      <aside className='hidden md:block lg:hidden border  shadow-lg rounded-xl p-4 ' style={{ width: "250px" }} >
        <MapColumn phone={reduxState?.contactNumber} mapLocation={reduxState?.mapLocation?.split(",").map((item) => parseFloat(item))} title={reduxState?.name} address={reduxState?.address} />
      </aside>
    </>
  )
}

export default MapRestaruant;