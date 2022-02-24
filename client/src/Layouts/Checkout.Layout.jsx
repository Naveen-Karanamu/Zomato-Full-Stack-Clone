import React from 'react'
import CheckoutNavbar from '../Components/Navbar/Checkout.Navbar';

const CheckoutLayout = (props) => {
    return (
        <>
            <CheckoutNavbar />
            {props.children}
        </>
    )
}

export default CheckoutLayout;