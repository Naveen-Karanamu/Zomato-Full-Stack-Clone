import React, { useState } from 'react'
import MenuCategory from './MenuCategory';

export const MenuList = (props) => {
    const [select, setSelect] = useState("");
    const onClickHandler = (e) => {
        if (e.target.id) {
            setSelect(e.target.id)
        }
        return;
    }
    return (
        <>
            <div className=''>
                <MenuCategory name="Recommended" items={["", ""]} onClickHandler={onClickHandler} isActive={select === "Recommended"} />
            </div>
        </>
    )
}

export default MenuList;