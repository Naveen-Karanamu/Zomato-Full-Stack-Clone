import React from "react";

import { useParams } from "react-router-dom";

// Compoents
import Delivery from "../Pages/Primary/Delivery";
import NightlifePage from "../Pages/Primary/Dining Out";
import DiningOutPage from "../Pages/Primary/Dining Out";
import NutritionPage from "../Pages/Primary/Nutrition";

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