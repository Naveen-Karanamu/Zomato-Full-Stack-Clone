import React from "react";
import Navbar from "../Components/Navbar/Location.Navbar";

const LocationLayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>)
}

export default LocationLayout;