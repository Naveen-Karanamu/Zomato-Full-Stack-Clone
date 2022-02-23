import React from 'react'
import FloatMenuSm from './FloatMenuSm';
import FoodComponent from './FoodComponent';
import MenuList from "./MenuList"

// Icons
import { AiOutlinePlus, AiOutlineCompass, AiOutlineClockCircle } from "react-icons/ai"
import { MdOutlineDone } from "react-icons/md"
import { RiSearchLine } from "react-icons/ri"
import FoodList from './FoodList';
import CartContainer from './Cart/CartContainer';

export const OrderOnline = () => {
  return (
    <>
      <div className='w-full flex'>

        <div className='hidden md:block md:w-1/4 w-full'>
          <aside className='flex flex-col gap-1'>
            <MenuList />
          </aside>
        </div>

        <div className='w-full md:w-3/4  md:border-l border-gray-300 h-48 md:pl-4'>
          <div className=''> 
            <FloatMenuSm />
          </div>
          <div >
            <div>
              <section className='hidden md:flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl md:text-2xl text-gray-800 md:text-black md:font-medium'>Order Online</h2>
                  <div className='flex items-center gap-3 border pl-4  py-2 border-gray-300 rounded-lg'>
                    <RiSearchLine className='w-5 h-5 text-gray-400' />
                    <input type="search" placeholder='Seach within menu' className='focus:outline-none text-lg mr-8' />
                  </div>
                </div>
                <p className='text-base gap-2 text-gray-400 flex items-center'>
                  <AiOutlineCompass className='w-5 h-5' /> Live track your order <span> | </span> <AiOutlineClockCircle className='w-5 h-5' /> 38 min
                </p>
                <div className='bg-blue-500 rounded-lg p-2 flex items-center justify-between'>
                  <span className='flex items-center gap-2'>
                    <span className='rounded-full p-1 bg-white'><MdOutlineDone className='w-2 h-2 text-blue-500 ' /></span>
                    <p className='text-white flex gap-1 '>
                      <span>Delivering to:</span>
                      <span className='font-medium'>
                        Srinivasa Nagar, Madhurawada, Visakhapatnam</span>
                    </p>
                  </span>
                  <p className='text-white px-2'>Change</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <p className='text-xs bg-blue-700 p-2 flex flex-col text-white'>
                    <span className='font-medium'>40% OFF up to ₹80</span>
                    <span>use code CRAVINGS</span>
                  </p>
                  <p className='text-xs bg-blue-700 p-2 flex flex-col text-white'>
                    <span className='font-medium'>Flat 25% OFF</span>
                    <span>use code SAVEMORE</span>
                  </p>
                </div>

              </section>
            </div>
            <div className='md:py-4'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center pt-2 md:pt-0'>
                  <input type="checkbox" className='w-4 h-4 ' /> <p>veg only</p>
                </div>
                <RiSearchLine className='text-gray-400 w-6 h-6' />
              </div>
              <div>

              </div>
              <div>
                <FoodList category="Recommended" items={[{
                  image: "https://b.zmtcdn.com/data/dish_photos/75f/3130b3af489703c3d850118409b8775f.jpg", title: "Chicken Double Joint Biriyani", price: "250", rating: "3.5"
                },]} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <CartContainer />
        </div>
      </div>
    </>
  )
}

export default OrderOnline;