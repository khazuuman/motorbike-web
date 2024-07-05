import React, { useEffect, useRef, useState } from 'react'
import './PartSix.css'
import ButtonReadMore from '../../../../components/common/ButtonReadMore/ButtonReadMore';

function PartSix() {

    const bodyRow6 = useRef(null);
    const row6Content = useRef(null);
    const [row6Height, setRow6Height] = useState(0);

    useEffect(() => {
        if (row6Content.current) {
            setRow6Height(row6Content.current.offsetHeight);
        }
    }, [row6Content]);

    useEffect(() => {
        if (bodyRow6.current) {
            bodyRow6.current.style.setProperty('--web-height-row6', `${row6Height}px`);
        }
    }, [row6Height]);

    return (
        <div ref={bodyRow6} className="body-row6">
            <span>RACING</span>
            <div ref={row6Content} className="row6-content">
                <div className="text-content left-text">
                    <h5 className='h5-title'>ADRENALINE</h5>
                    <h3 className='h3-title'>ACCELERATING YOUR RIDING STYLE</h3>
                    <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat hellus rra null aut metus varius laoreet srtrum. Imperdiet e uricies vel augue dapibus in, viverra quis srtrum aenean.</p>
                    <ButtonReadMore />
                </div>
                <div className="row6-img">
                    <div className="row6-img-left">
                        <a href="">DYNAMIC CAMPING <span className="row6-arrow-right"></span></a>
                        <div className="row6-img-left-inner">
                            <span className='corner one'></span>
                            <span className='corner two'></span>
                            <span className='corner three'></span>
                            <span className='corner four'></span>
                            <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h4-img-6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row6-img-right">
                        <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/white_helmet-2.png" alt="" />
                        <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/08/h1-img-9.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartSix