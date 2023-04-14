import React from 'react'
import './Home.scss'
import Slide from '../../components/Slide/Slide'
import Intro from '../../components/Intro/Intro'
import CarMakeSlide from '../../components/CarMakeSlide/CarMakeSlide'

const Home = () => {
  return (
    <div>
      <Slide/>
      <Intro/>
      <CarMakeSlide />
    </div>
  )
}

export default Home