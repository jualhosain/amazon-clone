import React from 'react';
import './checkout.css'
import Subtotal from './Subtotal'


const Checkout = () => {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="img/ads.jpg" alt="ads" className="checkout__ads" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>

                </div>
            </div>
            <div className="checkout__right">
                    <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
