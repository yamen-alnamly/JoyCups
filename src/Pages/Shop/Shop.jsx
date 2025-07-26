import React from 'react'
import {Products} from "../../Products.js"
import { ShopProducts } from './ShopProducts'
import "./Shop.css"
function Shop() {
  return (
    <div className='ShopPage'>
      <div className="ShopPageTitle">
        <h1>ORDER NOW!!!</h1>
      </div>
      <div className='ShopPageItems'>
        {Products.map((product) => (
          <div><ShopProducts data={product}/></div>
        ))}
      </div>
    </div>
  )
}

export default Shop