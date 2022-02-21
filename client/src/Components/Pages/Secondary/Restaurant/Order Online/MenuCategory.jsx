import React from 'react'
import classnames from "classnames"

export const MenuCategory = (props) => {
    return (
        <>
            <div className={props.isActive ?  "md:text-zomatoRed-400 md:border-r-4 md:bg-red-50 font-semibold border-zomatoRed-400 md:px-3 md:py-2 " : "text-gray-700 md:px-3 md:py-2"} >
                <h2 onClick={props.onClickHandler} id={props.name}  className='text-lg flex justify-between md:justify-start md:gap-2 items-center ' >
                        {props.name} (  {props.items.length} )
                </h2>
            </div>
        </>
    )
}

export default MenuCategory; 