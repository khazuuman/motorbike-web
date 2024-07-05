import React, { useState, useEffect } from 'react'
import './ButtonVideo.css'

function ButtonVideo() {

    return (
        <button className='btnv'>
            <div className="circle">
                <div className='text'>
                    <span>PLAY</span>
                </div>
                <div className='icon'>
                    <i className="fa-solid fa-play"></i>
                </div>
            </div>
        </button>
    )
}

export default ButtonVideo