import React from 'react'
import classnames from "classnames"
import { useLocation, Link,useParams } from "react-router-dom";

const Tab = (props) => {
const {id}= useParams();

    return (
        <>
            <Link to={`/restaurant/${id}/${props.route}`}>
                <div className='h-full relative'>
                    <h1 className={props.isActive ? 'text-zomatoRed-400 text-lg md:text-xl font-normal' : 'text-gray-600 text-lg md:text-xl font-normal'}>{props.title}</h1>
                    {/* <div className={props.isActive && `border-b-2  border-zomatoRed-400 absolute top-0 w-full h-full`} /> */}
                </div>
            </Link>
            
        </>
    )
}

export const TabsContainer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const tabs = [
        {
            title: "Overview",
            route: "overview",
            isActive: currentPath.includes("overview")
        },
        {
            title: "Order Online",
            route: "order-online",
            isActive: currentPath.includes("order-online")
        },
        {
            title: "Reviews",
            route: "reviews",
            isActive: currentPath.includes("reviews")
        },
        {
            title: "Menu",
            route: "menu",
            isActive: currentPath.includes("menu")
        },
        {
            title: "Photos",
            route: "photos",
            isActive: currentPath.includes("photos")
        },
    ]
    return (
        <>
            <div className='flex items-center overflow-x-scroll md:gap-12 lg:overflow-auto gap-7 '>
                {
                    tabs.map((tab) => (
                        <Tab {...tab} key={`3000${tab.route}`} />
                    ))
                }
            </div>
        </>
    )
}


export default TabsContainer;