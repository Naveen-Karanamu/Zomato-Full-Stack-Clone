import React from 'react'

// Icons
import { IoClose } from "react-icons/io5"
import { BsFillTriangleFill } from "react-icons/bs"

export const CartItems = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className='text-xl text-gray-700 flex items-center justify-between'>Your Orders
                        <span className='text-black'><IoClose className='w-6 h-6' /></span>
                    </h2>
                    <hr className='mt-4' />
                </div>
                <div>
                    <div className='flex justify-between items-start py-2'>
                        <span className='flex items-center gap-3 '><BsFillTriangleFill className='border border-yellow-900 text-yellow-900 w-3 h-3' /> Chicken Dum Biriyani</span>
                        <div className='flex flex-col justify-end items-end'>
                            <p className='text-gray-600 text-sm'>₹250</p>
                            <div className='bg-zomatoRed-400 text-white px-3 rounded-lg gap-2 flex items-center text-sm py-1 '>
                                <span>-</span>
                                <span>10</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-2'/>
                </div>

            </div>

        </>
    )
}

export default CartItems;