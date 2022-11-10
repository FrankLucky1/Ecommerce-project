import React from 'react';
import './button.scss';

const Buttton = ({text}) => {
  return (
    <div className='Button'>
        <button>
            {text}
        </button>
    </div>
  )
}

export default Buttton