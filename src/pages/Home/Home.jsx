import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import Header from '../../components/common/Header/Header.jsx'
import Footer from '../../components/common/Footer/Footer.jsx'
import Banner from './components/Banner/Banner.jsx'
import PartOne from './components/PartOne/PartOne.jsx'
import PartTwo from './components/PartTwo/PartTwo.jsx'
import PartThree from './components/PartThree/PartThree.jsx'
import PartFour from './components/PartFour/PartFour.jsx'
import PartFive from './components/PartFive/PartFive.jsx'
import PartSix from './components/PartSix/PartSix.jsx'
import ScrollUpButton from '../../components/common/ScrollUpButton/ScrollUpButton.jsx'

function Home() {

    const webRef = useRef(null);
    const entireWebRef = useRef(null);
    const [heightWeb, setWebHeight] = useState(0);

    useEffect(() => {
        if (webRef.current) {
            setWebHeight(webRef.current.offsetHeight);
        }
    }, [webRef]);

    useEffect(() => {
        if (entireWebRef.current) {
            entireWebRef.current.style.setProperty('--web-height', `${heightWeb}px`);
        }
    }, [heightWeb]);

    return (
        <div className="outside-layout">
            <ScrollUpButton distances='900' />
            <div ref={entireWebRef} className="entire-web">
                <div className="entire-web-col"></div>
                <div className="entire-web-col"></div>
                <div className="entire-web-col"></div>
                <div className="entire-web-col"></div>
                <div ref={webRef} className="entire-web-inner">
                    <Header textColor='white' logoColor='white' scrollDown='900' />
                    <Banner />
                    <PartOne />
                    <PartTwo />
                    <PartThree />
                    <PartFour />
                    <PartFive />
                    <PartSix />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home
