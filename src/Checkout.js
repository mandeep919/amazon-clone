import React from "react";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout(){
  const [{basket}] = useStateValue();

  return(
    <div className="checkout">
      <div className="checkout_left">
        {basket?.length === 0 ? (
          <div>
            <h2>your shopping basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2>Shoping Basket</h2>
            {basket.map((item) => (
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
      <div className="checkout_right">
        <Subtotal/>
      </div>  
      )}
    </div>
  )
}

export default Checkout;
