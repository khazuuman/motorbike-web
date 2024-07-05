import React from 'react'
import './Banner.css'
import RightArrowButton from '../../../../components/common/RightArrowButton/RightArrowButton.jsx'
import NextPrevButton from '../../../../components/common/NextPrevButton/NextPrevButton.jsx'
function Banner() {
    return (
        <div className='banner'>
            <div className="banner-inner-middle">
                <div className="banner-inner-middle-left">
                    <span>RS2K19</span>
                </div>
                <div className="banner-inner-middle-center">
                    <h5 className='h5-title'>PERFORMANCE</h5>
                    <h3 className='h3-title'>SLICK NEW CARBON BODY</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis enim tempore. Est, quam quisquam laborum aliquid aspernatur deleniti eius sint.</p>
                    <div className="banner-inner-middle-btn-box">
                        <RightArrowButton title='VIEW MORE' color='red'/>
                        <RightArrowButton title='CONTACT US' color='white'/>
                    </div>
                </div>
                <div className="banner-inner-middle-right">

                </div>
            </div>
            <div className="banner-inner-bottom">
                <NextPrevButton title='NEXT' direct='right' color='black'/>
                <NextPrevButton title='PREV' direct='left' color='black'/>
            </div>
        </div>
    )
}

export default Banner