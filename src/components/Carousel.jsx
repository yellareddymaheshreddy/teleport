import React from 'react'

const Carousel = ({image}) => {
  
  return (
    <div className=" carousel h-full flex justify-center items-center">
      <img src={image} alt="ride" className='w-[40vw] h-[40vw] rounded-full object-cover' />
    </div>
  )
}

export default Carousel
