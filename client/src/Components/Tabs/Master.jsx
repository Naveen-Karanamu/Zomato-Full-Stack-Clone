import React from "react";

import {useParams} from "react-router-dom";

// Compoents
import Delivery from "../Pages/Delivery";
import DiningOutPage from "../Pages/Dining Out";

const Tab=()=>{
    const {tabName}= useParams();
    return (
        <>
        {tabName==="delivery" && <Delivery />}
        {tabName==="dining" && <DiningOutPage />}
        </>
    )
}

export default Tab;