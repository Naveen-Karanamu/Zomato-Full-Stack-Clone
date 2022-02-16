import React from "react";

import {useParams} from "react-router-dom";

const Tab=()=>{
    const {tabName}= useParams();
    return (
        <>
        {tabName}
        </>
    )
}

export default Tab;