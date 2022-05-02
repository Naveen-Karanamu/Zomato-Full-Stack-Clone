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
            title: "Photos",
            route: "photos",
            isActive: currentPath.includes("photos")
        },
        {
            title: "Menu",
            route: "menu",
            isActive: currentPath.includes("menu")
        }
        
    ]
    
    console.log(tabs.isActive);
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