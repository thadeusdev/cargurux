import React from 'react'
import './WeeksCar.scss'
import { weeksCars } from '../../data'
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';

const WeeksCar = () => {
    // console.log(weeksCars)
  return (
    <div className='weeksCar'>
        <div className="top">
            <div className="left">
                <div className="highlight"></div>
                <h2>cars of the week</h2>
            </div>
            <Link to="/cars-for-sale" style={{textDecoration: 'none'}}>
            <div className="right">
                <img src={require('../../images/car-button.png')} alt="" />
                <button>view all cars</button>
            </div>
            </Link>
        </div>
        <div className="bottom">
            {weeksCars.map(car => (
                <div className='bottom-item' key={car.id}>
                    <div className="image-wrapper">
                        <img src={car.img} alt="" />
                    </div>                    
                    <span className="desc" style={{fontWeight: 600, padding: '5px'}}>{car.desc}</span>
                    <span className="desc" style={{color: 'red', fontWeight: 600, marginBottom: '10px', padding: '5px'}}>Ksh {car.price}</span>
                    <div className="mileage">
                        <SpeedIcon className='icon'/>
                        <span className="mileage-item">{car.engine} Cc</span>
                        <SettingsIcon className='icon'/> 
                        <span className="mileage-item">{car.transmission}</span>
                        <LocalGasStationIcon className='icon'/>
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

export default WeeksCar