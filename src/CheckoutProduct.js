import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
  const[{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,      
    })
  }

  return (
    <div className="checkout">
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt=""/>

        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>

          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="checkoutProduct_rating">
            {Array(rating)
              .fill()
              .map((_)=>(
                <p>⭐</p>
              ))}
          </div>

          <button className="btn-amazon" onClick={removeFromBasket}>Remove</button>
        </div>  
      </div>
    </div>
  )
}

export default CheckoutProduct
