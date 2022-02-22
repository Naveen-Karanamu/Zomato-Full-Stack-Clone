import React,{useState} from 'react'
import ReactStars from "react-rating-stars-component";

// Componrnt
import ReviewModel from './ModelAddReview';

export const AddReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModel=()=>setIsOpen(true)
    const handleRating = (value) => console.log(value);
    return (
        <>
        <ReviewModel isOpen={isOpen} setIsOpen={setIsOpen}/>
            <aside className=' md:block md:w-1/3 lg:w-1/3  md:border md:shadow-md rounded-xl sticky top-0 md:p-4 pt-4 ' style={{ height: "fit-content" }}>
                <h4 className='text-gray-700 text-lg md:text-xl md:pb-3 pb-1'>Rate your experience for</h4>
                <div className='flex gap-8'>
                    <div className="flex items-center gap-3 ">
                        <input type="radio" name="review" id="dining" className="bg-zomatoRed-400 w-5 h-5" />
                        <label htmlFor="dining" className="text-sm md:text-base  text-gray-500">Dining</label>
                    </div> <div className="flex items-center gap-3 ">
                        <input type="radio" name="review" id="delivery" className="bg-zomatoRed-400 w-5 h-5" />
                        <label htmlFor="delivery" className="text-sm md:text-base  text-gray-500">Delivery</label>
                    </div>
                </div>
                <div className='md:hidden'>
                    <ReactStars
                        count={5}
                        onChange={handleRating}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <div className='hidden md:block'>
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
                <button className='text-sm md:text-base text-zomatoRed-300' onClick={openModel}>Write a Review</button>
            </aside>
        </>
    )
}

export default AddReviewCard;
