import React, { useState } from 'react'
import PhotosCollection from './PhotosCollection';
import ImageViewer from 'react-simple-image-viewer';

export const PhotosPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [currentImg, setCurrentImg] = useState(0);
    const openViewer = () => setIsMenuOpen(true);
    const closeViewer = () => setIsMenuOpen(false);

    const [photos, setPhotos] = useState(["https://b.zmtcdn.com/data/pictures/0/2800780/e76adec96961e602107355f74fc1716d.jpg", "https://b.zmtcdn.com/data/pictures/0/2800780/c466bd58f1d53215224ceafab95e03c3.jpg", "https://b.zmtcdn.com/data/reviews_photos/8ac/6e3a7129497d26078f55015a0f2e18ac_1555894500.jpg", "https://b.zmtcdn.com/data/reviews_photos/8ac/6e3a7129497d26078f55015a0f2e18ac_1555894500.jpg", "https://b.zmtcdn.com/data/reviews_photos/d7f/b39f05d645e08347651712066fb10d7f_1600102791.jpg"]);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={currentImg}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                />
            )}
            <div className='flex flex-wrap gap-3'>
                {
                    photos.map((photo) => (
                        <PhotosCollection image={photo} openViewer={openViewer} />
                    ))
                }
            </div>
        </>
    )
}

export default PhotosPage;