import { useState } from 'react';

import {MdOutlineFavoriteBorder, MdOutlineFavorite} from 'react-icons/md';
import {BsCartDash, BsFillCartCheckFill} from 'react-icons/bs';

import './card.scss';


const Card = ({data}) => {
    const [active, setactive] = useState(false);
    const [cartActive, setcartActive] = useState(true);


  return (
    <div className='card'>

        <div className='Fav-icon' onClick={()=> setactive(!active)}>
          {active ? 
          <MdOutlineFavorite style={{color: "red"}}/> : 
          
          <MdOutlineFavoriteBorder style={{color: "#4e4e4e"}}/>}
        </div>

        <div className='card-img'>
          <img src={data.product} alt="product image" style={{width:'250px', height: '260px', borderRadius: '10px', objectFit: 'cover' }} />
        </div>


        <div className='card__details'>
          <div className='card-detail'>
            <h3>{data.name}</h3>
            <h6>{data.category}</h6>
            <h2>{data.price}</h2>
          </div>

            <div className='cart' onClick={()=> setcartActive(!cartActive)}>
              {cartActive ? <BsCartDash/> : <BsFillCartCheckFill/> }
            </div>
        </div>
    </div>
  )
}

export default Card