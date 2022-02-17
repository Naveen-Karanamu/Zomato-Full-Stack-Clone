import React from "react";
import Navbar from "../Components/Navbar/Location.Navbar";
import Tabs from "../Components/Tabs/Tabs.component";

const LocationLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="hidden md:block"><Tabs /></div>
            {props.children}            
            <div className="md:hidden"><Tabs /></div>
        </>)
}

export default LocationLayout;