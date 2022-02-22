import React, { useState } from 'react'

import ReviewsRestaurant from "../Overview/Reviews.restaurant"
import AddReviewCard from './AddReviewCard';

export const ReviewsPage = () => {
    const [reviews, setReviews] = useState(["", "", ""]);
    return (
        <>
            <div className='md:flex gap-4'>
                <div className='md:w-2/3'>
                    {
                        reviews.map((review) => (
                            <div className='flex flex-col gap-4'>
                                <ReviewsRestaurant {...review} />
                            </div>
                        ))
                    }
                </div>
                <AddReviewCard /> 
            </div>
        </>
    )
}

export default ReviewsPage;
