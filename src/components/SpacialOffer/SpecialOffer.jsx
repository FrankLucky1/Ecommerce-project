
import { images } from '../../assets';
import { ProductData } from '../../Data/Data';

import {AiFillApple} from 'react-icons/ai'




import './specialOffer.scss'
import Buttton from '../../Utility/Buttons/Buttton';
import SpecialCard from './SpecialCard/SpecialCard';
import { AppContext } from '../../ContextApi/AppContext';
import { useContext } from 'react';

const SpecialOffer = () => {

    const [active, setactive, setsize] = useContext(AppContext);



    

    const handleClick = (memory, i, e) => {
        setactive(memory);
        setsize(e.target.outerText)
    };
    
    



  return (
    <div className='special-offer'>
        <div className='special__offer'>

            <div className='count-down'>
                <div className='special-tags'>
                    <h2>Special Offer</h2>
                    <h5>New Apple Iphone 13 Pro Blue</h5>
                    <div className='timer-container'>
                        <div className='timer'>Day</div>
                        <div className='timer'>Hour</div>
                        <div className='timer'>Min</div>
                        <div className='timer'>Sec</div>
                    </div>
                </div>
                <div className='special-img'>
                    
                <AiFillApple/>
                    <h6>Online shop only*</h6>
                    
                </div>
               
            </div>
            <div className='product-offer'> 
                    <div className='Offer_content'>
                        <h2>Apple iphone 13</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  i itaque perferendis dolores quas odit ipsa quisquam?</p>
                        <div className='storage_space-container'>      
                         {['128', '256', '512', '1TB'].map((memory, i) => (
                             <div key={memory}  className={`storage`}>
                                
                                      <div className={`size ${active === memory ? 'border' : ''}`} onClick={(e)=> handleClick(memory, i, e)}>{memory}</div>
                              
                               
                              
                             </div>
                         ))}
                        </div>
                       <Buttton text={"Buy $999.99"}/>
                    </div>    
                    <div className='offer-img'>              
                        <img src={images.iphone14} alt="offer" />
                    </div>
                </div>
        </div>
        

        <div className='specialProduct'>
            {ProductData.map((product) => (

            <SpecialCard  key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default SpecialOffer;