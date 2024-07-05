import React, { useRef } from 'react'
import './NextPrevButton.css'

function NextPrevButton({ title, direct, color }) {

    const spanRef = useRef(null);
    const btnInnerText = useRef(null);
    const btnInner = useRef(null);

    const getSpanWidth = () => {
        if (spanRef.current && btnInnerText.current) {
            const spanWidth = spanRef.current.getBoundingClientRect().width;
            const btnInnerTextWidth = btnInnerText.current.getBoundingClientRect().width;
            if (direct === "left") {
                const distanceTrans = spanWidth - btnInnerTextWidth;
                spanRef.current.style.setProperty('--span-width', `${distanceTrans}px`);
            } else {
                const distanceTrans = btnInnerTextWidth - spanWidth + 0.5;
                spanRef.current.style.setProperty('--span-width', `${distanceTrans}px`);
            }
        }
        return 0;
    }

    return (
        <button onMouseEnter={getSpanWidth} className={`btnd ${direct} ${color}`}>
            <div ref={btnInner} className="btnd-inner">
                <div ref={btnInnerText} className="btnd-inner-text">
                    <span ref={spanRef} className="span-text-btnd">{title}</span>
                </div>
                <div className="arrow"></div>
            </div>
        </button>
    )
}

export default NextPrevButton