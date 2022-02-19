import React from 'react'
// Componrnts 
import ResNavbar from '../Components/Navbar/Restaurant.navbar';
import DefaultImageGrid from '../Components/Pages/Secondary/Restaurant/DefaultImageGrid.restaurant';

export const RestaurantLayout = (props) => {


    return (
        <>
            <ResNavbar />            
            {props.children}
        </>
    )
}

export default RestaurantLayout;