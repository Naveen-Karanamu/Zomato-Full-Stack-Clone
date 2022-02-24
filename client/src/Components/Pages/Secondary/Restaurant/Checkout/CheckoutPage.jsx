import React from 'react'
import CheckoutSummary from './CheckoutSummary';

const CheckoutPage = () => {
    return (
        <>
            <div className='md:hidden'>
                <CheckoutSummary />
            </div>
        </>
    )
}

export default CheckoutPage;