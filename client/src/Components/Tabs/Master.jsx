import React from "react";

import { useParams } from "react-router-dom";

// Compoents
import Delivery from "../Pages/Delivery";
import NightlifePage from "../Pages/Dining Out";
import DiningOutPage from "../Pages/Dining Out";
import NutritionPage from "../Pages/Nutrition";

const Tab = () => {
    const { tabName } = useParams();
    return (
        <>
            {tabName === "delivery" && <Delivery />}
            {tabName === "dining" && <DiningOutPage />}
            {tabName === "nightlife" && <NightlifePage />}
            {tabName === "nutrition" && <NutritionPage />}
        </>
    )
}

export default Tab;