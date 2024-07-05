import React, { useEffect, useRef } from 'react'
import './RightArrowButton.css'

function RightArrowButton({ title, color, btnWidth }) {

    const spanRef = useRef(null);
    const btnInner = useRef(null);
    const btn = useRef();

    const getSpanWidth = () => {
        if (spanRef.current && btnInner.current) {
            const spanWidth = spanRef.current.getBoundingClientRect().width;
            const btnInnerWidth = btnInner.current.getBoundingClientRect().width;
            const distanceTrans = btnInnerWidth - spanWidth;
            spanRef.current.style.setProperty('--span-width', `${distanceTrans}px`);
        }
        return 0;
    }

    return (
        <button ref={btn} onMouseEnter={getSpanWidth} className={`btnc ${color} ${btnWidth}`}>
            <div className="btnc-inner">
                <div ref={btnInner} className="btnc-inner-text">
                    <span ref={spanRef} className='span-text-btnc'>{title}</span>
                </div>
                <div className="arrow-right"></div>
            </div>
        </button>
    )
}

export default RightArrowButton