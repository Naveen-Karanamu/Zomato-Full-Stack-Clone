import React from 'react'
import FloatMenuSm from './FloatMenuSm';
import MenuList from "./MenuList"

export const OrderOnline = () => {
  return (
    <>
      <div className='w-full md:w-1/4 '>
        <div className='hidden md:block'>
          <MenuList />
        </div>
        <div className='w-full'>
          <FloatMenuSm />
        </div>
      </div>
    </>
  )
}

export default OrderOnline;