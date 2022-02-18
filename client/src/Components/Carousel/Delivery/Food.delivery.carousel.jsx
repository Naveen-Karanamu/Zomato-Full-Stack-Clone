import React from 'react'
import DeliveryImages from '../../Images Carousel/Delivery.images';

import Slider from "react-slick";

// Arrows
import { NextArrow, PrevArrow } from '../Arrows';


export const FoodsDeliveryCarausel = () => {

    const images = [{
        image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        title: "Biryani"
    }, {
        image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        title: "Chicken"
    }, {
        image: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        title: "Fried Rice"
    }, {
        image: "https://b.zmtcdn.com/data/homepage_dish_data/4/7cf2db5ec261a0fa27a502d3196a6f60.png",
        title: "Pizza"
    }, {
        image: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
        title: "Paneer"
    }, {
        image: "https://b.zmtcdn.com/data/homepage_dish_data/2/78261817faa51e9456cfab592c189a62.png",
        title: "Cake"
    }, {
        image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        title: "Burger"
    }, {
        image: "https://b.zmtcdn.com/data/o2_assets/2e6d86cd3b90906845c02b3eabf7bc141632716603.png",
        title: "Manchurian"
    }
    // , {
    //     image: "https://b.zmtcdn.com/data/homepage_dish_data/4/9d20b49f8cf0c79ce7b44b2ef69f51df.png?output-format=webp",
    //     title: "Dosa"
    // }, {
    //     image: "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
    //     title: "Fries"
    // }, {
    //     image: "https://b.zmtcdn.com/data/homepage_dish_data/2/d541098e14dd80d1a17a08594aa43460.png",
    //     title: "Noodles"
    // }, {
    //     image: "https://b.zmtcdn.com/data/homepage_dish_data/4/d9452952b432b35d1019ada01cedce7f.png",
    //     title: "Chaat"
    // }
]

    const settingsMd = {
        dots: false,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />
    };

    const settingsLg = {
        dots: false,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />
    };

    return (
        <>
            <div className='p-4 lg:p-0 lg:container lg:mx-auto lg:px-52 bg-paleWhite-100 md:py-10 lg:py-10'>
                <h1 className='text-xl lg:text-3xl lg:font-semibold text-gray-700 md:text-3xl pb-2 md:pb-6'>Inspiration for your first order</h1>

                <div className='md:hidden flex flex-wrap justify-around gap-3 md:gap-2'>
                    {
                        images.map((data) =>
                            <DeliveryImages {...data} />
                        )
                    }

                </div>

                <div className='hidden md:block lg:hidden px-4'>
                    <Slider {...settingsMd}>
                        {
                            images.map((data) =>
                                <DeliveryImages {...data} />
                            )
                        }                
                    </Slider>
                </div>

                <div className='hidden lg:block '>
                    <Slider {...settingsLg}>
                        {
                            images.map((data) =>
                                <DeliveryImages {...data} />
                            )
                        }                
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FoodsDeliveryCarausel;