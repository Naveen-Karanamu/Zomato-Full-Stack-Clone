import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer';

export const PhotosCollection = (props) => {
   
    return (
        <>
            <div className="">               
                <div onClick={props.openViewer} >
                    <div className='w-28 h-28 rounded lg:rounded-lg md:w-36 md:h-36 lg:w-52 lg:h-52 overflow-hidden ' >
                        <img src={props.image} alt="menu" className='w-full h-full rounded-lg lg:hover:scale-110 transiton duration-700 object-cover' />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PhotosCollection;