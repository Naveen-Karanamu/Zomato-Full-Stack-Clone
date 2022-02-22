import React from 'react'
import MapColumn from './MapColumn.restaurant';

export const MapRestaruant = () => {
  return (
      <>
      <aside className='hidden md:block border  shadow-lg rounded-xl p-4' style={{ width: "350px" }} >
                    <MapColumn phone="+919295000521" mapLocation={[17.688229266181448, 83.20616323443606]} title="Helapuri Restaurant" address="8-8-36, Main Road, Old Gajuwaka, Vizag" />
                </aside>
      </>
  )
}

export default MapRestaruant;