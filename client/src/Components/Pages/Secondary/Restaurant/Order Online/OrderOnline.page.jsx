import React from 'react'
import FloatMenuSm from './FloatMenuSm';
import MenuList from "./MenuList"

export const OrderOnline = () => {
  return (
    <>
      <div className='w-full flex'>
        <div className='hidden md:block md:w-1/4 w-full'>
          <aside>
          <MenuList />
          </aside>
        </div>
        <div className='w-full md:w-3/4 bg-black '>
          <FloatMenuSm />
        </div>
      </div>
    </>
  )
}

export default OrderOnline;