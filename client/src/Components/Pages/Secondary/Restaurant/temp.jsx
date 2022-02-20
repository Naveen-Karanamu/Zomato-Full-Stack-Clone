import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Temp =()=>{
const {id} = useParams();
const loc = useLocation();

    return (
        <>
          <div>
          {/* {id} */}
          {loc.pathname}
          </div>
        </>
    )
}

export default Temp;