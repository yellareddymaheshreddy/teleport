import React from 'react'

const Carousel = ({image}) => {
  
  return (
    <div className=" carousel">
      <img src={image} alt="ride" className='w-full rounded-full' />
    </div>
  )
}

export default Carousel
