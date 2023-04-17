import React from 'react'
import './Insurance.scss'

const Insurance = () => {
  return (
    <div className='insurance'>
      <div className="left">
        <div className="header">
          <div className="highlight"></div>
          <h2>motor vehicle <span>insurance</span></h2>
        </div>
        <img src={require('../../images/INSURANCE.jpg')} alt="" />
        <span>
          We offer motor vehicle insurance for private, commercial and special types of motor vehicles including tractors, trailers, combine harvesters and forklifts. Our packages include:
        </span>
        <ul>
          <li>
            Third Party Only (TPO) Cover which covers liability to third parties and passenger liability that may arise from the use of the vehicle.
          </li>
          <li>
            Third Party Fire & Theft (TPF&T) which provides insurance in case of fire or theft. It also covers liability to third parties and passenger liability.
          </li>
          <li>
            350 offers on site, trusted by a community.
          </li>
          <li>
            Comprehensive which provides indemnity against loss or damage to motor vehicles, liability to third parties and passenger liability.
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="header">
          <div className="highlight"></div>
          <h2>get a quote <span>here</span></h2>
        </div>
        <form>
          <label>full name</label>
          <input type="text" required />
          <label>email</label>
          <input type="text" required />
          <label>phone no.</label>
          <input type="text" required />
          <label>type of cover</label>
          <select>
            <option>select</option>
            <option value="">comprehensive</option>
            <option value="">third party one</option>
            <option value="">third party fire & theft</option>
          </select>
          <button>send</button>
        </form>
      </div>
    </div>
  )
}

export default Insurance