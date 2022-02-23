import React from 'react'

// components
import FoodComponent from './FoodComponent';

export const FoodList = (props) => {
    return (
        <>
            <div>
                <h2 className='text-xl  py-4 text-gray-800 md:text-black md:font-medium md:text-2xl sticky top-0 bg-white'>{props.category}</h2>
                <div className='flex flex-col gap-10'>
                    {
                        props.items.map((item) => <FoodComponent {...item}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default FoodList;

// image="https://b.zmtcdn.com/data/dish_photos/75f/3130b3af489703c3d850118409b8775f.jpg" title="Chicken Double Joint Biriyani" price="250" rating="3.5"