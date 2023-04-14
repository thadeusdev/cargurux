import React from 'react'
import './CarMake.scss'

const CarMake = ({item}) => {
  return (
    <div className='carMake'>
      <img src={item.logo} alt="" />
      <span>({item.sum})</span>
    </div>
  )
}

export default CarMake