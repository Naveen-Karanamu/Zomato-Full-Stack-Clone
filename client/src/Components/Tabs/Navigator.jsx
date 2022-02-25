import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux"

// Compoents
import Delivery from "../Pages/Primary/Delivery";
import NightlifePage from "../Pages/Primary/Dining Out";
import DiningOutPage from "../Pages/Primary/Dining Out";
import NutritionPage from "../Pages/Primary/Nutrition";

// redux actions
import { getRestaurant } from "../../Redux/Reducer/Restaurant/restaurant.action";

const Tab = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getRestaurant()); 
    },[])

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