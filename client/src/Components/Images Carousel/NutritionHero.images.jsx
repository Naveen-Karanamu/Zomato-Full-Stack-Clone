import React from "react";

const NutritionHeroImages = (props) => {
    return (
        <>
            <div>
                <div className="w-full md:h-full  h-48">
                    <img src={props.img} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

export default NutritionHeroImages;

