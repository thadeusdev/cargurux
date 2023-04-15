import React from 'react'
import './CarForSale.scss'
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CarForSale = () => {
  return (
    <div className='carForSale'>
      <div className="top">
        <div className="top-items">
          <HomeIcon/>
          <span>home</span>
          <KeyboardArrowRightIcon/>
          <span>car for sale</span>
        </div>
      </div>
      <div className="bottom">bottom</div>
    </div>
  )
}

export default CarForSale