import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

// Icons
import { FcGoogle } from "react-icons/fc"

export default function SignUp({ isOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false)
    }


    return (
        <>


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
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                            <Dialog.Title
                                    as="h3"
                                    className="text-3xl font-medium leading-6 text-gray-700 pb-10"
                                >
                                    Sign Up
                                </Dialog.Title>
                                <div className="mt-2 flex flex-col gap-4">

                                    <form className='flex flex-col gap-5'>
                                        <div className="flex  items-center gap-3 ">
                                            <input type="text" name="review" placeholder='Full Name' id="name" className=" bg-white border border-gray-400 py-2 w-full  rounded-lg md:text-lg px-6" />

                                        </div>
                                        <div className="flex items-center gap-3  ">
                                            <input type="email" name="review" placeholder='Email' id="email" className="bg-white border border-gray-400 py-2 w-full  rounded-lg md:text-lg px-6" />

                                        </div>

                                        <div className='flex items-top gap-2'>
                                            <input type="checkbox" id="terms" className='md:w-5 md:h-5'/>
                                            <lable htmlFor="terms" className="text-gray-500 text-xs ">I agree to Zomato's <span className='text-zomatoRed-300 text-xs'>Terms of service, privacy policy </span>
                                            <span > and </span>
                                            <span className='text-zomatoRed-300 text-xs '>Content policies</span>
                                            </lable>
                                        </div>

                                        <div className='flex items-center justify-center'>
                                            <div className=' bg-zomatoRed-300 text-white py-2 rounded-lg  w-full text-center hover:cursor-pointer'>
                                                Create Account
                                            </div>
                                        </div>
                                    </form>
                                    <div className='flex items-center gap-2 overflow-x-hidden '>
                                        <span className='hidden md:block text-gray-300 -mt-2 md:w-full'>___________________________</span>
                                        <span className='md:hidden text-gray-300 -mt-2 md:w-full'>_____________________</span>
                                        <span className='text-lg text-gray-400'>or</span>
                                        <span className='text-gray-300 -mt-2 w-1/2'>_____________________________</span>
                                    </div>
                                    <button className='flex justify-center items-center gap-2 bg-white border border-gray-400 py-2  rounded-lg hover:bg-gray-100 w-full text-center text-lg md:text-xl text-gray-500 '> <FcGoogle className='w-8 h-8' /> Continue with Google</button>

                                    <div className='md:text-lg text-gray-500'>
                                        Already have an account? <span className='text-zomatoRed-300 hover:cursor-pointer' onClick={closeModal}>Log in</span>
                                    </div>

                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
