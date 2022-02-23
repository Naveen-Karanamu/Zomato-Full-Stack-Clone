import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import { FiSearch } from "react-icons/fi"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

// Components
import SignIn from "../Auth/SignIn";
import UserDropDown from "../Auth/DropDown";
import SignUp from "../Auth/SignUp";

const NavSm = ({signIn,signUp}) => {
    return (
        <div>
            <div className="bg-white px-4 py-3 flex justify-between items-center shadow-md">
                <div className="w-24 ">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo" className="w-full h-full" />
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-zomatoRed-400 rounded-full py-2 px-2 text-white text-sm font-semibold">Use App</button>
                    <span className="border-2 border-gray-300  rounded-full text-zomatoRed-400" onClick={signIn}><FaUserAlt className="w-4 h-4 m-2" /></span>
                    {/* <UserDropDown /> */}
                </div>
            </div>

            <div className="flex justify-between px-5 py-4 items-center shadow-sm">
                <div className="flex items-center gap-1">
                    <HiLocationMarker className="text-zomatoRed-400 w-5 h-5" />
                    <p className="text-sm ">Vishakapatnam</p>
                </div>
                <span className="border border-gray-300  rounded-full  bg-gray-50"><FiSearch className="w-4 h-4 m-2" /></span>
            </div>
        </div>
    )
}

const NavMd = ({signIn,signUp}) => {
    return (
        <div>
            <div className="flex justify-between px-2 py-4 items-center shadow-sm">
                <div className="w-36">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo" className="w-full h-full" />
                </div>
                <div className="flex gap-4">
                    <button className="text-gray-400 text-xl" onClick={signIn}>Log in</button>
                    <button className="text-gray-400 text-xl" onClick={signUp}>Sign up</button>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4 px-2 shadow-md py-3">
                    <div className="flex items-center justify-between border-r-2 w-1/3 pr-4">
                        <div className="flex items-center gap-2">
                            <HiLocationMarker className="text-zomatoRed-400 w-5 h-5" />
                            <p className="text-lg text-gray-500">Vishakapatnam</p>
                        </div>
                        <IoMdArrowDropdown className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-4 w-2/3">
                        <FiSearch className="w-7 h-7 text-gray-500" />
                        <input type="search" placeholder="Search for restaurant, cusine or a dish" className="focus:outline-none w-full text-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const NavLg = ({signIn,signUp}) => {
    return (
        <>
            <div className="container mx-auto px-52 flex w-full items-center justify-between my-3">
                <div className="flex items-center gap-6">
                    <div className="w-32">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="flex items-center gap-2 px-2 shadow py-3 border rounded-md">
                        <div className="flex items-center justify-between border-r-2  pr-2 w-56 ">
                            <div className="flex items-center gap-2">
                                <HiLocationMarker className="text-zomatoRed-200 w-6 h-6" />
                                <p className="text-md text-gray-500">Vishakapatnam</p>
                            </div>
                            <IoMdArrowDropdown className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="flex items-center gap-4 " style={{ width: "calc(30vw)" }}>
                            <FiSearch className="w-6 h-6 text-gray-400" />
                            <input type="search" placeholder="Search for restaurant, cusine or a dish" className="focus:outline-none w-full text-md  text-gray-700" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-8">
                    <button className="text-gray-400 text-xl hover:text-gray-600" onClick={signIn}>Log in</button>
                    <button className="text-gray-400 text-xl hover:text-gray-600" onClick={signUp}>Sign up</button>
                </div>
            </div>
        </>
    )
}

const Navbar = () => {
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);

    const openSignInModel=()=>setOpenSignIn(true);
    const openSignUpModel=()=>setOpenSignUp(true);
    return (
        <>
        <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
        <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp}/>
            <nav>
                <div className="md:hidden"><NavSm signIn={openSignInModel} signUp={openSignUpModel}/></div>
                <div className="hidden md:block lg:hidden"><NavMd signIn={openSignInModel} signUp={openSignUpModel}/></div>
                <div className="hidden lg:block"><NavLg signIn={openSignInModel} signUp={openSignUpModel}/></div>
            </nav>
        </>
    )
}

export default Navbar;