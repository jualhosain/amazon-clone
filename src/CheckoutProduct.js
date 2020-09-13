import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


const CheckoutProduct = ({ id, title, price, rating, image }) => {
    const [data, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({ type: 'Remove_item', id })
    }
    return (
        <div className='CheckoutProduct'>
            <img src={image} alt={title} />
            <div className="CheckoutProduct__info">
                <p className="CheckoutProduct__title">
                    {title}
                </p>
                <p className="CheckoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct__rating">
                    {Array(rating).fill().map((a,b)=> <p>⭐</p> )}
                </div>
                <button onClick={removeItem}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
