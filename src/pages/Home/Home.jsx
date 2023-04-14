import React from 'react'
import './Home.scss'
import Slide from '../../components/Slide/Slide'
import Intro from '../../components/Intro/Intro'
import CarMakeSlide from '../../components/CarMakeSlide/CarMakeSlide'
import WeeksCar from '../../components/WeeksCars/WeeksCar'

const Home = () => {
  return (
    <div>
      <Slide/>
      <Intro/>
      <CarMakeSlide />
      <WeeksCar/>
    </div>
  )
}

export default Home