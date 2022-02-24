import React from 'react'

// Icons
import { HiLocationMarker } from "react-icons/hi"
import { BsCircleFill } from "react-icons/bs"
import { FaPercentage } from "react-icons/fa"
import { MdArrowRight } from "react-icons/md"


const CheckoutSummary = () => {
    return (
        <>
            <div className='px-2 relative md:mb-20'>
                <h1 className='hidden md:block text-xl text-gray-700 font-medium mb-4'>Summary</h1>
                <div className='flex items-center justify-between border-b border-gray-200 h-16 py-9 md:hidden'>
                    <div className='flex gap-2 items-center'>
                        <HiLocationMarker className='w-5 h-5 text-green-600' />
                        <p className='text-gray-500'>Delivering to: <span className='text-black font-medium'>Srinivasa Nagar ...</span></p>
                    </div>
                    <div className='text-zomatoRed-300 text-sm'>CHANGE</div>
                </div>

                <div className='p-1 mt-4'>
                    <div className='p-5 bg-gray-50 border border-gray-100 md:rounded-t-lg'>
                        <p className='tracking-widest text-sm text-gray-700 pb-2'>ORDER FROM</p>
                        <h2 className='text-lg text-gray-700'>The Biriyani Hub</h2>
                        <p className='text-sm text-gray-500'>Madhurawada, Vizag</p>
                    </div> 
                </div>

                <div className='flex items-start justify-between p-5'>
                    <div className='flex items-start gap-2'>
                        <span >
                            <BsCircleFill className='w-5 h-5 border border-green-500 p-1 text-green-700' />
                        </span>
                        <div className='text-sm'>
                            <h4 className='text-gray-600 text-base font-medium'>Chicken Dum Biriyani</h4>
                            <p className='text-gray-400'>₹350</p>
                        </div>
                    </div>
                    <div className='items-center flex flex-col justify-center gap-1'>
                        <div className='bg-zomatoRed-300 text-white flex gap-3 rounded-lg items-center px-2 text-lg'>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <p className='text-sm text-gray-600'>₹150.00</p>
                    </div>
                </div>

                <div className='flex justify-center mb-3 -mt-2'>
                    <p className='border-b-2 border-dotted text-sm text-gray-500' style={{ width: "fit-content" }}>Add special cooking instructions</p>
                </div>

                <div className='p-1'>
                    <div className='bg-gray-100 p-5 flex flex-col gap-2'>
                        <h1 className='uppercase text-gray-600 text-base'> support your rider</h1>
                        <p className='text-sm text-gray-400'>Support your delivery partner and make their day! 100% of your tip will be transferred to them.</p>
                        <span className='flex gap-2 '>
                            <button className='bg-white px-2 rounded-md text-gray-700 shadow-sm'>+20</button>
                            <button className='bg-white px-2 rounded-md text-gray-700 shadow-sm'>+30</button>
                            <button className='bg-white px-2 rounded-md text-gray-700 shadow-sm'>+50</button>
                        </span>
                    </div>
                </div>

                <div className='px-6 py-2'>
                    <h1 className='text-base font-medium'>Offers (Applicable only on App</h1>
                    <div className='flex items-center justify-between'>
                        <span className='text-gray-500 text-base flex gap-2 items-center'>
                            <FaPercentage className='text-blue-500 w-4 h-4' /> Select a promo code
                        </span>
                        <span className='text-zomatoRed-200 text-base'>View offers</span>
                    </div>
                </div>

                <div className='px-1 pt-1'>
                    <div className='flex flex-col gap-2 p-5 bg-gray-50'>
                        <div className='flex justify-between items-center'>
                            <h5 className='text-gray-700'>Subtotal</h5>
                            <p className='text-gray-600'>₹150.00</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h5 className='border-b-2 border-dashed tracking-widest text-sm border-gray-400 text-gray-500'>Taxes & charges</h5>
                            <p className='text-sm text-gray-400'>₹20.50</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h5 className='border-b-2 border-dashed tracking-widest text-sm border-gray-800 text-gray-700'>Donate ₹2 to Feeding India</h5>
                            <p className='text-sm text-gray-400'>₹2.00</p>
                        </div>

                        <hr className='mt-2' />

                        <div className='flex justify-between items-center'>
                            <h5 className='text-gray-700 text-lg font-medium'>Grand Total</h5>
                            <p className='text-gray-600'>₹172.50</p>
                        </div>
                    </div>
                </div>

                <div className='p-1 mt-4 mb-2 '>
                    <div className='px-5 py-2 bg-gray-100 rounded-lg'>
                        <h6 className='uppercase tracking-widest text-gray-800 text-sm '>ordering for</h6>
                        <h5 className='text-gray-800 text-sm font-medium'>Naveen Kumar, 9495535461</h5>
                    </div>
                </div>

                <div className='text-zomatoRed-200 p-1'>
                    Orders once placed cannot be cancelled and ar non-refundalble.
                </div>

                <div className='p-1 md:hidden'>
                    <div className='flex items-center gap-2 bg-zomatoRed-400 text-white text-lg rounded-lg justify-center w-full py-2  my-4'>
                        Select Delivery Address
                        <MdArrowRight className='w-7 h-7' />
                    </div>
                </div>
                <div className='p-1 hidden md:block relative'>
                    <div className='flex items-center gap-2 bg-zomatoRed-400 text-white text-lg rounded-lg justify-center w-72  py-2  my-4 z-10 shadow-2xl fixed bottom-4 right-74 '>
                        Place order
                        <MdArrowRight className='w-7 h-7' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutSummary;