import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import useClickOuside from '../../../services/hooks/useClickOuside';

function Header({ textColor, logoColor, scrollDown }) {

    // display header when scroll down
    const [stickyActive, setStickyActive] = useState(false);
    useEffect(() => {
        const updateStickyActive = () => {
            if (window.scrollY > scrollDown) {
                setStickyActive(true)
            } else {
                setStickyActive(false)
            }
        }
        updateStickyActive();
        window.addEventListener('scroll', updateStickyActive)

        return () => {
            window.removeEventListener('scroll', updateStickyActive)
        }
    }, [stickyActive]);

    // undisplay background when click outside
    const { sectionRef, clickOuside } = useClickOuside(() => setActice(false))

    // change active status of right dropdown box
    const [active, setActice] = useState(false);

    const handleDropBox = () => {
        if (!active) {
            setActice(true)
        } else {
            setActice(false)
        }
    }

    // change logo when header sticky display
    const logo = useRef();
    useEffect(() => {
        if (location.pathname === '/Home' || location.pathname === '/') {
            window.addEventListener('scroll', function () {
                if (window.scrollY > scrollDown && logo.current) {
                    logo.current.src = 'https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/borko-logo-black.png'
                } else {
                    logo.current.src = 'https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/borko-logo-white.png'
                }
            });
        }
    }, []);

    const handleEnterBackground = () => {
        var background = document.querySelector('.background-hover');
        background.classList.add("background-active");
    }

    const handleLeaveBackground = () => {
        var background = document.querySelector('.background-hover');
        background.classList.remove("background-active");
    }

    // change nav-bar background color (/shop)
    useEffect(() => {
        if (location.pathname === '/shop') {
            var navBar = document.querySelector('.nav-bar');
            navBar.style.backgroundColor = '#fff'
        }
    }, [])

    return (
        <header className={stickyActive ? 'sticky' : ''}>
            <div className={`background-hover ${active ? 'background-active' : ''}`}></div>
            <div className="nav-bar" onClick={clickOuside}>
                <a className='shop-icon' href="">
                    <img ref={logo} src={(logoColor === 'black') ? 'https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/borko-logo-black.png' : 'https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/borko-logo-white.png'} alt="" />
                </a>
                <nav>
                    <ul className={`nav-bar-ul ${textColor}`}>
                        <li onMouseLeave={handleLeaveBackground} onMouseEnter={handleEnterBackground}>
                            <a className='text-nav' href=""><span>HOME</span></a>
                            <ul className='dropdown-lv1'>
                                <div className="dropdown-lv1-inner">
                                    <li>
                                        <a href="">
                                            <span className='line-outer'></span>
                                            <span className='text'>MAIN HOME</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className='line-outer'></span>
                                            <span className='text'>MOTORCYCLE SHOP</span>
                                        </a>
                                    </li>
                                    <li>

                                        <a href="">
                                            <span className='line-outer'></span>
                                            <span className='text'>RACING CLUB</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className='line-outer'></span>
                                            <span className='text'>PRODUCT SHOWCASE</span>
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li onMouseLeave={handleLeaveBackground} onMouseEnter={handleEnterBackground}><a className='text-nav' href=""><span>PAGES</span></a></li>
                        <li onMouseLeave={handleLeaveBackground} onMouseEnter={handleEnterBackground}><a className='text-nav' href=""><span>PORTFOLIO</span></a></li>
                        <li onMouseLeave={handleLeaveBackground} onMouseEnter={handleEnterBackground}><a className='text-nav' href=""><span>BLOG</span></a></li>
                        <li onMouseLeave={handleLeaveBackground} onMouseEnter={handleEnterBackground}><a className='text-nav' href=""><span>SHOP</span></a></li>
                        <li onMouseLeave={handleLeaveBackground} onMouseEnter={handleEnterBackground}><a className='text-nav' href=""><span>LANDING</span></a></li>
                    </ul>
                </nav>
                <div className="search-cart-button">
                    <input className={`search-inp ${textColor}`} type="text" name="" id="" placeholder='SEARCH' />
                    <span className={`cart-span ${textColor}`}>CART <span>0</span></span>
                    <div className="header-button-box-right" ref={sectionRef}>
                        <button onClick={handleDropBox} className='header-button-right'>
                            <span className='circle-icon-box'>
                                <span className='rowc circle-row1'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className='rowc circle-row2'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className='rowc circle-row3'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>
                        <div className={`button-content-inner ${active ? 'btn-display' : 'btn-hide'}`}>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header