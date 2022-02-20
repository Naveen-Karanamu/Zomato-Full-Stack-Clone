import React from 'react'
// Componrnts 
import ResNavbar from '../Components/Navbar/Restaurant.navbar';
import DefaultImageGrid from '../Components/Pages/Secondary/Restaurant/DefaultImageGrid.restaurant';
import ResInfo from '../Components/Pages/Secondary/Restaurant/Info.restaurant';
import RestaurantOverview from '../Components/Pages/Secondary/Restaurant/Overview.Restaurant';
import TabsContainer from '../Components/Tabs/Restaurant.tabs';


export const RestaurantLayout = (props) => {


    return (
        <>
            <ResNavbar />
            <div cl>
                <div className=" mt-2  md:mt-6 lg:mt-10">
                    <DefaultImageGrid images={["https://b.zmtcdn.com/data/pictures/5/18755735/8c0f46f1ee969f80d4fe7fac55ebacca.jpg",
                        "https://b.zmtcdn.com/data/pictures/5/18755735/7b27777a164afd96cc4ac3c2b29fcf5c.jpg", "https://b.zmtcdn.com/data/reviews_photos/f3b/78b5c5862bce8e3417f220ae879abf3b_1546846466.jpg", "https://b.zmtcdn.com/data/reviews_photos/72f/eefd02b116d04289e1a0ff9f01a1572f_1549819563.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SLfQJRUPbqiIlh3UP6BTVT2u2fJEcV28iA&usqp=CAU"]} />
                </div>
                <div>
                    <ResInfo />
                </div>

                <div className="lg:container lg:mx-auto lg:px-52 px-4 md:py-4">
                    <TabsContainer />
                    <hr className='border-gray-300 md:my-6 border'/>
                    {props.children}
                </div>

                
            </div>
        </>
    )
}

export default RestaurantLayout;