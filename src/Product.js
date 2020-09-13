import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, price, rating, image }) {
	const [data, dispatch] = useStateValue();
	return (
		<div className='product'>
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating).fill().map(a => <p>⭐</p> )}
				</div>
			</div>
			<img
				src={image} alt="book" />
			<button onClick={() => {
				dispatch({
					type: 'Add_To_Busket',
					item: {
						id,
						title,
						price,
						rating,
						image
					}
				})
				
			}}>Add to Basket</button>
		</div>
	)
}

export default Product;