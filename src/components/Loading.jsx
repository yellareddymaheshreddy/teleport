import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div>
            <div id="box-container">
                <div class='boxes box1'></div>
                <div class='boxes box2'></div>
                <div class='boxes box3'></div>
            </div>
            <div class="text">
                <b>Loading...</b>
            </div>
        </div>
    )
}

export default Loading
