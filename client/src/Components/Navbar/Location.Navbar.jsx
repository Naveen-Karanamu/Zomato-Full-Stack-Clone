import React from "react";

const NavSm=()=>{
    return (
        <div>
            small
        </div>
    )
}

const NavMd=()=>{
    return (
        <div>
            medium
        </div>
    )
}

const Navbar = () => {
    return (
        <nav>
            <div className="md:hidden"><NavSm /></div>
            <div className="hidden md:flex lg:hidden"><NavMd /></div>
        </nav>
    )
}

export default Navbar;