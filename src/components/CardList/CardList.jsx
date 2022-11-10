import React from 'react';
import Card from '../../Utility/Card/Card'
import './cardlist.scss';

const CardList = () => {
  return (
    <div className='Card-container'>

        <div className='Header-title'>
            <h2>Best Selling Products</h2>
            <p>select from our top selling items</p>
        </div>
        <div className='Cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>   
            <Card/>   
            <Card/>   
            <Card/>   
        </div>
     
    </div>
  )
}

export default CardList