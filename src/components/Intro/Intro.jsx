import React from 'react'
import './Intro.scss'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Intro = () => {
  return (
    <div className='intro'>
        <div className="left">
            <h3>welcome to car guruz</h3>
            <h2>search less. live more.</h2>
            <p>
            At Carsoko.co.ke what matters to us is making your car search and buying experience as simple as possible, so you can find the right car quickly and get on with making it yours,
            </p>
            <div className="more">
                <span>Find more</span>
                <ArrowRightAltIcon />
            </div>
        </div>
        <div className="right">
            <img src={require('../../images/people-buy.avif')} alt="" />
        </div>
    </div>
  )
}

export default Intro