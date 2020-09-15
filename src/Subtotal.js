import React from "react";
import { useStateValue } from "./StateProvider";
import './Subtotal.css';
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Subtotal(){
  const [{basket}, dispatch] = useStateValue();

  return(
    <div  className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>Subtotal ({basket.length} items): <strong>{`${value}`}</strong></p>
            <small className="subtotal_gift">
              <input type="checkbox"/>this order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="btn-amazon">Proceed to checkout</button>
    </div>  
  ); 
}
export default Subtotal;