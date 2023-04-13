import React from 'react'
import './Navbar.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <FacebookIcon className='facebook' /> 
            <TwitterIcon className='twitter' /> 
            <InstagramIcon className='instagram' />   
            <LinkedInIcon className='linkedin' /> 
            <AccountCircleIcon className='account' />      
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className="links">
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
        </div>
      </div>
    </div>
  )
}

export default Navbar