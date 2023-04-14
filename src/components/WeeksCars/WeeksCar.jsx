import React from 'react'
import './WeeksCar.scss'
import { weeksCars } from '../../data'

const WeeksCar = () => {
    // console.log(weeksCars)
  return (
    <div className='weeksCar'>
        <div className="top">
            <div className="left">
                <div className="highlight"></div>
                <h2>cars of the week</h2>
            </div>
            <div className="right">
                <img src={require('../../images/car-button.png')} alt="" />
                <button>view all cars</button>
            </div>
        </div>
        <div className="bottom">
            {weeksCars.map(car => (
                <div className='bottom-item'>
                    <img src={car.img} alt="" />
                    <span className="desc">{car.desc}</span>
                    <span className="desc">Ksh {car.price}</span>
                    <span className="mileage">{car.engine} Cc</span> 
                    <span className="desc">{car.transmission}</span>
                    <div className="order">order</div>                   
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default WeeksCar