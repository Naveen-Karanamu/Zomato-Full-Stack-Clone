import React from 'react'
import MenuImages from './MenuImages';

export const MenuPage = () => {
    return (
        <>
            <div  className='z-50'>
                <MenuImages name="Menu" pages="3" image={["https://b.zmtcdn.com/data/menus/258/19970258/123375912e7d97f86fac6682e030eb2a.jpg", "https://b.zmtcdn.com/data/menus/258/19970258/dff099fb094ae89dd2868a7898545c34.jpg", "https://b.zmtcdn.com/data/menus/258/19970258/dff099fb094ae89dd2868a7898545c34.jpg", "https://b.zmtcdn.com/data/menus/258/19970258/269e80fef6df6ef34ae5d0db1dd4703f.jpg"]} />
            </div>
        </>
    )
}

export default MenuPage;