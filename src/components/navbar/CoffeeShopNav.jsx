import React from 'react'
import "./CoffeeShopNav.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
function CoffeeShopNav() {
  const menu_btn = document.querySelector('.Hamburger');
 const [isToggled,buttonToggle] = useState(false);
 function handleToggle() {
  buttonToggle(isToggled => !isToggled)
 }
 let ToggleClassCheck = isToggled ? ' isActive' : '' ;
  return (
    <header className='Navbar'>
          <div className="NavFlex">
            <div className='NavName'>
              <Link to='/'>Joycups!!!</Link>
            </div>
            <div className='NavLinks'>
             <Link to="/shop">SHOP</Link>
             <Link to="/cart">YOUR ORDER</Link>
             <Link to="/faq">FAQ</Link>
            </div>
            <button className={`Hamburger${ToggleClassCheck}`} onClick={handleToggle} >
              <div className="bar"></div>
            </button>
            <div className={`mobileNav${ToggleClassCheck}`}>
            <Link to="/shop">SHOP</Link>
             <Link to="/cart">YOUR ORDER</Link>
             <Link to="/faq">FAQ</Link>
            </div>
          </div>
    </header>
  )
}

export default CoffeeShopNav