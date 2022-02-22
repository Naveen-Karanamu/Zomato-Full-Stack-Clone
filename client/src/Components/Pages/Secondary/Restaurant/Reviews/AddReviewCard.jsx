import React from 'react'
import ReactStars from "react-rating-stars-component";

export const AddReviewCard = () => {
    const handleRating=()=>console.log(handleRating);
    return (
        <>
            <aside className='hidden md:block md:w-1/3 lg:w-1/3 border shadow-lg rounded-xl sticky top-0 p-4' style={{ height: "fit-content" }}>
                <h4 className='text-gray-700 text-xl pb-3'>Rate your experience for</h4>
                <div className='flex gap-8'>
                    <div className="flex items-center gap-3 ">
                        <input type="radio" name="review" id="dining" className="bg-zomatoRed-400 w-5 h-5" />
                        <label htmlFor="dining" className="text-sm md:text-base  text-gray-500">Dining</label>
                    </div> <div className="flex items-center gap-3 ">
                        <input type="radio" name="review" id="delivery" className="bg-zomatoRed-400 w-5 h-5" />
                        <label htmlFor="delivery" className="text-sm md:text-base  text-gray-500">Delivery</label>
                    </div>
                </div>
                <div>
                    <ReactStars
                        count={5}
                        onChange={handleRating}
                        size={32}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <h5 className='text-base text-zomatoRed-300'>Write a Review</h5>
            </aside>
        </>
    )
}

export default AddReviewCard;
