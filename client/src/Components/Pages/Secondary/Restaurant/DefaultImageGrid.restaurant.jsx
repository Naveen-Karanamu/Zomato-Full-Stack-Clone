import React from "react";

// Icons
import { BsCamera } from "react-icons/bs"

const DefaultImageGrid = (props) => {
    return (
        <>
            <div className=' md:hidden relative'>
                <div className='w-full h-64'>
                    <img src={props.images[0]} className='w-full h-full object-cover' />
                </div>
                <div className="bg-gray-900 text-white font-semibold flex items-center gap-2 absolute right-3 bottom-2 p-2 rounded-lg opacity-70 ">
                    <BsCamera className="w-4 h-4" />
                    <p className="text-sm">View Gallery</p>
                </div>
            </div>


            <div className='hidden md:flex gap-2 lg:container lg:mx-auto lg:px-52 z-10'>
                <div className='w-2/3 h-96 overflow-hidden'>
                    <img src={props.images[0]} className='w-full h-full object-cover transition duration-700 hover:scale-110 ' />
                </div>
                <div className="w-1/3 flex h-96 gap-2">
                    <div className="w-full h-full flex flex-col gap-2 ">
                        <div className="h-full overflow-hidden">
                            <img src={props.images[1]} className='w-full h-full object-cover transition duration-700 hover:scale-110 ' />
                        </div>
                        <div className="h-full overflow-hidden">
                            <img src={props.images[2]} className='w-full h-full object-cover transition duration-700 hover:scale-110 ' />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">
                        <div className="h-full relative">
                            <div className="h-full">
                                <img src={props.images[3]} className='w-full h-full object-cover ' />
                            </div>
                            <div className="bg-black w-full h-full z-10 absolute top-0 left-0 opacity-50" />
                            <p className="text-white text-lg text-center z-20 w-full h-full absolute right-0 top-20 ">View Gallery</p>
                        </div>
                        <div className="h-full relative">
                            <div >
                                <img src={props.images[4]} className='w-full h-full object-cover' />
                            </div>
                            <div className="bg-picGray-100 w-full h-full z-10 absolute top-0 left-0 opacity-90" />
                            <div className="flex items-center text-white  flex-col justify-center absolute right-12 top-16 z-10">
                                <div className="bg-gray-500 p-2 rounded-full">
                                    <BsCamera className="w-6 h-6" />
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

