import React from 'react'

const GradientLoader = ({height}) => {
  return (
    <>
    <div className={ `flex flex-col justify-center items-center ${height ? height : "min-h-screen"}`}  >
      <div class="relative w-80 h-80 rounded-full bg-gradient-to-r from-gray-200 to-gray-400 animate-spin">
    </div>
    <span className='min-w-16 animate-bounce absolute'>
        <svg className='h-44 w-44' fill="#000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 231 256" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M227.9,151.7c2.2,5.1,0.9,11.4-3.4,14.9c-4.9,4-11.9,4.1-16.2,0.8c-1.3-0.8-2.8-2-4.4-3.3l22.1-16.9L227.9,151.7z M65,19.5 c0,9.7,7.8,17.5,17.5,17.5s17.5-7.8,17.5-17.5S92.2,2,82.5,2S65,9.8,65,19.5z M211.1,101.3l-8.7-19.7l17.9-12.3L211.1,101.3z M155.8,114.6l-6.7,4.5l35.6,37.1L152,193.5v48.1l7.9,12.4h-24.8v-60.5l-25.2,0l-3.1,5.7c-2.1,3.9-6.2,6.1-10.4,6.1 c-1.9,0-3.9-0.5-5.7-1.5c-4.2-2.3-6.5-6.9-6.1-11.4c-2.7-0.5-5.3-1.3-7.9-2.2c-7.7-2.8-17.7-6.4-17.8-6.4l-28.5,38v19.7l8.9,12.4 H13.5v-44.6l9.8-16L18,150h-5.3v43.5H2V150c0-7.5,3.1-14.6,8.1-19.6c4.9-4.9,11.9-7.9,19.5-7.9h27.7v45.8h39.5l10.4-19 c0,0-35.3-20.9-35.6-21.1c-4-3.2-6.5-8-6.5-13.5V59.1c0-9.5,7.7-17.2,17.2-17.2c7.3,0,13.5,4.6,16,11c0,0,0.1,0.1,0.1,0.1l10.3,24.1 l23.8,5.4c5.3,1.2,8.6,6.5,7.4,11.8c-0.2,1.1-0.7,2.1-1.2,3L155.8,114.6l30.9-20.6V87l3.5-21.3l32.6,74.2L198,158.7L155.8,114.6z M149,119.1l-17-17.4c-1.3,0.3-2.6,0.2-3.9-0.1c-6.8-1.5-28.6-6.5-28.6-6.5v21.9l25.9,15.5c7.5,4.5,10.1,14.1,5.9,21.7l-7.6,13.9 h19.8v-45.8L149,119.1z"></path> </g></svg>
        </span>
        
    <div className='mt-8 font-black text-5xl animate-pulse'>
          Teleport
        </div>
    </div>
    </>
  )
}

export default GradientLoader
