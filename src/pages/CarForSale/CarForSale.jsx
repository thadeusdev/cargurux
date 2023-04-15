import React from 'react'
import './CarForSale.scss'
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { weeksCars } from '../../data';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

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
      <div className="bottom">
      {weeksCars.map(car => (
        <div className='bottom-item'>
            <img src={car.img} alt="" />
            <span className="desc" style={{fontWeight: 600, padding: '5px'}}>{car.desc}</span>
            <span className="desc" style={{color: 'red', fontWeight: 600, marginBottom: '10px', padding: '5px'}}>Ksh {car.price}</span>
            <div className="mileage">
                <SpeedIcon/>
                <span className="mileage-item">{car.engine} Cc</span>
                <SettingsIcon/> 
                <span className="mileage-item">{car.transmission}</span>
                <LocalGasStationIcon/>
                <span className="mileage-item">{car.fuel}</span>
            </div>
            <div className="order">
                <div className="left">
                    <button>order now</button>
                </div>
                <div className="right">
                    <div className="whatsapp">
                        {/* <WhatsAppIcon/> */}
                    </div> 
                    <WhatsAppIcon className='whatsapp-icon'/>                           
                    <div className="phone">
                        {/* <PhoneIcon/> */}
                    </div>
                    <PhoneIcon className='phone-icon'/>
                </div>
            </div>                   
        </div>
      ))}
      </div>
    </div>
  )
}

export default CarForSale