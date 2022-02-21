import React from 'react'
import classnames from "classnames"

export const MenuCategory = (props) => {
    return (
        <>
            <div className={classnames({"text-zomatoRed-400 border-r-3 border-zomatoRed-400":props.isActive})}>
                <h2>
                    {props.name}
                    ({props.items.length()})
                    </h2>
            </div>
        </>
    )
}

export default MenuCategory;