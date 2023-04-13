import React from 'react'
import Slider from 'infinite-react-carousel';
import './Slide.scss'
import HomeCard from '../HomeCard/HomeCard';
import {homeCards} from '../../data'

const Slide = () => {
  return (
    <div className='slide' >
        <Slider dots autoplay={true} autoplaySpeed={3000} duration={700}>
          {homeCards.map((card) => (
            <HomeCard item={card}/>
          ))}
        </Slider>
    </div>
  )
}

export default Slide