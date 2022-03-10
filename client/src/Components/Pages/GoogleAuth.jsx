import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const GoogleAuth = () => {
    const { token } = useParams();

    useEffect(() => {
        token && console.log(token);
    }, [token])
    return (
        <>
            Loading the page, please wait....
        </>
    )
}

export default GoogleAuth;