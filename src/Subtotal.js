import React from 'react';
import './subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
    
const Subtotal = () => {
  const [data, dispatch] = useStateValue();

  let price = data.busket?.reduce((a, b) => a + b.price, 0);
  
  
    return (
      <div className="subtotal">
        <CurrencyFormat
          value={price}
          decimalScale={2}
          displayType={"text"}
          thousandSeparator={true}
                prefix={"$"}
                
          renderText={(value) => (
            <>
              <p>
                Subtotal ({data.busket.length} items): <strong>{value}</strong>
              </p>
              <div className="gift">
                <input type="checkbox" /> This order contains a gift
              </div>
              <button>Proceed to Checkout</button>
            </>
          )}
        />
      </div>
    );
}

export default Subtotal;
