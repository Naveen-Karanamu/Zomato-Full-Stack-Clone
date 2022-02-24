import React from 'react'
import CheckoutSummary from './CheckoutSummary';

// Icons
import { AiFillCloseCircle } from "react-icons/ai"
import { BsPlusLg } from "react-icons/bs"

const CheckoutPage = () => {
    return (
        <>
            <div className='md:hidden'>
                <CheckoutSummary />
            </div>
            <div className='hidden md:flex lg:container lg:mx-auto lg:px-72 '>
                <div className='w-2/3'>
                    <div>
                        <h1 className='text-3xl font-medium py-4 text-gray-700'>Checkout</h1>
                    </div>
                    <div className='flex flex-col border border-gray-200 rounded-lg p-5 gap-1'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-medium text-gray-700'>Naveen Kumar</h1>
                            <div className='text-gray-600 text-lg'>(karanamunaveen2002@gmail.com)</div>
                        </div>
                        <p className='text-base text-gray-400'>You are securely logged in</p>
                    </div>
                    <div className='border border-gray-200 rounded-xl my-4 shadow '>
                        <div className='border-b border-gray-200'>
                            <h1 className='text-2xl font-medium text-gray-700 bg-white py-4 shadow-lg px-6 rounded-t-xl'>Delivey Address</h1>
                        </div>
                        <div className='bg-gray-100  '>
                            <div className='flex gap-2 items-start px-6 py-4'>
                                <AiFillCloseCircle className='w-7 h-7 text-red-800' />
                                <div className='flex flex-col gap-2 '>
                                    <h4 className='text-xl text-gray-800 font-medium'>Home</h4>
                                    <p className='text-gray-500'>Near CMR central, Madhuravada, Vizag</p>
                                    <button className='bg-zomatoRed-300 py-1 px-4 text-white rounded-md'>Deliver here</button>
                                </div>
                            </div>
                            <hr className='' />
                        </div>
                        <div className='bg-gray-100  '>
                            <div className='flex gap-2 items-start px-6 py-4'>
                                <AiFillCloseCircle className='w-7 h-7 text-red-800' />
                                <div className='flex flex-col gap-2 '>
                                    <h4 className='text-xl text-gray-800 font-medium'>Other</h4>
                                    <p className='text-gray-500'>Near CMR central, Madhuravada, Vizag</p>
                                    <button className='bg-zomatoRed-300 py-1 px-4 text-white rounded-md'>Deliver here</button>
                                </div>
                            </div>
                            <hr className='' />
                        </div>
                        <div className='border-b border-gray-200'>
                            <h1 className='text-xl flex gap-3 items-center font-medium text-zomatoRed-400 bg-white py-4 shadow-lg px-6 rounded-b-xl'>
                                <BsPlusLg className='w-4 h-4'/>
                                Add new address
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='w-1/3 '>
                    <CheckoutSummary />
                </div>
            </div>
        </>
    )
}

export default CheckoutPage; 