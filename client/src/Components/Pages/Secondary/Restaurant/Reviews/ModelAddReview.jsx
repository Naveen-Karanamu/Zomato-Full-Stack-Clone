import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ReactStars from "react-rating-stars-component";

export default function ReviewModel({ isOpen, setIsOpen,handleRating, ...props }) {
    // const handleRating = (value) => console.log(value);
    const [liked,setLiked] = useState(["delicious taste", "best staff", "veg biriyani", "good quality", "hygine", "experience"])
    const [disliked,setDisiked] = useState(["chutney", "attitude", "value for money", "good quality", "food", "experience"])

    function closeModal() {
        setIsOpen(false)
    }


    return (
        <>

            <div className=' z-50'  >
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="md:text-2xl text-lg font-medium leading-6 text-gray-700"
                                    >
                                        Add Review
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">

                                        </p>
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
                                    </div>

                                    <div className='flex flex-col md:gap-4'>
                                        <h4 className='text-base md:text-xl text-gray-600'>What did you like? 😃</h4>
                                        <input type="text" placeholder='Search tag or select from below' className='border border-gray-300 md:p-3 p-2 w-full md:rounded-lg rounded shadow-md focus:outline-none text-gray-700' />
                                        <div className='flex gap-2 items-center pt-2 flex-wrap'>
                                        {
                                            liked.map((like)=>(
                                                <div className='md:px-4 px-2 md;py-2 py-1 rounded-full border border-gray-300 text-gray-500 text-sm md:text-base'>{like}</div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:gap-4 md:pt-4 pt-2'>
                                        <h4 className='text-base md:text-xl text-gray-600'>What did you not like? 🤔</h4>
                                        <input type="text" placeholder='Search tag or select from below' className='border border-gray-300 md:p-3 p-2 w-full md:rounded-lg rounded shadow-md focus:outline-none text-gray-700' />
                                        <div className='flex gap-2 items-center pt-2 flex-wrap'>
                                        {
                                            liked.map((like)=>(
                                                <div className='md:px-4 px-2 md;py-2 py-1 rounded-full border border-gray-300 text-gray-500 text-sm md:text-base'>{like}</div>
                                            ))
                                        }
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-ceneter px-4 py-2 text-sm font-medium text-white bg-zomatoRed-300  border border-transparent rounded-md hover:bg-zomatoRed-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zomatRed-500"
                                            onClick={closeModal}
                                        >
                                            Add Review
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    )
}
