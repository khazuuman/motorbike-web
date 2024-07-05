import React, { useEffect, useState } from 'react'
import './ScrollUpButton.css'

function ScrollUpButton({ distances }) {

    const [BtnActive, setBtnActive] = useState(false);
    useEffect(() => {
        const activeBtn = () => {
            if (scrollY > distances) {
                setBtnActive(true)
            } else {
                setBtnActive(false)
            }
        }
        window.addEventListener('scroll', activeBtn);
        return () => {
            window.addEventListener('scroll', activeBtn);
        }
    }, [])

    const scrollUp = () => {
        window.scrollTo(0, 0);
    }

    return (
        <button onClick={scrollUp} className={`suBtn ${BtnActive ? '' : 'hidden'}`}>
            <div className="arrow-up"></div>
            <span className='suBtn-line-col'></span>
        </button>
    )
}

export default ScrollUpButton