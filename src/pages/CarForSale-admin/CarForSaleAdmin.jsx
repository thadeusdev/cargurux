import React from 'react'
import './CarForSaleAdmin.scss'
import {weeksCars} from '../../data'
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const CarForSaleAdmin = () => {
  return (
    <div className='carForSaleAdmin'>
      <div className="top">        
        <div className="header">
          <div className="highlight"></div>
          <h2>cars for sale</h2>
        </div>
        <button>add car</button>
      </div>
      <div className="item">
        {weeksCars.map(car => (
        <div className="card">
          <div className="image-wrapper">
            <img src={car.img} alt="" />
          </div>
          <span>{car.desc}</span>
          <span style={{color: 'red'}}>Ksh {car.price}</span>
          <div className="mileage">
            <SpeedIcon className='icon'/>
            <span>{car.engine}</span>
            <SettingsIcon className='icon'/>
            <span>{car.transmission}</span>
            <LocalGasStationIcon className='icon'/>
            <span>{car.fuel}</span>
          </div>
          <div className="buttons">
            <button className='edit'>edit</button>
            <button className='delete'>delete</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default CarForSaleAdmin