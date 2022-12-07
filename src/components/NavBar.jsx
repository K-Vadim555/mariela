import React from 'react'
import './styles/NavBar.scss'
import logo from "./img/Logo.png"
import cart from "./img/Cart.svg"

const NavBar = ({setShow, size}) => {
  return (
  <>
    <header>
        <div className='columnsWrapper'>
            <div className="leftColumn">
              <span className="myShop" onClick={() => setShow(true)} >
                  <img src={logo} alt="" />
              </span>
            </div>
            <div className="rightColumn">
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Products</li>
                    <li>Contact me</li>
                </ul>
                
                <button className="cart cartButton" onClick={() => setShow(false)}> <img src={cart} alt="" /> </button>
                <span>{size}</span>
            </div>
        </div>
    </header>
  </>
  )
}

export default NavBar;