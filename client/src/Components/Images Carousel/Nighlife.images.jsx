import React from "react";

import {RiArrowRightSFill} from "react-icons/ri"

const NightlifeImageCard = () => {
    return (
        <>
            <div className="lg:h-80 h-64  relative mx-1 md:mx-2 md:h-72 lg:mx-3" >
                <div className="w-full h-full rounded-lg" style={{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",zIndex:"20"}} ></div>
                <div className="w-full h-full absolute top-0 -z-30">
                    <img src="https://b.zmtcdn.com/data/collections/dc57ef2c98b94359031a1b4313da2958_1582256430.jpg"
                        alt="carousel image" className="w-full h-full  object-cover rounded-lg  " />
                </div>
                <div className="absolute z-10 bottom-2 left-2 lg:left-4 text-white">
                    <h3 className="text-lg lg:text-xl">Veggie Friendly</h3>
                    <h6 className="flex items-center gap-2 lg:text-md text-sm"> 
                        <span>6 Places</span>
                        <RiArrowRightSFill className="text-white lg:w-5 lg:h-5 w-4 h-4"/>
                    </h6>
                </div>
            </div>
        </>
    )
}

export default NightlifeImageCard;