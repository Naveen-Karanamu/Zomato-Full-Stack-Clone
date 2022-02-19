import React, {useState} from "react";
import NutritionHeroImages from "../../Images Carousel/NutritionHero.images";

import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../Arrows"

const NutritionHeroCarousel = () => {
    const [nutriImg, setNutriImag] = useState([

        "https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png",
        "https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png",
        "https://b.zmtcdn.com/web/nutrition/assets/f8da550c375c3bec2f6ba341336324561620108741.png",
        "https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png",
        "https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png"
    ])

    const settingsSm = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settingsMd = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settingsLg = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <div className="md:hidden">
                <Slider {...settingsSm}>
                    {
                        nutriImg.map((img)=>(
                            <NutritionHeroImages img={img}/>
                        ))
                    }
                </Slider>
            </div>
            <div className="hidden md:block lg:hidden">
                <Slider {...settingsMd}>
                    {
                        nutriImg.map((img)=>(
                            <NutritionHeroImages img={img}/>
                        ))
                    }
                </Slider>
            </div>
            <div className="hidden lg:block">
                <Slider {...settingsLg}>
                    {
                        nutriImg.map((img)=>(
                            <NutritionHeroImages img={img}/>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default NutritionHeroCarousel;