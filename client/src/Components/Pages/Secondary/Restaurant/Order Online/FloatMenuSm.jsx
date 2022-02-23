import React, { useState } from 'react'
import MenuList from './MenuList'

// Icons
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"

export const FloatMenuSm = () => {
    const [isClicked, setIsClicked] = useState()

    const toggleMenu = () => setIsClicked((done) => !done);
    return (
        <>
            <div className='fixed bottom-2 right-4 md:hidden z-10 flex flex-col items-end rounded-lg'>
                {
                    isClicked && <div className='w-56 flex flex-col gap-3 p-3 bg-white h-72 overflow-y-scroll'>
                        <MenuList />
                        <MenuList />
                        <MenuList />
                        <MenuList />
                        <MenuList />
                        <MenuList />
                        <MenuList />
                        <MenuList />
                    </div>
                }
                <button className=' px-3 py-2 rounded-full bg-neutral-700' onClick={toggleMenu}>
                    <div className='flex items-center gap-2 text-white'>
                        {isClicked ? <AiOutlineClose /> : <FiMenu />} Menu
                    </div>
                </button>
            </div>
        </>
    )
}

export default FloatMenuSm;