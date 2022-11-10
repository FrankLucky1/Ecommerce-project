import React from 'react';
import { useState } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FaRegUser} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';



import './navbar.scss';

const NavBar = () => {

  

  return (
    <div className='nav_bar'>
     
        
      <div className='logo'>
        <h1>Gadget Store</h1>
      </div>

      <div className='nav-links'>
          
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>All Products</li>
            <li>Favorites</li>
          </ul>
          
        </div>
     

      <div className='panel'>
        <div className='searchbar'>
          <input className='input' type="text" placeholder='Search item'/>
            <AiOutlineSearch/>
          
        </div>
        <div className='profile'>
          <FaRegUser style = {{ fontSize: "1.2rem", cursor:'pointer' }}/>
        </div>
        <div className='cart'>
          <AiOutlineShoppingCart  style = {{ fontSize: "1.2rem", cursor:'pointer'}}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar