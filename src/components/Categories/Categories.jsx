import React from 'react';

import { images } from '../../assets';
import {CategoryData} from '../../Data/Data'

import Category from '../../Constants/Category/Category'




import './categories.scss';

const Categories = () => {

  return (
    <div className='categories'>
        {CategoryData.map((category) =>(
            <Category key={category.id} category={category}/>

        )
        )}
    </div>
  )
}

export default Categories;