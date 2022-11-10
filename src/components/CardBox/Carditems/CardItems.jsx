import React from 'react';


import './carditems.scss';

const Button = ()=>{
    <button 
    className='btn'
    type='button'
    style={{
        backgroundColor: 'red',
        border: none,
        color: '#fff',
    }}
    >
        SHOP NOW
    </button>
}


const CardItems = () => {
  return (
    <div className='carditem'>
        <div className='image-container'>

            <div className='desc'>
                <Button/>
            </div>
        </div>
    </div>
  )
}

export default CardItems