import React from 'react'
import Slider from 'react-slick';

// components
import InfoCard from '../../Cards/Restaurants/InfoCard';
import { NextArrow, PrevArrow } from '../Arrows';


export const InfoCarousel = () => {
    const settingsSm = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    const settingsMd = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const settingsLg = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const info = [
        {
            name: "Sahaja- Hotel",
            image: "https://b.zmtcdn.com/data/pictures/7/2800887/8da507185bd3c31a5cbf5e849ce3e615_featured_v2.jpg",
            dining: "3.6",
            delivery: "4.0",
            cuisine: ["Biryani", "Chinese", "North Indian"],
            location: ["Gajuwaka", "Vizag"]
        },
        {
            name: "Sahaja- Hotel",
            image: "https://b.zmtcdn.com/data/pictures/7/2800887/8da507185bd3c31a5cbf5e849ce3e615_featured_v2.jpg",
            dining: "3.6",
            delivery: "4.0",
            cuisine: ["Biryani", "Chinese", "North Indian"],
            location: ["Gajuwaka", "Vizag"]
        },
        {
            name: "Sahaja- Hotel",
            image: "https://b.zmtcdn.com/data/pictures/7/2800887/8da507185bd3c31a5cbf5e849ce3e615_featured_v2.jpg",
            dining: "3.6",
            delivery: "4.0",
            cuisine: ["Biryani", "Chinese", "North Indian"],
            location: ["Gajuwaka", "Vizag"]
        },
        {
            name: "Sahaja- Hotel",
            image: "https://b.zmtcdn.com/data/pictures/7/2800887/8da507185bd3c31a5cbf5e849ce3e615_featured_v2.jpg",
            dining: "3.6",
            delivery: "4.0",
            cuisine: ["Biryani", "Chinese", "North Indian"],
            location: ["Gajuwaka", "Vizag"]
        },
        {
            name: "Sahaja- Hotel",
            image: "https://b.zmtcdn.com/data/pictures/7/2800887/8da507185bd3c31a5cbf5e849ce3e615_featured_v2.jpg",
            dining: "3.6",
            delivery: "4.0",
            cuisine: ["Biryani", "Chinese", "North Indian"],
            location: ["Gajuwaka", "Vizag"]
        },
        {
            name: "Sahaja- Hotel",
            image: "https://b.zmtcdn.com/data/pictures/7/2800887/8da507185bd3c31a5cbf5e849ce3e615_featured_v2.jpg",
            dining: "3.6",
            delivery: "4.0",
            cuisine: ["Biryani", "Chinese", "North Indian"],
            location: ["Gajuwaka", "Vizag"]
        },
        {
            name: "Sahaja- Hotel",
            image: "https://b.zmtcdn.com/data/pictures/7/2800887/8da507185bd3c31a5cbf5e849ce3e615_featured_v2.jpg",
            dining: "3.6",
            delivery: "4.0",
            cuisine: ["Biryani", "Chinese", "North Indian"],
            location: ["Gajuwaka", "Vizag"]
        },
    ]

    return (
        <>
            <div className='md:hidden'>
                <Slider {...settingsSm}>
                    {
                        info.map((data) => (
                            <InfoCard {...data} />
                        ))
                    }
                </Slider>
            </div>
            <div className='hidden md:block lg:hidden'>
                <Slider {...settingsMd}>
                    {
                        info.map((data) => (
                            <InfoCard {...data} />
                        ))
                    }
                </Slider>
            </div>
            <div className='hidden lg:block'>
                <Slider {...settingsLg}>
                    {
                        info.map((data) => (
                            <InfoCard {...data} />
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default InfoCarousel;
