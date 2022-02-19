import React from "react";
import DiningCarousel from "../../../Carousel/Dining/Dining.carousel";

import { RiArrowRightSFill } from "react-icons/ri"

const NightlifePage = () => {
    return (
        <>
            <div>
                <div className="lg:container lg:mx-auto lg:px-48 md:my-8 px-3 md:bg-paleWhite-100  md:pb-10">
                    <div className="md:hidden py-6">
                        <div className="flex justify-between">
                            <h1 className="text-xl font-medium text-gray-600">Collections</h1>
                            <span className="text-zomatoRed-300 flex items-center">
                                <p className="text-xs ">All collections in Vishakapatnam</p>
                                <RiArrowRightSFill className="w-5 h-5" />
                            </span>
                        </div>
                        <span>
                            <p className="text-sm text-gray-400">Explore curated lists of top restaurants, cafes, pubs, and bars in Visakhapatnam, based on trends</p>
                        </span>
                    </div>

                    <div className=" hidden md:block lg:hidde pt-10 px-3 lg:pt-6 ">
                        <h1 className="text-3xl font-medium text-gray-700 pb-6">Collections</h1>
                        <span className="flex items-center lg:gap-2">
                            <p className="text-lg text-gray-400">Explore curated lists of top restaurants, cafes, pubs, and bars in Visakhapatnam, based on trends</p>
                            <span className="text-zomatoRed-300 flex items-center ">
                                <p className="text-md ">All collections in Vishakapatnam</p>
                                <RiArrowRightSFill className="w-5 h-5" />
                            </span>
                        </span>
                    </div>
                    <div className="md:pt-4">
                        <DiningCarousel />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NightlifePage;