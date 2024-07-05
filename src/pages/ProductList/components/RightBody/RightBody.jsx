import React, { useState } from 'react'
import './RightBody.css'
import RangeSlider from '../../../../components/ui/RangeSlider.jsx'
import RightArrowButton from '../../../../components/common/RightArrowButton/RightArrowButton.jsx'

function RightBody() {

    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(0)

    return (
        <div className="product-list-main-right">
            <div className="pro-search-box">
                <input className='pro-search' type="text" name="" id="" placeholder='TYPE YOUR SEARCH' />
                <button className='search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="filter-box">
                <h4>FILTER BY PRICE</h4>
                <RangeSlider min={0}
                    max={100000000}
                    onChange={({ min, max }) => {
                        setPriceMin(min);
                        setPriceMax(max);
                    }} />
                <div className="filter-box-btn">
                    <RightArrowButton title='FILTER' color='red' btnWidth='short' />
                </div>
            </div>
            <div className="category-box">
                <h4>CATEGORIES</h4>
                <ul>
                    <li><a href="">FAST</a></li>
                    <li><a href="">HELMETS</a></li>
                    <li><a href="">LEATHER</a></li>
                    <li><a href="">MOTO</a></li>
                    <li><a href="">QUALITY</a></li>
                    <li><a href="">SOUND</a></li>
                    <li><a href="">SPEED</a></li>
                </ul>
            </div>
            <div className="tag-box">
                <h4>TAGS</h4>
                <div className="tag-list">
                    <a href="">APPS</a> <span></span>
                    <a href=""><a href=""></a>FAST</a> <span></span>
                    <a href="">FUTURE</a> <span></span>
                    <a href="">MODERN ART</a> <span></span>
                    <a href="">MOTO</a> <span></span>
                    <a href="">RIDE</a> <span></span>
                    <a href="">SPORT</a> <span></span>
                    <a href="">TRACK</a>
                </div>
            </div>
        </div>
    )
}

export default RightBody