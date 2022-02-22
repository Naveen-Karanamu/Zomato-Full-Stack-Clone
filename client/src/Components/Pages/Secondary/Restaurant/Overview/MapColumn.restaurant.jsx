import React from 'react'
// Map
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// Icons
import { FaRegCopy, FaDirections } from "react-icons/fa"


export const MapColumn = (props) => {
    return (
        <>
            <div className=''>
                <div>
                    <h1 className='md:text-xl text-lg text-gray-700 font-normal  md:block md:pb-1'>Call</h1>
                    <p className='md:text-md text-sm text-zomatoRed-300'>{props.phone}</p>
                </div>
                <div className='md:pt-4 pt-2'>
                    <h1 className='text-lg md:text-xl font-normal text-gray-700  md:block '>Direction</h1>
                </div>
                <div className='w-full md:h-36 h-48 my-1 '>
                    <MapContainer center={props.mapLocation} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={props.mapLocation}>
                            <Popup>
                                {props.title}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div>
                    <h4 className='text-sm md:text-base font-normal text-gray-600'>{props.address}</h4>
                </div>
                <div>
                    <div className='flex gap-2 pt-2 md:pt-4 text-sm md:text-base'>
                        <span className='flex gap-1 text-gray-500 items-center border-2 rounded-lg border-gray-300 px-2 py-1 hover:bg-gray-100'>
                            <FaRegCopy className='w-5 h-5 text-gray-400 ' />
                            Copy
                        </span>
                        <span className='flex gap-1 text-gray-500 items-center border-2 rounded-lg border-gray-300 px-2 py-1 hover:bg-gray-100'>
                            <FaDirections className='w-5 h-5 text-zomatoRed-400 ' />
                            Direction
                        </span>
                    </div>
                </div>
        </div>
                </>
    )
}

export default MapColumn;

// [17.688229266181448, 83.20616323443606]