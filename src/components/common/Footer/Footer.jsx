import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-container-top">
                <div className="footer-top">
                    <div className="footer-top-col1 footer-col">
                        <span className='footer-top-title'>ABOUT GRANDPRIX</span>
                        <span className='footer-text'>If you are looking for the smoothest way to reach the top speed & cruise in front of your competitors, you’re in the right place. Welcome to GrandPrix.</span>
                        <div className="footer-top-col1-bottom">
                            <i class="fa-regular fa-clock"></i>
                            <div className="footer-top-col1-bottom-span">
                                <span className='footer-text'>Monday-Friday: 9am to 5pm; </span>
                                <span className='footer-text'>Satuday: 10am to 2pm</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top-col2 footer-col">
                        <span className='footer-top-title'>OUR SERVICES</span>
                        <a className='footer-text' href="">Chemical Engineering Projects</a>
                        <a className='footer-text' href="">Mining Engineering</a>
                        <a className='footer-text' href="">Construction Engineering</a>
                        <a className='footer-text' href="">Welding Engineering</a>
                        <a className='footer-text' href="">Space Program XYZ</a>
                    </div>
                    <div className="footer-top-col3 footer-col">
                        <span className='footer-top-title'>OFFICE IN NEW YORK</span>
                        <div className="footer-top-col3-row">
                            <i class="fa-solid fa-location-dot"></i>
                            <div className="footer-top-col3-row-bottom">
                                <a className='footer-text' href="">7398 Colonial Rd, Brooklyn</a>
                                <a className='footer-text' href=""> 242 Wythe Ave #4, Brooklyn</a>
                            </div>
                        </div>
                        <div className="footer-top-col3-row">
                            <i class="fa-solid fa-phone"></i>
                            <div className="footer-top-col3-row-bottom">
                                <a className='footer-text' href="">+ (123) 124-567-8901</a>
                                <a className='footer-text' href="">+ (123) 124-567-8901</a>
                            </div>
                        </div>
                        <div className="footer-top-col3-row">
                            <i class="fa-solid fa-envelope"></i>
                            <div className="footer-top-col3-row-bottom">
                                <a className='footer-text' href="">carrier@qodeinteractive.com</a>
                                <a className='footer-text' href="">grand@qodeinteractive.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top-col4 footer-col">
                        <span className='footer-top-title'>OUR LOCATIONS</span>
                        <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/footer-img-5.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 2019 <a href="">QODE INTERACTIVE</a>, ALL RIGHTS RESERVED</span>
            </div>
        </footer>
    )
}

export default Footer