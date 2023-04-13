import React from 'react'
import './HomeCard.scss'

const HomeCard = ({item}) => {
  return (
    <div className='homeCard'>
        <img src={item.img} alt="" />
        <span>{item.desc}</span>
    </div>
  )
}

export default HomeCard