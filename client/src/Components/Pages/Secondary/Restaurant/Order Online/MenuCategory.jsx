import React from 'react'
import classnames from "classnames"

export const MenuCategory = (props) => {
    return (
        <>
            <div className={props.isActive ? "md:text-zomatoRed-400 md:border-r-2 md:bg-red-50 font-semibold border-zomatoRed-400 md:px-3 md:py-2 " : "text-gray-700 md:px-3 md:py-1"} >
                <h2  className='text-lg flex justify-between md:justify-start md:gap-2 items-center ' >
                    <div onClick={props.onClickHandler} id={props.name}>{props.name}</div>
                    <div onClick={props.onClickHandler} id={props.name}>({props.items.length})</div>
                </h2>
            </div>
        </>
    )
}

export default MenuCategory;  