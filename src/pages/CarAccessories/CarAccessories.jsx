import React from 'react'
import './CarAccessories.scss'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {accessories} from '../../data'

const CarAccessories = () => {
 
  return (
    <div className='carAccessories'>
      <div className="top">
        <div className="left">
          <div className="header">
            <div className="highlight"></div>
            <h2>facelift <span>services</span></h2>
          </div>          
          <div className="image-wrapper">
            <img src={require('../../images/facelift.jpg')} alt="" />
            <hr />
            <span>
              It Does not matter the Year, the Make or what you don't like about your current car We can make your Car look current, feel current and Be Current.
            </span>
          </div>
        </div>
        <div className="right">
          <div className="header">
            <div className="highlight"></div>
            <AccessTimeFilledIcon/>
            <h2>hours of <span>operation</span></h2>
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>sunday</th>
              </tr>
              <tr>
                <th>monday</th>
              </tr>
              <tr>
                <th>tuesday</th>
              </tr>
              <tr>
                <th>wednesday</th>
              </tr>
              <tr>
                <th>thursday</th>
              </tr>
              <tr>
                <th>friday</th>
              </tr>
              <tr style={{borderBottom: 'none'}}>
                <th>saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00 am - 6:00 pm</td>
              </tr>
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <tr style={{borderBottom: 'none'}}>
                <td>9:00 am - 6:00 pm</td>
              </tr>
            </tbody>
          </table>
          <button>+254 759 272 383</button>
        </div>
      </div>
      <div className="bottom">
        <div className="header">
          <div className="highlight"></div>
          <h2>we stock</h2>
        </div>
        <div className="stock">
          {accessories.map(item => (
          <div className="image-wrapper" key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <span>{item.desc}</span>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarAccessories