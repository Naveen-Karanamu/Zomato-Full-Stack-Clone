import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

// Icons
import { FcGoogle } from "react-icons/fc"

export default function SignIn({ isOpen, setIsOpen }) {

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
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >

                                </Dialog.Title>
                                <div className="mt-2 flex flex-col gap-4">

                                    <form className='flex flex-col gap-6'>
                                        <div className="flex  items-center gap-3 ">
                                            <input type="email" name="review" placeholder='Enter the e-mail or phone number' id="email" className=" bg-white border border-gray-400 py-3 w-full  rounded-lg text-lg px-6" />

                                        </div>
                                        <div className="flex items-center gap-3  ">
                                            <input type="password" name="review" placeholder='Enter the Password' id="password" className="bg-white border border-gray-400 py-3 w-full  rounded-lg text-lg px-6" />

                                        </div>

                                        <div className='flex items-center justify-center'>
                                            <div className=' bg-zomatoRed-300 text-white py-2 rounded-lg  w-32 text-center hover:cursor-pointer'>
                                                Sign in
                                            </div>
                                        </div>
                                    </form>
                                    <div className='flex items-center gap-2 overflow-x-hidden '>
                                        <span className='text-gray-300 -mt-2'>___________________________</span>
                                        <span className='text-lg text-gray-400'>or</span>
                                        <span className='text-gray-300 -mt-2'>_____________________________</span>
                                    </div>
                                    <button className='flex justify-center items-center gap-2 bg-white border border-gray-400 py-3  rounded-lg hover:bg-gray-100 w-full text-center text-xl text-gray-500 '> <FcGoogle className='w-8 h-8' /> Sign in with Google</button>

                                    <div className='text-lg text-gray-500'>
                                        New to Zomato? <span className='text-zomatoRed-300 hover:cursor-pointer' onClick={closeModal}>Create account</span>
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
