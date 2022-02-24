import React from 'react'

// Icons
import { IoMdArrowDropleft } from "react-icons/io"

const CheckoutNavbar = () => {
    return (
        <>
            <div>
                <div className='md:hidden items-center flex justify-center  shadow-md bg-white h-14'>
                    <h3 className='text-2xl font-medium text-gray-700'>Checkout</h3>
                </div>
                <div className='hidden md:block' >
                    <div className='lg:container lg:mx-auto lg:px-80 border-b border-gray-200 h-20 flex items-center justify-between'>
                        <div className='text-zomatoRed-200 flex items-center w-1/3'>
                            <IoMdArrowDropleft className='w-6 h-6 text-zomatoRed-300' />
                            <p>Back to Restaurant</p>
                        </div>
                        <div className='w-1/3 flex justify-center'>
                            <div className="w-36 ">
                                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full" />
                            </div>
                        </div>
                        <div className='flex items-center gap-1 w-1/3 justify-end'>
                            <div className='rounded-full w-10 h-10'>
                                <img src="https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="user" className='w-full h-full rounded-full' />
                            </div>
                            <p className='text-lg '>Sanorita</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutNavbar;