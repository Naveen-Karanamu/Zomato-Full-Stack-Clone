import React from "react";
import InfoButton from "./infoButton.restaurant";

// Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { BsInfoCircle, BsBookmarkPlus } from "react-icons/bs"
import { MdOutlineDirections } from "react-icons/md"
import { RiShareForwardLine } from "react-icons/ri"

const ResInfoSm = () => {
    return (
        <>
            <div className="px-3">
                <div className=" py-4 flex gap-10">
                    <div className="flex gap-2 items-baseline">
                        <span className="flex items-baseline text-sm bg-buttonGreen-100 text-white font-semibold rounded-lg px-2 py-1">4.2 <AiFillStar className="w-2 h-2" /></span>
                        <p className="border-b-2 border-gray-300  border-dotted text-sm">858 DINING</p>
                    </div>
                    <div className="flex gap-2 items-baseline">
                        <span className="flex items-baseline text-sm bg-buttonGreen-100 text-white font-semibold rounded-lg px-2 py-1">3.9 <AiFillStar className="w-2 h-2" /></span>
                        <p className="border-b-2 border-gray-300  border-dotted text-sm">47.5K DELIVERY</p>
                    </div>
                </div>

                <div className="flex flex-col  gap-1">
                    <h1 className="text-2xl">Helapuri Restaurant</h1>
                    <p className="text-md text-gray-600">Biryani, Chinese, North Indian, Seafood, Andhra</p>
                    <p className="text-sm text-gray-400">Gajuwaka, Vizag</p>
                    <p className="flex gap-2">
                        <span className="text-sm text-zomatoRed-200">Open now - </span>
                        <span className="text-sm text-gray-400 flex items-center gap-2">11am - 10pm (Today) <BsInfoCircle className="w-3 h-3" /></span>
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 py-4">
                    <InfoButton isActive>
                        <AiOutlineStar className=" text-white" /> Add Review
                    </InfoButton>
                    <InfoButton >
                        <MdOutlineDirections className="w-5 h-5 text-zomatoRed-300" /> Direction
                    </InfoButton>
                    <InfoButton >
                        <BsBookmarkPlus className=" text-zomatoRed-300" /> Bookmark
                    </InfoButton>
                    <InfoButton >
                        <RiShareForwardLine className="w-6 h-6 text-zomatoRed-300" /> Share
                    </InfoButton>
                </div>
            </div>
        </>
    )
}

const RestInfoMd = () => {
    return (
        <>
            <div className="px-3 lg:container lg:mx-auto lg:px-52 lg:py-2 ">
                <div className="flex flex-col  gap-1">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl">Helapuri Restaurant</h1>
                        <div className=" pt-3 pb-1 flex gap-10">
                            <div className="flex gap-2 items-center">
                                <span className="flex items-baseline text-md bg-buttonGreen-100 text-white font-semibold rounded-lg px-2 py-1 gap-1">4.2 <AiFillStar className="w-3 h-3" /></span>
                                <p className="border-b-2 border-gray-300  border-dotted text-md flex flex-col items-start">858 <span className="text-sm">Dining Reviews</span></p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="flex items-baseline text-md bg-buttonGreen-100 text-white font-semibold rounded-lg px-2 py-1 gap-1">3.9 <AiFillStar className="w-3 h-3" /></span>
                                <p className="border-b-2 border-gray-300 border-dotted text-md flex flex-col">47.5K <span className="text-sm">Delivery Reviews</span></p>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg text-gray-600">Biryani, Chinese, North Indian, Seafood, Andhra</p>
                    <p className="text-md text-gray-400">Gajuwaka, Vizag</p>
                    <p className="flex gap-2">
                        <span className="text-md text-zomatoRed-200">Open now - </span>
                        <span className="text-md text-gray-400 flex items-center gap-2">11am - 10pm (Today) <BsInfoCircle className="w-4 h-4" /></span>
                    </p>
                </div>
                <div className="flex flex-wrap gap-3 py-4">
                    <InfoButton isActive>
                        <AiOutlineStar className=" text-white" /> Add Review
                    </InfoButton>
                    <InfoButton >
                        <MdOutlineDirections className="w-5 h-5 text-zomatoRed-300" /> Direction
                    </InfoButton>
                    <InfoButton >
                        <BsBookmarkPlus className=" text-zomatoRed-300" /> Bookmark
                    </InfoButton>
                    <InfoButton >
                        <RiShareForwardLine className="w-6 h-6 text-zomatoRed-300" /> Share
                    </InfoButton>
                </div>

            </div>
        </>
    )
}

const ResInfo = () => {
    return (
        <>
            <div className="md:hidden"><ResInfoSm /></div>
            <div className="hidden md:block"><RestInfoMd /></div>
        </>
    )
}

export default ResInfo;