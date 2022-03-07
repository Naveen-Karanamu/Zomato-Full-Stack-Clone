import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const RestaurantRedirect = () => {
    const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        history.push(`/restaurant/${id}/order-online`)
    }, [])

    return (
        <>
        </>
    )
}

export default RestaurantRedirect; 