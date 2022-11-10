import React from 'react';
import Card from '../../Utility/Card/Card';


import { ProductData } from '../../Data/Data';
import './featured.scss';

const Featured = () => {

  return (
    <div className='featured-products'>
        <div className='page-title'>
            <h2>Featured Products</h2>
        </div>
        <div className='Products'>
            {ProductData.map((data)=> (
                <Card key={data.id} data={data}/>
            ))}
        </div>
    </div>
  )
}

export default Featured