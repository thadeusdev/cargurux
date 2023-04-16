import React from 'react'
import './CarTrackingSlide.scss'
import Slider from 'infinite-react-carousel';

const CarTrackingSlide = () => {
  return (
    <div className='CarTrackingSlide'>
        <Slider autoplay={true} autoplaySpeed={3000} duration={700}>
            <div className="image-wrapper">
                <img src={require('../../images/tracking1.png')} alt="" />
            </div>
            <div className="image-wrapper">
                <img src={require('../../images/tracking2.jpg')} alt="" />
            </div>
            <div className="image-wrapper">
                <img src={require('../../images/tracking3.jpg')} alt="" />
            </div>
        </Slider>
    </div>
  )
}

export default CarTrackingSlide