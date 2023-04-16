import React from 'react'
import './CarTracking.scss'
import CarTrackingSlide from '../../components/CarTrackingSlide/CarTrackingSlide'

const CarTracking = () => {
  return (
    <div className='carTracking'>
      <div className="top">
        <CarTrackingSlide/>
      </div>
      <div className="bottom">bottom</div>
    </div>
  )
}

export default CarTracking