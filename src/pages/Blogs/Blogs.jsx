import React from 'react'
import './Blogs.scss'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className='blogs'>
      <div className="left">
        <div className="header">
          <div className="highlight"></div>
          <h2>Get your unbeatable car financing option with us today</h2>
        </div>
        <span>
          We make it easier for you to buy the car of your dream with low interest rates, flexible payment terms and fast approval times.
        </span>
        <Link to='/cars-for-sale'>
        <button>find your dream car</button>
        </Link>
      </div>
      <div className="right">
        <img src={require('../../images/car_financing_hero_image.webp')} alt="" />
      </div>
    </div>
  )
}

export default Blogs