import React from 'react'

// Icons
import { AiFillStar } from "react-icons/ai"

export const InfoCard  = (props) => {
    return (
      <>
        <div className="lg:mx-3 mx-1">
          <div>
            <img src={props.image} alt="info image" className='w-full  rounded-lg object-cover h-32 md:h-52' />
          </div>
          <h1 className="lg:text-2xl md:text-xl text-lg">{props.name}</h1>
          <div className=" pb-2 pt-1 flex justify-between">
            <div className="flex gap-2 items-baseline">
              <span className="flex items-baseline text-xs md:text-sm bg-buttonGreen-100 text-white font-semibold rounded md:rounded-lg md:px-2 lg:py-1 px-1">{props.dining} <AiFillStar className="w-2 h-2" /></span>
              <p className="border-b-2 border-gray-300  border-dotted lg:text-sm text-xs">DINING</p>
            </div>
            <div className="flex gap-2 items-baseline">
              <span className="flex items-baseline md:text-sm bg-buttonGreen-100 text-white font-semibold rounded md:rounded-lg lg:px-2 lg:py-1 px-1 text-xs">{props.delivery} <AiFillStar className="w-2 h-2" /></span>
              <p className="border-b-2 border-gray-300  border-dotted lg:text-sm text-xs">DELIVERY</p>
            </div>
          </div>

          <div className="flex flex-col ">
            <p className="md:text-base text-xs text-gray-600">{props.cuisine.join(", ")}</p>
            <p className="md:text-sm text-xs text-gray-400">{props.location.join(", ")}</p>

          </div>
        </div>
      </>
    )
  }

export default InfoCard;