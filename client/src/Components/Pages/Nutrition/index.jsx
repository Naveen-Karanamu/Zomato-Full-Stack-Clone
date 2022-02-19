import React from "react";
import NutritionCard from "../../Cards/Nutrition/Nutrition.card";
import NutritionCarousal from "../../Carousel/Nutrition/Nutrition.carousel";
import NutritionHeroCarousel from "../../Carousel/Nutrition/NutritionHero.carousel";

const NutritionPage = () => {
    return (
        <>
            <div>
                <div className="lg:container lg:mx-auto lg:px-52 md:pt-16 px-4">
                    <NutritionHeroCarousel />
                </div>
                <div className="lg:container lg:mx-auto lg:px-48 lg:pt-16 px-4 pt-12">
                    <NutritionCarousal />
                </div>

                <div className="lg:container lg:mx-auto lg:px-52 md:pt-6 mt-6 px-4">
                    <h1 className="md:text-3xl text-xl font-medium text-gray-600">Bestsellers</h1>
                </div>
                <div className="lg:container lg:mx-auto lg:px-52  px-6 md:py-0 md:pt-6 md:px-4 gap-6 md:gap-2 lg:gap-5 justify-between flex flex-col md:flex md:flex-row flex-wrap pt-4">
                    <NutritionCard bg="bg-red-100" img="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp" />
                </div>
            </div>
        </>
    )
}

export default NutritionPage;