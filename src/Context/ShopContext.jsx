import React , {createContext} from "react";
import { useState } from "react";
import {Products} from "../Products.js"
export const ShopContext = createContext(null);

 const getDefaultCart = () => {
   let cart = {}
   for(let i=1 ; i<Products.length + 1; i++){
       cart[i] = 0
   }
   return cart
 }
export const ShopContextProvider = (props) => {
    const [cartItems , setCartItems] = useState(getDefaultCart());
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems)
        {
          if(cartItems[item] > 0)
          {
            let iteminfo = Products.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * iteminfo.ProductPrice
          }
        }
        return totalAmount
       };
    const addToCart  = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    const contextValue = {cartItems, addToCart, removeFromCart , getTotalCartAmount}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
};