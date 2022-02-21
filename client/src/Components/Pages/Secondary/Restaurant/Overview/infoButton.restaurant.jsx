import React from "react";

import classnames from "classnames";


const InfoButton = (props) => {
    return (
        <>
            <div className={classnames("border-gray-300 rounded-lg border md:py-2 md:px-4 hover:bg-gray-50 py-1 px-2",{
               "border-0 bg-zomatoRed-300 text-white hover:bg-zomatoRed-400" :props.isActive,
            })}>
                <button className="flex gap-2 items-center  ">
                    {props.children}
                </button>
            </div>
        </>
    )
}

export default InfoButton;