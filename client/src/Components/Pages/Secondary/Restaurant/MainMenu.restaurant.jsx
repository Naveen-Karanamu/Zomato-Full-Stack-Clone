import React from 'react'

export const MainMenuComponent = (props) => {
    return (
        <>
            <div>
                <div className='w-32 h-32 rounded lg:rounded-lg md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden'>
                    <img src={props.image} alt="menu" className='w-full h-full rounded-lg lg:hover:scale-110 transiton duration-700 object-cover' />
                </div>
                <h6 className=' md:text-lg'>{props.name}</h6>
                <p className='text-xs md:text-sm text-gray-600'>{props.pages} pages</p>
            </div>
        </>
    )
}

export default MainMenuComponent;