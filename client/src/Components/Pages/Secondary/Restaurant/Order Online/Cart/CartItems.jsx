import React from 'react'

// Icons
import { BsFillTriangleFill } from "react-icons/bs"

export const CartItems = (props) => {
    return (
        <>
            <div>

                <div className='w-full z-10  lg:container lg:mx-auto lg:px-52'>
                    <div className='flex justify-between items-start py-2'>
                        <span className='flex items-center gap-3 text-sm md:text-lg'><BsFillTriangleFill className='border border-yellow-900 text-yellow-900 w-3 h-3 ' /> {props.name}</span>
                        <div className='flex flex-col justify-end items-end'>
                            <p className='text-gray-600 text-sm md:text-base'>₹{parseInt(props.price) * parseInt(props.quantity)}</p>
                            <div className='bg-zomatoRed-400 text-white px-3 rounded-lg gap-2 flex items-center text-sm py-1 md:text-lg md:px-5'>
                                <span>-</span>
                                <span>10</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-2' />
                </div>

            </div>

        </>
    )
}

export default CartItems;