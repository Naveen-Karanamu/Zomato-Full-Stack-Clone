import React from "react";

// Icons
import { BsCamera } from "react-icons/bs"

const DefaultImageGrid = (props) => {
    return (
        <>
            <div className=' md:hidden relative'>
                <div className='w-full h-64'>
                    <img src={props.images.length && props.images[0].location} className='w-full h-full object-cover' />
                </div>
                <div className="bg-gray-900 text-white font-semibold flex items-center gap-2 absolute right-3 bottom-2 p-2 rounded-lg opacity-70 ">
                    <BsCamera className="w-4 h-4" />
                    <p className="text-sm">View Gallery</p>
                </div>
            </div>


            <div className='hidden md:flex gap-2 lg:container lg:mx-auto lg:px-52  '>
                <div className='w-2/3 h-96 overflow-hidden relative '>
                    <div className="transition duration-700 hover:scale-110 h-full">
                        <img src={props.images.length && props.images[0].location} className='w-full h-full object-cover   ' />
                        <div className="bg-black w-full h-full absolute  top-0 hidden lg:block hover:bg-transparent opacity-10" />
                    </div>
                </div>
                <div className="w-1/3 flex h-96 gap-2">
                    <div className="w-full h-full flex flex-col gap-2 ">
                        <div className="h-full overflow-hidden relative">
                            <div className="transition duration-700 hover:scale-110  h-full">
                                <img src={props.images.length >=1 && props.images[1].location}  className='w-full h-full object-cover ' />
                                <div className="bg-black w-full h-full absolute  top-0 hidden lg:block hover:bg-transparent opacity-10" />
                            </div>
                        </div>
                        <div className="h-full overflow-hidden relative">
                            <div className="h-full transition duration-700 hover:scale-110">
                                <img src={props.images.length >=2 && props.images[2].location} className='w-full h-full object-cover  ' />
                                <div className="bg-black  w-full h-full absolute  top-0 hidden lg:block hover:bg-transparent opacity-10" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">
                        <div className="h-full relative">
                            <div className="h-full">
                                <img src={props.images.length >=3 && props.images[3].location} className='w-full h-full object-cover ' />
                            </div>
                            <div className="bg-black w-full h-full  absolute top-0 left-0 opacity-50" />
                            <p className="text-white text-lg text-center w-full h-full absolute right-0 top-20 ">View Gallery</p>
                        </div>
                        <div className="h-full relative">
                            <div className="">
                                <img src={props.images.length >=4  && props.images[4].location} className='w-full h-full object-cover' />
                            </div>
                            <div className="bg-picGray-100 w-full h-full  absolute top-0 left-0 opacity-90" />
                            <div className="flex items-center text-white  flex-col justify-center absolute lg:right-12 lg:top-16 top-14 right-4 ">
                                <div className="bg-gray-500 p-2 rounded-full">
                                    <BsCamera className="w-6 h-6"/>
                                </div>
                                <p className="text-lg ">Add Photos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultImageGrid;

