import React, { useEffect, useRef, useState } from 'react'
import './PartTwo.css'
import ButtonVideo from '../../../../components/common/ButtonVideo/ButtonVideo'

function PartTwo() {

    // set height for body-row2 based on img
    const [imgHeight, setImgheight] = useState(0);
    const image = useRef();
    useEffect(() => {

        const updateHeight = () => {
            if (image.current) {
                setImgheight(image.current.offsetHeight)
            }
        }
        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight)
        }
    }, [])

    return (
        <div className="body-row2" style={{ height: imgHeight }}>
            <img ref={image} src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h4-img-4.jpg" alt="" />
            <div className="text-content">
                <h5 className='h5-title'>ADRENALIN</h5>
                <h3 className='h3-title'>PURE<br />ADRENALIN<br />RUSH</h3>
            </div>
            <div className="btn-vid-box">
                <ButtonVideo />
            </div>
        </div>
    )
}

export default PartTwo