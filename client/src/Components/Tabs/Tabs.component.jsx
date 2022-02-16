import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import classnames from "classnames";

// Icons
import { IoBagHandleOutline } from "react-icons/io5"
import { MdOutlineDinnerDining } from "react-icons/md"
import { GiBeerBottle } from "react-icons/gi"
import { IoNutritionOutline } from "react-icons/io5"
const TabsSm = () => {
    const [tab, setTab] = useState([{
        id: "delivery",
        title: "Delivery",
        icon: <IoBagHandleOutline className="w-8 h-8  md:w-10 md:h-10" />
    },
    {
        id: "dining",
        title: "Dining Out",
        icon: <MdOutlineDinnerDining className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
        id: "nightlife",
        title: "Nightlife",
        icon: <GiBeerBottle className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
        id: "nutrition",
        title: "Nutrition",
        icon: <IoNutritionOutline className="w-8 h-8 md:w-10 md:h-10" />
    }])

    const { tabName } = useParams();

    // useEffect(() => {
    //     if (tabName) {
    //         const updateTab = tab.map((name) => {
    //             if (name.id === tabName)
    //                 return ({ ...name, isActive: true })
    //             else
    //                 return ({ ...name })
    //         })
    //         setTab(updateTab);
    //     }
    // }, [tabName])

    return (
        <>

            <div className="fixed bottom-0 z-10 flex items-center gap-8 px-4 py-2 justify-evenly w-full border bg-white ">
                {
                    tab.map((item) =>
                        <Link to={`/location/${item.id}`}>
                            <div className={tabName === item.id ? "flex flex-col items-center  text-black  " : "flex flex-col items-center  text-gray-400"}>
                                <div className={tabName === item.id && "absolute top-0 w-24 border-t-2 border-zomatoRed-400"}></div>
                                {item.icon}
                                <p className="  text-xs  md:text-lg">{item.title}</p>
                            </div>
                        </Link>
                    )

                }

            </div>

        </>
    )
}

const TabsLg = () => {
    const [tab, setTab] = useState([{
        id: "delivery",
        title: "Delivery",
        imageDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        imageActive: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        activeColor: "bg-yellow-100"
    },
    {
        id: "dining",
        title: "Dining Out",
        imageDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
        imageActive: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        activeColor: "bg-blue-100"
    },
    {
        id: "nightlife",
        title: "Nightlife",
        imageDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        imageActive: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        activeColor: "bg-purple-100"
    },
    {
        id: "nutrition",
        title: "Nutrition",
        imageDefault: "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
        imageActive: "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
        activeColor: "bg-orange-100"
    }])

    const { tabName } = useParams();


    return (
        <>
            <div className="flex gap-12 lg:container lg:mx-auto lg:px-64 py-8 md:px-4">
                {
                    tab.map((item) =>
                        <Link to={`/location/${item.id}`}>
                            <div className={classnames("flex items-center gap-2 transition duration-700 ease-in-out",{"border-b-2 pb-4 border-zomatoRed-400":tabName===item.id})}>
                                <span className={`${tabName === item.id ? item.activeColor : "bg-gray-100"} rounded-full p-4`}>
                                    <img src={tabName === item.id ? item.imageActive : item.imageDefault} alt="Delivery image" className="w-7 h-7" />
                                </span>
                                <p className="text-lg text-gray-500 font-medium">{item.title}</p>
                            </div>
                        </Link>
                    ) 
                }

            </div>
        </>
    )
}

const Tabs = () => {
    return (
        <>
            <div className="md:hidden"><TabsSm /></div>
            <div className="hidden md:block"><TabsLg /></div>
        </>
    )
}

export default Tabs;

// <div className="flex items-center gap-2
// ">
// <span className="bg-gray-100 rounded-full p-4">
//     <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="Dining Out" className="w-8 h-8" />
// </span>
// <p className="text-xl text-gray-500 font-medium">Dining Out</p>
// </div>
// <div className="flex items-center gap-2
// ">
// <span className="bg-gray-100 rounded-full p-4">
//     <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="Nightlife image" className="w-8 h-8" />
// </span>
// <p className="text-xl text-gray-500 font-medium">Nightlife</p>
// </div>
// <div className="flex items-center gap-2
// ">
// <span className="bg-gray-100 rounded-full p-4">
//     <img src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png" alt="Nutrition image" className="w-8 h-8" />
//     {/* https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png */}
// </span>
// <p className="text-xl text-gray-500 font-medium">Nutrition</p>
// </div>