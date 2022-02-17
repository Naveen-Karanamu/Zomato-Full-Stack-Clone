import React from "react";

import {useParams} from "react-router-dom";

// Compoents
import Delivery from "../Pages/Delivery";

const Tab=()=>{
    const {tabName}= useParams();
    return (
        <>
        {tabName==="delivery" && <Delivery />}
        </>
    )
}

export default Tab;