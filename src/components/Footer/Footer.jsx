import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="subscribe">
          <h2>subscribe to our newsletter to get updates.</h2>
          <form action="">
            <input type="text" placeholder='Email Address' />
            <button>subscribe</button>
          </form>
        </div>
        <div className="links">
          <h2>quick links</h2>
          <Link className='link' to='/'>
            <span>home</span>
          </Link>
          <Link className='link' to='/cars-for-sale'>
            <span>cars for sale</span>
          </Link>
          <Link className='link' to='/about-us'>
            <span>about us</span>
          </Link>
          <Link className='link' to='/#'>
            <span>contact us</span>
          </Link> 
        </div>
        <div className="support">
          <h2>help & support</h2>
          <Link className='link' to='/car-tracking'>
            <span>car tracking</span>
          </Link>
          <Link className='link' to='/vehicle-insurance'>
            <span>insurance</span>
          </Link>
          <Link className='link' to='/cars-for-sale'>
            <span>car imports</span>
          </Link>
          <Link className='link' to='/cars-for-sale'>
            <span>trade in</span>
          </Link>
        </div>
        <div className="about">
          <h2>about car guruz</h2>
          <p>
          We are a Kenya premier car mart and we deal with highend SUV cars. Ranging from Toyota Prados, Landcruisers, Range Rovers, BMWs and many more but we pride ourselves to be home of Landcruisers.
          </p>
          <span>Contact us today for Inquiries.</span>
        </div>
      </div>
      <div className="bottom">
        <span>© 2023 Carguruz Ltd. All Rights Reserved</span>
        <span>site hosted by heroku</span>
      </div>
    </div>
  )
}

export default Footer