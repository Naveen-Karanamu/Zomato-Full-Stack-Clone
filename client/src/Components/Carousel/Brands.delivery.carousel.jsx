import React from 'react'
import DeliveryImages from '../Images Carousel/Delivery.images';

import Slider from "react-slick";

// Arrows
import { NextArrow, PrevArrow } from './Arrows';


export const BrandsDeliveryCarausel = () => {

    const images = [{
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/87f785743be6f77f341131036dd4eb12_1617898263.png?output-format=webp",
        name: "KFC",
        time:"20 min"
    }, {
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
        name: "Pizza Hut",
        time:"42 min"
    }, {
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188514.png?output-format=webp",
        name: "Burger King",
        time:"53 min"
    }, {
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550060255.png?output-format=webp",
        name: "Domino's Pizza",
        time:"34 min"
    }, {
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1632395230.png?output-format=webp",
        name: "Subway",
        time:"66 min"
    }, {
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/f27afd600ed78dd418207aa3451fa4d4_1551158664.png?output-format=webp",
        name: "Creme Shakes",
        time:"58 min"
    }, {
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/47c22bbd5043ef52b80a4e3d3409a368_1626811091.png?output-format=webp",
        name: "Behrouz Biryani",
        time:"40 min"
    }, {
        image: "https://b.zmtcdn.com/data/brand_creatives/logos/29ba9d19096d3d116909a4363082089c_1555935448.png?output-format=webp",
        name: "ibaco",
        time:"36 min"
    }
    ]

    const settingsSm = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    const settingsMd = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const settingsLg = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <div className='p-4 lg:p-0 lg:container lg:mx-auto lg:px-52 md:py-8 lg:py-10'>
                <h1 className='text-xl lg:text-3xl lg:font-semibold text-gray-700  md:text-3xl pb-2 md:pb-6'>Top Brands for you</h1>

                <div className='md:hidden block px-1'>
                    <Slider {...settingsSm}>
                        {
                            images.map((data) =>
                                <DeliveryImages {...data} />
                            )
                        }
                    </Slider>

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

export default BrandsDeliveryCarausel;