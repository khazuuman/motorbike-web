import { useRef } from 'react'
import React from 'react'
import './ButtonReadMore.css'

function ButtonReadMore() {

    const spanRef = useRef(null);
    const btnInner = useRef(null);

    const getSpanWidth = () => {
        if (spanRef.current && btnInner.current) {
            const spanWidth = spanRef.current.getBoundingClientRect().width;
            const btnInnerWidth = btnInner.current.getBoundingClientRect().width;
            const distanceTrans = btnInnerWidth - spanWidth + 14;
            spanRef.current.style.setProperty('--span-width', `${distanceTrans}px`);
        }
        return 0;
    }

    return (
        <button onMouseEnter={getSpanWidth} className='btnrm'>
            <div className="btnrm-inner">
                <div ref={btnInner} className="btnrm-inner-text">
                    <span ref={spanRef} className='span-text-btnrm'>READ MORE</span>
                </div>
                <div className="arrow-right"></div>
            </div>
        </button>
    )
}

export default ButtonReadMore