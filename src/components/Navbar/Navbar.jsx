import React, { useRef } from 'react'
import './Navbar.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsiveNav');
  }

  return (
    <div className='navbar'>
      <div className="top">
        <div className="left">
          <img src={require('../../images/logo.png')} alt="" />
        </div>
        <div className="center">
          <LocationOnIcon className='icon'/>
          <span>pangani Next to ABC Mosque</span>
        </div>
        <div className="right">
          <div className="phone">
            <PhoneIcon className='icon'/>
            <span>+254759272383</span>
          </div>
          <div className="social">
            <Link className='link' to='/admin'>
              <AccountCircleIcon className='account' /> 
            </Link> 
            <Link className='link' to='/'>
              <FacebookIcon className='facebook' /> 
            </Link> 
            <Link className='link' to='/'>
              <TwitterIcon className='twitter' />
            </Link>
            <Link className='link' to='/'>
              <InstagramIcon className='instagram' />
            </Link>
            <Link className='link' to='/'>
              <LinkedInIcon className='linkedin' />
            </Link>      
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className="links" ref={navRef}>
          <Link className='link-item' to='/'>
            <span>HOME</span>
          </Link>
          <Link className='link-item' to='/cars-for-sale'>
            <span>CAR FOR SALE</span>
          </Link>
          <Link className='link-item' to='/car-accessories'>
            <span>CAR ACCESSORIES</span>
          </Link>
          <Link className='link-item' to='/car-tracking'>
            <span>CAR TRACKING</span>
          </Link>
          <Link className='link-item' to='/blog-listing'>
            <span>BLOGS</span>
          </Link>
          <Link className='link-item' to='/vehicle-insurance'>
            <span>INSURANCE</span>
          </Link>
          <Link className='link-item' to='/about-us'>
            <span>ABOUT US</span>
          </Link>
          <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <FaTimes/>
          </button>
        </div>
        <button className='nav-btn' onClick={showNavBar}>
          <FaBars/>
        </button>
      </div>
    </div>
  )
}

export default Navbar