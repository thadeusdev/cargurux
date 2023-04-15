import React from 'react'
import './CarAccessories.scss'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

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
              <hr />
              <tr>
                <th>monday</th>
              </tr>
              <hr />
              <tr>
                <th>tuesday</th>
              </tr>
              <hr />
              <tr>
                <th>wednesday</th>
              </tr>
              <hr />
              <tr>
                <th>thursday</th>
              </tr>
              <hr />
              <tr>
                <th>friday</th>
              </tr>
              <hr />
              <tr>
                <th>saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00 am - 6:00 pm</td>
              </tr>
              <hr />
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <hr />
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <hr />
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <hr />
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <hr />
              <tr>
                <td>8:00 am - 6:00 pm</td>
              </tr>
              <hr />
              <tr>
                <td>9:00 am - 6:00 pm</td>
              </tr>
            </tbody>
          </table>
          <button>+254 759 272 383</button>
        </div>
      </div>
      <div className="bottom">bottom</div>
    </div>
  )
}

export default CarAccessories