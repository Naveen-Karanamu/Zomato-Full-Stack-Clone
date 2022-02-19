import React from "react";

// Icons
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

// Libraries
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
    return (
        <>
            <div className="bg-white md:h-full shadow-md rounded-2xl">
                <div className={`md:hidden  w-full h-48 flex items-center justify-center ${props.bg} rounded-t-2xl`}>
                    <img src={props.img} alt="card" className="lg:w-48 h-full lg:rounded-t-2xl" />
                </div>
                <div className={`hidden md:flex lg:hidden lg:w-96 w-64 h-52 items-center justify-center ${props.bg} md:rounded-t-2xl`}>
                    <img src={props.img} alt="card" className="lg:w-48 h-full md:rounded-t-2xl" />
                </div>
                <div className={`hidden lg:flex lg:w-96 w-20 items-center justify-center ${props.bg} md:rounded-t-2xl`} style={{ width: "22rem" }}>
                    <img src={props.img} alt="card" className="lg:w-48 h-full md:rounded-t-2xl" />
                </div>
                <div className="p-3 ">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQluQhdK0vYEXz63KCSkUJyDv05GITvt4Dw&usqp=CAU" className="w-full h-full" />
                        </div>
                        <div className="">
                            <ReactStars
                                count={5}
                                size={18}
                                value={2.5}
                                isHalf={true}
                                emptyIcon={<BsStar />}
                                halfIcon={<BsStarHalf />}
                                fullIcon={<BsStarFill />}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <div>
                            <h1 className="text-md md:text-lg font-bold">Title</h1>
                            <p className="md:text-md text-sm text-gray-600">description</p>
                        </div>
                        <hr />
                        <div className="md:text-md text-sm">
                            <s className="text-gray-600">₹650</s> <strong>₹320</strong>
                            <p className="text-gray-600">monthly pack - 30 capsules</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NutritionCard;
