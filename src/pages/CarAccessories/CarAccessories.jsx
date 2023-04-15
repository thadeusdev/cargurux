import React from 'react'
import './CarAccessories.scss'

const CarAccessories = () => {
  return (
    <div className='carAccessories'>
      <div className="top">
        <div className="left">
          <div className="header">
            <div className="highlight"></div>
            <h2>facelift <span>services</span></h2>
          </div>          
          <div className="image-wrapper">
            <img src={require('../../images/facelift.jpg')} alt="" />
            <hr />
            <span>
              It Does not matter the Year, the Make or what you don't like about your current car We can make your Car look current, feel current and Be Current.
            </span>
          </div>
        </div>
        <div className="right">
          <div className="header">
            <div className="highlight"></div>
            <h2>hours of <span>operation</span></h2>
          </div>
          <div className="table"></div>
        </div>
      </div>
      <div className="bottom">bottom</div>
    </div>
  )
}

export default CarAccessories