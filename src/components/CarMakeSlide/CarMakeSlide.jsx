import React from 'react'
import Slider from 'infinite-react-carousel';
import './CarMakeSlide.scss'
import {CarMakes} from '../../data'
import CarMake from '../CarMakeCard/CarMake';

const CarMakeSlide = () => {
  return (
    <div className='carMakeSlide'>
        <div className="header">
            <div className='highlight'></div>
            <h2>vehicle by make</h2>
        </div>
        
        <Slider arrows={0} slidesToShow={7} autoplay={true} autoplaySpeed={3000} duration={700}>
            {CarMakes.map(carMake => (
                <CarMake item={carMake} />
            ))}
        </Slider>
    </div>
  )
}

export default CarMakeSlide