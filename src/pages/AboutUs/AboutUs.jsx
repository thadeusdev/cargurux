import React from 'react'
import './AboutUs.scss'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const AboutUs = () => {
  return (
    <div className='about'>
      <div className="left">
        <img src={require('../../images/car_financing_how_it_works_image.webp')} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <div className="highlight"></div>
          <h2>How does car financing work?</h2>
        </div>
        <div className="bottom">
          <div className="bottom-item">
            <TaskAltIcon className='icon'/>
            <span>
              Adjust the calculator to see cars that match your criteria
            </span>
          </div>
          <div className="bottom-item">
            <TaskAltIcon className='icon'/>
            <span>
              Select a car and review the terms of finance
            </span>
          </div>
          <div className="bottom-item">
            <TaskAltIcon className='icon'/>
            <span>
              Apply for a loan and receive personalized offers
            </span>
          </div>
          <div className="bottom-item">
            <TaskAltIcon className='icon'/>
            <span>
              Accept a loan offer and drive home your dream car
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs