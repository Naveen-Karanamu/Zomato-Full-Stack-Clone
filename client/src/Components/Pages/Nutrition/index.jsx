import React from "react";
import NutritionCarousal from "../../Carousel/Nutrition/Nutrition.carousel";
import NutritionHeroCarousel from "../../Carousel/Nutrition/NutritionHero.carousel";

const NutritionPage = () => {
    return (
        <>
            <div>
                <div className="lg:container lg:mx-auto lg:px-48 md:pt-16 px-4">
                    <NutritionHeroCarousel />
                </div>
                <div className="lg:container lg:mx-auto lg:px-48 lg:pt-16 px-4 pt-12">
                    <NutritionCarousal />
                </div>
            </div>
        </>
    )
}

export default NutritionPage;