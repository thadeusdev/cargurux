import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="subscribe">
          <h2>subscribe to our newsletter to get update</h2>
          <form action="">
            <input type="text" placeholder='Email Address' />
            <button>subscribe</button>
          </form>
        </div>
        <div className="links">Links</div>
        <div className="support">support</div>
        <div className="about">about</div>
      </div>
      <div className="bottom">
        <span>© 2023 Carguruz Ltd. All Rights Reserved</span>
        <span>site hosted by heroku</span>
      </div>
    </div>
  )
}

export default Footer