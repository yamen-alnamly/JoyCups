import React ,{useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext';
import './Cart.css'
export const CartItem = (props) => {
    const { id ,ProductName ,ProductPrice,ProductImage} = props.data
    const {addToCart , cartItems ,removeFromCart } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  
  return (
    <div className='CartItem' key={id}>
  
           <img src={ProductImage}/>
           
            <div className='CartItemInfo'>
                <h1>{ProductName}</h1>
                <h2>${ProductPrice}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nobis, vel placeat ipsam temporibus dolore exercitationem, tempora cupiditate labore quas laboriosam voluptatum facilis rerum. Sequi, vero? Blanditiis libero quasi asperiores!</p>
            </div>
            <div className='CartItemButtons'>
                <input type="text"  value={cartItemAmount}/>
                <div>
                
                    <button className='CartItemButton' onClick={() => addToCart(id)}>+</button>
                    <button className='CartItemButton' onClick={() => removeFromCart(id)}>-</button>
                    </div>
            </div>
          
     
    </div>
  )
}
