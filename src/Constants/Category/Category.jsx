import React from 'react'
import './category.scss'

const Category = ({category}) => {

  return (
    <div className='Categories'>
      
      <div className='cat-text'>  
        <h3>{category.Title}</h3>
        <h6>{category.Price}</h6>
        <div className='button'>{category.icon}</div>
      </div>


        
        <div className='img'>
            <img src={category.Img} alt={category.Title} />
        </div>

    </div>
  )
}

export default Category