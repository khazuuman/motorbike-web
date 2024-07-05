import React from 'react'
import './Login.css'
import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'
import Button3 from '../../components/common/Button3/Button3'

function Login() {
    return (
        <div>
            <Header textColor='black' logoColor='black' scrollDown='200'/>
            <div className="login-body">
                <div className="title">
                    <h1>MY ACCOUNT</h1>
                </div>
                <div className="login-input-container">
                    <div className="login-input-inner">
                        <h2>LOGIN</h2>
                        <label htmlFor="userName">User name or email address*</label>
                        <input type="text" name="userName" id="" />
                        <label htmlFor="userPass">Password *</label>
                        <input type="password" name="userPass" id="" />
                        <div className="checkbox-btn">
                            <input type="checkbox" name="" id="" /> <span>Remember me</span>
                            <Button3 title='LOG IN' />
                        </div>
                        <a className='lost-pass' href="">Lost your password?</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login