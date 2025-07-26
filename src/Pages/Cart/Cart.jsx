import React ,{useContext} from 'react'
import { Products } from '../../Products'
import { ShopContext } from '../../Context/ShopContext';
import { CartItem } from './CartItem';
import Fade from "react-reveal/Fade";
import './Cart.css'
function Cart() {
  const { cartItems ,getTotalCartAmount} = useContext(ShopContext);
  let totalAmount = getTotalCartAmount()
  return (
    <div className='cartBody'>
      <Fade bottom>
     {  totalAmount > 0 ? <div className="cartTitle">Your order:</div> : <div></div>}
        <div className='cartItems'>
          {Products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product}/>
            }
          })}
        </div>
        {totalAmount > 0 ? 
        <div className='CartEnd'>
          <h1>your total is ${totalAmount}</h1>
          <div>
            <button>CLICK TO CONFIRM PURCHASE</button>
          </div>
        </div>
        : 
        <div className='FailPage'>NOTHING IN THE CART :(</div>
}
      </Fade>
    </div>
  )
}

export default Cart