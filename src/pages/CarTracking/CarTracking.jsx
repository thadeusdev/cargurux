import React from 'react'
import './CarTracking.scss'
import CarTrackingSlide from '../../components/CarTrackingSlide/CarTrackingSlide'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const CarTracking = () => {
  return (
    <div className='carTracking'>
      <div className="top">
        <CarTrackingSlide/>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="introduction">
            <div className="header">
              <div className="highlight"></div>
              <h2>we can help <span>track</span> your car's</h2>
            </div>
            <p>
              As a global leader in Vehicle Tracking, Fleet Management and Insurance Telematics Solutions, we are in the business of keeping vehicles, fleets and their occupants Always Visible. Our products provide safety and security for car owners and their families, control and cost savings for businesses and a wealth of fleet analytics for informed decision making for large enterprises. With over 30 years’ experience, a stolen vehicle recovery rate of over 95% and continuous investment in research and development, we are committed to making sure your vehicle or fleet is always Visible.
            </p>
          </div>
          <div className="services">
            <div className="header">
              <u>our services include:</u>
            </div>
            <div className="service">
              <div className="service-item">
                <h2>services</h2>
                <ul>
                  <li>Vehicle Tracking.</li>
                  <li>Fleet Tracking.</li>
                  <li>Fleet Management.</li>
                </ul>
              </div>
              <div className="service-item">
                <h2>software</h2>
                <ul>
                  <li>Vehicle Tracking Applications</li>
                  <li>Fleet Monitoring Software.</li>
                  <li>Fleet Management Software.</li>
                  <li>Fleet Analytics.</li>
                </ul>
              </div>
              <div className="service-item">
                <h2>peripherals</h2>
                <ul>
                  <li>Quad-band, Worldwide use.</li>
                  <li>Supports GSM frequencies 850/900/1800/1900MHz.</li>
                  <li>High-sensitivity, latest technology and the most advanced GPS chip.</li>
                  <li>Can accurately position even if with weak signal.</li>
                  <li>Supports two modes: text message polling and GPRS trace tracking.</li>
                  <li>Alarm function.</li>
                  <li>Cut oil or circuit.</li>
                  <li>Over speed alarm.</li>
                  <li>Acc ignition detection.</li>
                  <li>Vibration alarm.</li>
                  <li>Support SOS and remote voice monitor function.</li>
                </ul>
              </div>
            </div>

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
    </div>
  )
}

export default CarTracking