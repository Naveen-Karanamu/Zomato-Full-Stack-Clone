import React from "react";
import DiningImageCard from "../../Images Carousel/Dining.images";

import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../Arrows";

const DiningCarousel = () => {
    const settingsSm = {        
        arrows:false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    const settingsMd = {        
        arrows:false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const settingsLg = {        
        arrows:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />
    };

    return (
        <>
            <div className="md:hidden w-full h-full">
                <Slider {...settingsSm}>
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                </Slider>
            </div>
            <div className=" hidden md:block lg:hidden w-full h-full">
                <Slider {...settingsMd}>
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                </Slider>
            </div>
            <div className="hidden lg:block w-full h-full">
                <Slider {...settingsLg}>
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                    <DiningImageCard />
                </Slider>
            </div>
        </>
    )

}

export default DiningCarousel;