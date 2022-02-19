import React from 'react'
// Componrnts 
import ResNavbar from '../Components/Navbar/Restaurant.navbar';

export const RestaurantLayout = (props) => {


    return (
        <>
            <ResNavbar />
            {props.children}
        </>
    )
}

export default RestaurantLayout;