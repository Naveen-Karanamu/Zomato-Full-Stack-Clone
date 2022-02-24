import React from 'react'

// Icons
import { IoMdArrowDropup, IoMdArrowDropright } from "react-icons/io"
import CartItems from './CartItems';
import { IoClose } from "react-icons/io5"

const CartContainerSm = () => {
  return (
    <>
      {/* <div className='fixed w-'>
        <CartItems />
      </div> */}
      <div className='fixed bottom-0 left-0 w-full z-20 bg-white p-4 border border-gray-300 shadow-2xl flex justify-between items-center'>
        <div className='flex flex-col text-gray-600'>
          <p className='flex itms-center gap-1'>1 item <IoMdArrowDropup className='w-5 h-5' /></p>
          <p>₹250 (plus taxes)</p>
        </div>
        <div className='bg-zomatoRed-300 text-white py-2 px-14 rounded-md '>
          <button className='flex items-center gap-1 text-lg'>Continue <IoMdArrowDropright /></button>
        </div>
      </div>
    </>
  )
}

const CartContainerMd = () => {
  return (
    <>
      <div className='fixed bottom-0 left-0 w-full z-20 bg-white p-4 border border-gray-300 shadow-2xl '>
        <div className='lg:container lg:mx-auto lg:px-52 flex justify-between items-center '>
          <div className='flex items-center gap-3 '>
            <span className='border border-gray-300 rounded p-1'><IoMdArrowDropup className='w-5 h-5' /></span>
            <p className='text-lg font-medium'> Your Order (2) </p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-lg font-medium'>Subtotal: ₹150</p>
            <button className='bg-zomatoRed-300 text-white text-lg py-2 px-10 rounded-md'>Continue</button>
          </div>
        </div>
      </div>
    </>
  )
}

const CartContainer = () => {
  return (
    <>
      <div className=''>
        <div className='md:hidden'><CartContainerSm /></div>
        <div className='hidden md:flex '><CartContainerMd /></div>
        <div className='fixed w-full z-10 bg-white bottom-20 left-0 h-64 p-6'>
          <div className='w-full  lg:container lg:mx-auto lg:px-52'>
            <h2 className='text-xl text-gray-700 flex items-center justify-between'>Your Orders
              <span className='text-black'><IoClose className='w-6 h-6' /></span>
            </h2>
            <hr className='mt-4' />
          </div>
          <div className='flex flex-col overflow-y-scroll  bg-white '>
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartContainer;