import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div>
            <div id="box-container">
                <div className='boxes box1'></div>
                <div className='boxes box2'></div>
                <div className='boxes box3'></div>
            </div>
            <div className="text">
                <b>Loading...</b>
            </div>
        </div>
    )
}

export default Loading
