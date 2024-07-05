import React, { useEffect, useState } from 'react'
import './LeftBody.css'
import RightArrowButton from '../../../../components/common/RightArrowButton/RightArrowButton.jsx'
import NextPrevButton from '../../../../components/common/NextPrevButton/NextPrevButton.jsx'

function LeftBody() {

    // set display status of select box
    const [selectBoxActive, setSelectBoxActive] = useState(false);
    useEffect(() => {
        const clickOutSide = (e) => {
            if (document.querySelector('.select-box').contains(e.target)) {
                if (selectBoxActive) {
                    setSelectBoxActive(false);
                } else {
                    setSelectBoxActive(true);
                }
            } else {
                setSelectBoxActive(false)
            }
        }
        window.addEventListener('click', clickOutSide)
        return () => {
            window.removeEventListener('click', clickOutSide)
        }
    })

    return (
        <div className="product-list-main-left">
            <div className="product-list-main-left-inner-top">
                <p>SHOWING 1-12 OF 21 RESULTS</p>
                <div className="select-box">
                    <div className="select-box-inner">
                        <span>DEFAULT SORTING</span>
                        <div className="arrow-icon">
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>

                    </div>
                    <div className={`option-box ${selectBoxActive ? '' : 'hidden'}`}>
                        <button>DEFAULT SORTING</button>
                        <button>SORT BY POPULARITY</button>
                        <button>SORT BY AVERAGE RATING</button>
                        <button>SORT BY LATEST</button>
                        <button>SORT BY PRICE: LOW TO HIGH</button>
                        <button>SORT BY PRICE: HIGH TO LOW</button>
                    </div>
                </div>
            </div>
            <div className="product-list-main-left-inner-middle">
                <div className="single-product">
                    <div className="pro-img">
                        <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-2-300x300.jpg" alt="" />
                        <div className="add-cart-btn">
                            <RightArrowButton className='add-cart-btn' title='ADD TO CART' color='red' />
                        </div>
                        <span className='sale-tag'>SALE</span>
                    </div>
                    <div className="single-product-row1">
                        <a href="">FAST</a>
                        <span></span>
                        <a href="">HELMETS</a>
                    </div>
                    <div className="single-product-row2">
                        <a className='pro-name' href="">EXHAUST</a>
                        <div className="price-box">
                            <a className='sale-price' href="">$80.00</a>
                            <a className='original-price' href="">$50.00</a>
                        </div>
                    </div>
                </div>
                <div className="single-product">
                    <div className="pro-img">
                        <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-2-300x300.jpg" alt="" />
                        <div className="add-cart-btn">
                            <RightArrowButton className='add-cart-btn' title='ADD TO CART' color='red' />
                        </div>
                        <span className='sale-tag'>SALE</span>
                    </div>
                    <div className="single-product-row1">
                        <a href="">FAST</a>
                        <span></span>
                        <a href="">HELMETS</a>
                    </div>
                    <div className="single-product-row2">
                        <a className='pro-name' href="">EXHAUST</a>
                        <div className="price-box">
                            <a className='sale-price' href="">$80.00</a>
                            <a className='original-price' href="">$50.00</a>
                        </div>
                    </div>
                </div>
                <div className="single-product">
                    <div className="pro-img">
                        <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-2-300x300.jpg" alt="" />
                        <div className="add-cart-btn">
                            <RightArrowButton className='add-cart-btn' title='ADD TO CART' color='red' />
                        </div>
                        <span className='sale-tag'>SALE</span>
                    </div>
                    <div className="single-product-row1">
                        <a href="">FAST</a>
                        <span></span>
                        <a href="">HELMETS</a>
                    </div>
                    <div className="single-product-row2">
                        <a className='pro-name' href="">EXHAUST</a>
                        <div className="price-box">
                            <a className='sale-price' href="">$80.00</a>
                            <a className='original-price' href="">$50.00</a>
                        </div>
                    </div>
                </div>
                <div className="single-product">
                    <div className="pro-img">
                        <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-2-300x300.jpg" alt="" />
                        <div className="add-cart-btn">
                            <RightArrowButton className='add-cart-btn' title='ADD TO CART' color='red' />
                        </div>
                        <span className='sale-tag'>SALE</span>
                    </div>
                    <div className="single-product-row1">
                        <a href="">FAST</a>
                        <span></span>
                        <a href="">HELMETS</a>
                    </div>
                    <div className="single-product-row2">
                        <a className='pro-name' href="">EXHAUST</a>
                        <div className="price-box">
                            <a className='sale-price' href="">$80.00</a>
                            <a className='original-price' href="">$50.00</a>
                        </div>
                    </div>
                </div>
                <div className="single-product">
                    <div className="pro-img">
                        <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-2-300x300.jpg" alt="" />
                        <div className="add-cart-btn">
                            <RightArrowButton className='add-cart-btn' title='ADD TO CART' color='red' />
                        </div>
                        <span className='sale-tag'>SALE</span>
                    </div>
                    <div className="single-product-row1">
                        <a href="">FAST</a>
                        <span></span>
                        <a href="">HELMETS</a>
                    </div>
                    <div className="single-product-row2">
                        <a className='pro-name' href="">EXHAUST</a>
                        <div className="price-box">
                            <a className='sale-price' href="">$80.00</a>
                            <a className='original-price' href="">$50.00</a>
                        </div>
                    </div>
                </div>
                <div className="single-product">
                    <div className="pro-img">
                        <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/shop-img-2-300x300.jpg" alt="" />
                        <div className="add-cart-btn">
                            <RightArrowButton className='add-cart-btn' title='ADD TO CART' color='red' />
                        </div>
                        <span className='sale-tag'>SALE</span>
                    </div>
                    <div className="single-product-row1">
                        <a href="">FAST</a>
                        <span></span>
                        <a href="">HELMETS</a>
                    </div>
                    <div className="single-product-row2">
                        <a className='pro-name' href="">EXHAUST</a>
                        <div className="price-box">
                            <a className='sale-price' href="">$80.00</a>
                            <a className='original-price' href="">$50.00</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-list-main-left-inner-bottom">
                <NextPrevButton direct='left' title='PREV' color='white'/>
                <NextPrevButton direct='right' title='NEXT' color='white'/>
            </div>
        </div>
    )
}

export default LeftBody