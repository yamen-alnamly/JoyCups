import React from 'react'
import { useContext } from 'react';
import Fade from "react-reveal/Fade";
import { ShopContext } from '../../Context/ShopContext';
export const ShopProducts = (props) => {
    const { id ,ProductName ,ProductPrice,ProductImage} = props.data
    const {addToCart , cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  return (
    <Fade bottom>
        <div className='ShopItem' key={id}>
           <img src={ProductImage}/>
           <div className="ShopItemInfo">
            <h2>{ProductName}</h2>
            <h3>${ProductPrice}</h3>
            <button className='ShopItemButton' onClick={() => addToCart(id)}>Order {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
           </div>
        </div>
    </Fade>
  )
}
