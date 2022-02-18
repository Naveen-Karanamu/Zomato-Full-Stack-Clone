import React from "react";

const NutritionHeroImages = (props) => {
    return (
        <>
            <div>
                <div className="w-full h-full">
                    <img src={props.img} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

export default NutritionHeroImages;

