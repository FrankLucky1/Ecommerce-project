import {useState} from 'react';

import {BsCartDash, BsFillCartCheckFill} from 'react-icons/bs';
import './specialcard.scss'

const SpecialCard = ({product}) => {
  const [cartActive, setcartActive] = useState(true);



  return (
    <div className='special_card'>
        <div className='Card_special'>
            <img src={product.product} alt="game pad" style={{height: '130px' , width: '120px', objectFit: 'cover'}} />
        </div>
        <div className='card-details'>
            <div className='card-details_text'>
              <h6>{product.name}</h6>
              <h5>{product.category}</h5>
              <h4>{product.price}</h4>

              <div className='cart' onClick={()=> setcartActive(!cartActive)}>
              {cartActive ? <BsCartDash/> : <BsFillCartCheckFill/> }
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default SpecialCard;