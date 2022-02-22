import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer';

export const MenuImages = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [currentImg, setCurrentImg] = useState(0);
    const openViewer = () => setIsMenuOpen(true);
    const closeViewer = () => setIsMenuOpen(false);

    const nextImage = () => setCurrentImg((prev) => (prev += 1))
    const prevImage = () => setCurrentImg((prev) => (prev -= 1))

    return (
        <>
            <div className=" z-auto">

                {isMenuOpen && (
                    <ImageViewer
                        src={props.image}
                        currentIndex={currentImg}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeViewer}
                    />
                )}
                <div onClick={openViewer} >
                    <div className='w-32 h-32 rounded lg:rounded-lg md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden ' >
                        <img src={props.image[0]} alt="menu" className='w-full h-full rounded-lg lg:hover:scale-110 transiton duration-700 object-cover' />
                    </div>
                    <h6 className=' md:text-lg'>{props.name}</h6>
                    <p className='text-xs md:text-sm text-gray-600'>{props.pages} pages</p>
                </div>
            </div>
        </>
    )
}

export default MenuImages;